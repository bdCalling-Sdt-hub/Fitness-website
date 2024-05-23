import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Modal } from 'antd'
import Login from '../../pages/Login'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Main = (): React.JSX.Element => {
    const [open, setOpen] = useState(false)
    const [openModalFor, setopenModalFor] = useState('login')
    return (
        <div>
            <Navbar setOpen={setOpen} setopenModalFor={setopenModalFor}/>
            <div>
                <Outlet />
            </div>
            <Footer />
            <Modal width={1000} centered open={open} onCancel={() => setOpen(false)} footer={false} >
                <Login openModalFor={openModalFor} setopenModalFor={setopenModalFor}/>
            </Modal>
        </div>
    )
}

export default Main