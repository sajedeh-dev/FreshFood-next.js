import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../modules/Card";

function CategoriesPage({data}) {
   const router = useRouter();

  const [query, setQuery] = useState({ difficulty: "", time: "" });


  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };
  return (
    <div  className='max-w-4xl m-auto mt-32 ' >
      <h2 className="text-2xl font-bold text-red-500 text-center">Categories</h2>
      <div className=" mt-8" >
        <div className=" flex items-center gap-8">
          <select className=" bg-red-300 px-4 py-1 rounded-lg text-red-800 font-medium"
            value={query.difficulty}
            name="difficulty"
            onChange={changeHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select className=" bg-red-300 px-4 py-1 rounded-lg text-red-800 font-medium"
           value={query.time} name="time" onChange={changeHandler}>
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button className=" text-md font-medium text-white bg-red-600 px-6 py-2 rounded-lg" onClick={searchHandler}>Search</button>
        </div>
        <div className=" mt-8 " >
          {!data.length ? (
            <img src="/images/search.png" alt="Category" />
          ) : null}
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage