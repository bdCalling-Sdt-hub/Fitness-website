import React, { useEffect, useState } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading';
import { GetAboutContent } from '../States/About/GetAboutContentSlice';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import About from '../components/Home/About';
import { Modal } from 'antd';

const AboutUs = (): React.JSX.Element => {
    const [showMidal,setShowModal]=useState(false)
    const dispatch = useAppDispatch()
    const { AboutUs } = useAppSelector(state => state.GetAboutContent)
    useEffect(() => {
        dispatch(GetAboutContent())
    }, [])
    return (
        <div className='container pb-20 pt-20'>
            <About setShowModal={setShowModal} />
            <Modal 
            open={showMidal}
            onCancel={()=>setShowModal(false)}
            centered 
            footer={false}
            width={700}
            >
                <div className='p-6 pt-8' dangerouslySetInnerHTML={{ __html: AboutUs[0]?.description }}>
                </div>
            </Modal>
        </div>
    )
}

export default AboutUs