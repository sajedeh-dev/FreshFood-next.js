import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

function DetailsPage(props) {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = props;
  return (
    <div className='max-w-4xl m-auto mt-5 '>
      <h2 className="text-2xl font-bold text-red-500 text-center">Details</h2>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:items-center mt-20 justify-center px-5 md:px-0 " >
          <img className=" w-[300px] rounded-lg " src={`/images/${id}.jpeg`} alt={name} />
          <div className="leading-10 mt-4 md:mt-0">
            <h3 className="text-xl font-bold text-red-500 ">{name}</h3>
            <span className="flex items-center font-medium text-gray-900" >
              <Location />
              {details[0].Cuisine}
            </span>
            <span className="flex items-center font-medium text-gray-900" >
              <Dollar />
              {discount ? (price * (100 - discount)) / 100 : price}$
            </span>
            {discount ? (
              <span className=" bg-red-600 px-3 rounded-md text-white ">{discount}$ OFF</span>
            ) : null}
          </div>
        </div>
        <div className=" text-justify md:text-left px-5 md:px-0 text-gray-900 font-normal  mt-20  " >
          <p>{introduction}</p>
        </div>
        <div className="mt-20 px-5 md:px-0" >
          <h4 className="font-bold text-lg text-red-500">Details</h4>
          <ul>
            {details.map((detail, index) => (
              <li className="flex leading-8" key={index}>
                <p className="font-semibold text-gray-950">{Object.keys(detail)[0]}: </p>
                <span>{Object.values(detail)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-20 px-5 md:px-0" >
          <h4 className="font-bold text-lg text-red-500">Ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-20 px-5 md:px-0" >
          <h4 className="font-bold text-lg text-red-500">Recipe</h4>
          {recipe.map((item, index) => (
            <div key={index} className={`p-2 flex gap-2 ${index % 2 ? "bg-gray-100" : "bg-white"}`}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 px-5 md:px-0">
          <button className="bg-[#FEE9DE] rounded-md text-red-700 text-center px-2 w-32 py-1  ">Add to Cart</button>
        </div>
        
      </div>
    </div>
  );
}

export default DetailsPage;
