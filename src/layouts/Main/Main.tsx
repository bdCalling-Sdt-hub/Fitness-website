import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FAQ from '../../components/Home/FAQ'
import Hero from '../../components/Home/Hero'

const Main = ():React.JSX.Element => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Main