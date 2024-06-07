import React, { useEffect } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading';
import { GetAboutContent } from '../States/About/GetAboutContentSlice';
import { useAppDispatch, useAppSelector } from '../Store/hook';

const AboutUs = ():React.JSX.Element => {
    const dispatch = useAppDispatch()
    const {About}=useAppSelector(state=>state.GetAboutContent)
    console.log(About)
    useEffect(() => {
        dispatch(GetAboutContent())
    }, [])
    return (
        <div className='container pb-20'>
            <Navigation name='About Us' />
            <Heading title='About Us' style='mb-6' />

    <div dangerouslySetInnerHTML={{ __html: About[0]?.description }}>
    </div>

        </div>
    )
}

export default AboutUs