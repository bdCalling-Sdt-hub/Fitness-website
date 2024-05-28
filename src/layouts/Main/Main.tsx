import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Modal } from 'antd'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Main = (): React.JSX.Element => {
    const [open, setOpen] = useState(false)
    const [openModalFor, setopenModalFor] = useState('login')
    return (
        <div>
            <Navbar />
            <div className='mt-14'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main