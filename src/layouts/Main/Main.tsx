import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FAQ from '../../components/Home/FAQ'
import Hero from '../../components/Home/Hero'
import Package from '../../components/Home/Package'

const Main = ():React.JSX.Element => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Package/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Main