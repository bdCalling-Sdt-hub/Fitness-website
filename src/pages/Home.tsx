import Hero from '../components/Home/Hero';
import FAQ from '../components/Home/FAQ'
import Package from '../components/Home/Package'
import ShopProductList from '../components/Home/ShopProductList'
import About from '../components/Home/About'
import Class from '../components/Home/Class'
import Feedback from './Feedback';
import { Modal } from 'antd';

const Home = (): React.JSX.Element => {
    return (
        <div className='flex flex-col justify-start items-start gap-10 lg:gap-16 xl:gap-24'>
            <Hero />
            <Package />
            <ShopProductList />
            <About />
            <FAQ />
            <Class />
            <Feedback />
        </div>
    )
}

export default Home