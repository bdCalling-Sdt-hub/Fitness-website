import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FAQ from '../../components/Home/FAQ'
import Hero from '../../components/Home/Hero'
import Package from '../../components/Home/Package'
import ShopProductList from '../../components/Home/ShopProductList'
import About from '../../components/Home/About'
import Class from '../../components/Home/Class'

const Main = ():React.JSX.Element => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Class/>
        </div>
    )
}

export default Main