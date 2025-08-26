import Link from "next/link";


function Guide() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 text-center mx-6 px-10 md:px-6  gap-3 md:gap-16 mt-20" >
      <Link className="bg-[#FEE9DE] rounded-lg font-medium  text-[#EB0029] px-5 py-2 hover:shadow-xl transition-all duration-100 hover:scale-105 " href="/menu">Menu</Link>
      <Link className="bg-[#FEE9DE] rounded-lg font-medium  text-[#EB0029] px-5 py-2 hover:shadow-xl transition-all duration-100 hover:scale-105 " href="/categories">Categories</Link>
      <Link className="bg-[#FEE9DE] rounded-lg font-medium  text-[#EB0029] px-5 py-2 hover:shadow-xl transition-all duration-100 hover:scale-105  " href="/">Discount</Link>
    </div>
  );
}

export default Guide;