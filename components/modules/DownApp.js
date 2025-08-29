

function DownApp() {
  return (
    <div className=" bg-[#FFDDCC]  grid grid-cols-1 md:grid-cols-2 md:items-center gap-6 md:gap4 mt-28 rounded-lg">
        {/* left content */}
       <div className=' text-center md:text-left px-10 mt-12 '>
          <p className='font-semibold text-lg text-red-600 mb-3'>DOWNLOAD APP</p>
          <h2 className=' text-2xl md:text-4xl font-bold text-gray-950 mb-6'>Get Started With Fudo Today!</h2>
          <p className=' text-gray-700 md:text-xl justify-content'>Discover food wherever and whenever and get your food delivered quickly.</p>
          <button className=" bg-red-600 text-white text-sm px-6 py-4 rounded-lg mt-6">Get The App</button>
       </div>
       {/* right content */}
       <div className="ml-20 md:ml-0 md:px-8 md:pt-8">
        <img src=" /images/frame.png"/>
       </div>

    </div>
  )
}

export default DownApp