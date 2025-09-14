import Image from "next/image"

function DownApp() {
  return (
    <div className=" bg-[#FFDDCC]  grid grid-cols-1 md:grid-cols-2 md:items-center gap-8 md:gap-4 mt-28 md:h-96  rounded-lg">
        {/* left content */}
       <div className=' text-center md:text-left px-10  '>
          <p className='font-semibold text-lg text-red-600 mb-3'>DOWNLOAD APP</p>
          <h2 className=' text-2xl md:text-4xl font-bold text-gray-950 mb-6'>Get Started With Fudo Today!</h2>
          <p className=' text-gray-700 md:text-xl justify-content'>Discover food wherever and whenever and get your food delivered quickly.</p>
          <button className=" bg-red-600 text-white text-sm px-6 py-4 rounded-lg mt-6">Get The App</button>
       </div>
       {/* right content */}
       <div className="bg-white rounded-lg container m-auto w-56 h-72 px-2   flex flex-col gap-4">
        <div className=" flex flex-col gap-4">
          <div className=" bg-[#FEE9DE] flex items-center justify-between px-2 rounded-sm mt-4 ">
            <div className="flex flex-col gap-4 px-5 py-3">
              <h3 className="text-sm font-bold text-gray-900">The fastest in Delivery food</h3>
              <button className=" bg-red-600 text-white text-sm   rounded-lg ">order now</button>
            </div>
            <Image src="/images/takeapp.png" alt="Waiters-rafiki" width={70} height={100}/>
          </div>
          <div className="px-4">
            <h3 className="text-sm font-semibold text-gray-800">Category</h3>
            <div className="flex items-center justify-around mt-4 gap-4">
              <Image src="/images/food1.png" alt="Waiters-rafiki" width={70} height={100}/>
              <Image src="/images/food2.png" alt="Waiters-rafiki" width={70} height={100}/>
            </div>
          </div>
          <div></div>

        </div>
        
       </div>

    </div>
  )
}

export default DownApp