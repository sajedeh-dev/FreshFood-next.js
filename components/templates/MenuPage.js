import Card from "../modules/Card";


function MenuPage({data}) {
    console.log(data);
  return (
    <div className='max-w-4xl m-auto mt-10 '>
        <h2 className="text-2xl font-bold text-red-500 text-center">Menu</h2>
        <div className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10   ">{
            data.map((food) => (<Card key={food.id} {...food}/>))
                }
        </div>
    </div>
  )
}

export default MenuPage