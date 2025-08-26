import Location from "../icons/Location"
import Dollar from "../icons/Dollar"
import Link from "next/link";

function Card(props) {
    const {id , name , price , details , discount} = props;
  return (
    <div className=" w-56 h-80 flex flex-col gap-y-3  bg-white shadow-lg rounded-lg p-2 m-auto ">
        <img src={`/images/${id}.jpeg`} alt="{name}"/>
        <div className=" flex justify-between px-3 py-4 md:px-0  ">
            <h4 className=" text-sm font-semibold text-gray-900">{name}</h4>
            <div className=" flex justify-center">
                <Location/>
                <p className=" text-sm">{details[0].Cuisine}</p>
            </div>
        </div>
        <div className="flex">
            <Dollar/>
            {
                discount ? (<span className="text-red-600 text-sm font-medium">{(price * (100 - discount))/100}$</span>) : (<span className="text-green-700 text-sm font-medium">{price}$</span>)
            }
            
        </div>
        <div >
          <Link className="bg-[#FEE9DE] rounded-md text-red-700 text-center px-2 w-32 py-1 mt-3 inline-block "href={`/menu/${id}`}>see details</Link>
          { discount ? <span className=" bg-red-500  rounded-md text-white px-2 ml-8">{discount}%</span> : null}
        </div>
        
    </div>
  )
}

export default Card