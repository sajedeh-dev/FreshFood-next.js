import React from 'react'

function AboutUs() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 md:items-center gap-6 md:gap4 mt-10'>
       {/* left content  */}
       <div className=' relative '>
         <img src='/images/chef.png' />
           <div className='absolute bg-white px-4  text-center py-4 shadow-lg rounded-lg md:left-72 bottom-[-50px]'>
            <p className=' font-medium mb-2'>Our Reviewers</p>
            <div className="flex -space-x-4 rtl:space-x-reverse ">
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src='/images/user.png'alt="" />
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src='/images/user.png' alt="" />
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src='/images/user.png' alt="" />
                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-red-600 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
            </div>
            </div>

       </div>
       {/* right content */}
       <div className=' text-center md:text-left px-4 mt-12 '>
        <p className='font-semibold text-lg text-red-600 mb-3'>WHAT THEY SAY</p>
        <h2 className=' text-2xl md:text-4xl font-bold text-gray-950 mb-6'>What Our Customers Say About Us</h2>
        <p className=' text-gray-700 md:text-xl justify-content'>“Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend Fudo  to you”.</p>
        <div className=' flex items-center justify-center md:justify-start  gap-4 mt-6 '>
            <img src='/images/user.png'/>
            <div >
                <p className=' font-medium text-xl'>Theresa Jordan</p>
                <p className=' font-medium text-lg text-gray-400'>Food Enthusiast</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default AboutUs