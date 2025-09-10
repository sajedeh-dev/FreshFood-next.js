import Image from "next/image"

function Services() {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <span className='text-[#EB0029] font-semibold text-lg'>WHAT WE SERVE</span>
            <h1 className='font-bold text-4xl'>Your Favourite Food <br/> Delivery Partner</h1>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 '>
            <div className='grid justify-center p-4 '>
                <Image src="/images/Order food-pana.png" alt="forder" width={600} height={500}/>
                <h2 className='text-center font-bold text-2xl'>Easy To Order</h2>
                <p className='text-center font-medium text-lg text-gray-600'>You only need a few steps in ordering food</p>
            </div>
            <div className='grid justify-center '>
                <Image src="/images/Take Away-rafiki.png" alt="Take Away-rafiki" width={600} height={500}/>
                <h2 className='text-center font-bold text-2xl'>Fastest Delivery</h2>
                <p className='text-center font-medium text-gray-600'>Delivery that is always ontime even faster</p>
            </div>
            <div className='grid justify-center '>
                <Image src="/images/Waiters-rafiki.png" alt="Waiters-rafiki" width={600} height={500}/>
                <h2 className='text-center font-bold text-2xl'>Best Quality</h2>
                <p className='text-center font-medium text-gray-600'>Not only fast for us quality is also number one</p>
            </div>
        </div>
    </div>
  )
}

export default Services