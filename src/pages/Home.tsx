 import Hero from '../components/Home/Hero';
import FAQ from '../components/Home/FAQ'
import Package from '../components/Home/Package'
import ShopProductList from '../components/Home/ShopProductList'
import About from '../components/Home/About'
import Class from '../components/Home/Class'
import Feedback from './Feedback';

const Home = ():React.JSX.Element => {
    return (
        <>
            <Hero/>
            <div className='my-[100px]'>
                <Package/>
            </div>
            <div>
                <ShopProductList/>
            </div>

            <div className='my-[100px]'>
                <About/>
            </div>
            <div>
                <FAQ/>
            </div>

            <div className='my-[100px]'>
                <Class/>
            </div>
            <div className='my-[100px]'>
              <Feedback/>
            </div>
            {/* <Test/> */}
        </>
    )
}

export default Home