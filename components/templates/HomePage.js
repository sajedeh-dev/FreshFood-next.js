import AboutUs from '../modules/AboutUs'
import Banner from '../modules/Banner'
import DownApp from '../modules/DownApp'
import Guide from '../modules/Guide'
import Services from '../modules/Services'
// import Slider from '../modules/Slider'

function HomePage() {
  return (
    <div className='max-w-4xl m-auto mt-32 '>
        <Banner/>
        <Guide/>
        <Services/>
        <AboutUs/>
        <DownApp/>
        {/* <Slider/> */}
    </div>
  )
}

export default HomePage