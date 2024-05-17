import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FAQ from '../../components/Home/FAQ'
import Hero from '../../components/Home/Hero'
import Package from '../../components/Home/Package'
import ShopProductList from '../../components/Home/ShopProductList'
import About from '../../components/Home/About'

const Main = ():React.JSX.Element => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
        </div>
    )
}

export default Main