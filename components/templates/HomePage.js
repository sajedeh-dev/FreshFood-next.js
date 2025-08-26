import Banner from '../modules/Banner'
import Guide from '../modules/Guide'
import Services from '../modules/Services'
// import Slider from '../modules/Slider'

function HomePage() {
  return (
    <div className='max-w-4xl m-auto mt-32 '>
        <Banner/>
        <Guide/>
        <Services/>
        {/* <Slider/> */}
    </div>
  )
}

export default HomePage