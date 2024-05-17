import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FAQ from '../../components/Home/FAQ'

const Main = ():React.JSX.Element => {
    return (
        <div>
            <Navbar/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Main