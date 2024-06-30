import Hero from '../components/Home/Hero';
import FAQ from '../components/Home/FAQ'
import Package from '../components/Home/Package'
import ShopProductList from '../components/Home/ShopProductList'
import Class from '../components/Home/Class'
import Feedback from './Feedback';
import { Modal } from 'antd';
import MetaTag from '../components/common/MetaTag';

const Home = (): React.JSX.Element => {
    return (
        <>
            <MetaTag title='' />
            <div className='flex flex-col justify-start items-start gap-10 lg:gap-16 xl:gap-24 mb-20'>
                <Hero />
                <Package />
                <Feedback />
                <Class />
                <FAQ />
            </div>
        </>
    )
}

export default Home