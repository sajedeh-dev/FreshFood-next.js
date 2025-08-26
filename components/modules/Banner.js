import Link from "next/link";
import { FaPlay } from "react-icons/fa";


function Banner() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 ">
      <div className="p-4 ">
        <span className="bg-[#FEE9DE] rounded-lg text-[#EB0029] px-4 py-2">More than faster 🍒</span>
        <h2 className=" text-3xl font-bold mt-6">Claim Best Offer <br/>on Fast Food & <br/>Restaurants </h2>
        <p className="text-gray-700 font-medium mt-6">Our job is to filling your tummy with delicious food and  with fast and free delivery</p>
        <div className=" flex items-center mt-6 gap-5">
          <Link className="bg-[#FEE9DE] rounded-lg text-[#EB0029] px-5 py-2 " href="/menu">See All</Link>
        <div className=" flex items-center gap-3 cursor-pointer">
          <div className=" size-7  rounded-full bg-yellow-400 flex items-center justify-center "><FaPlay className="size-2" /></div>
          <a className="font-medium  text-gray-700">watch video</a>
        </div>
        </div>
        

      </div>
      <div>
        <img src="/images/bannermain.png" alt="Food image" />
      </div>
    </div>
  );
}

export default Banner;
