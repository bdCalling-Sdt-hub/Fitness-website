import React from 'react';
import Banner from "../../assets/about_banner.png";
import Heading from '../common/Heading';

const About = ():React.JSX.Element => {
    return (
        <div className='container grid grid-cols-2 gap-10'>
            <div>
                <img src={Banner} alt="" />
            </div>

            <div className=' h-fit my-auto'>
                <button 
                    style={{
                        width: 226,
                        border: "none",
                        outline: "none",
                        borderRadius: 4,
                        height: 48
                    }}
                    className='
                        bg-primary
                        text-[#F2F2F2] font-normal text-[16px] leading-5
                    '
                >
                    About Us
                </button>

                <Heading title='Why You Choose Us ' style='my-6' />
                <p className='text-secondary text-justify font-normal mb-6 text-[16px] leading-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>

                <div className='flex items-center gap-[31px]'>
                    <div className='w-full text-center'>
                        <p className='text-primary font-normal text-[40px] leading-10'>1000+</p>
                        <p className='text-primary font-normal text-[16px] leading-4 mt-2'>Complete Class</p>
                    </div>

                    <div className='h-[30px] w-[1px] bg-[#DADADA] '/>
                    
                    <div className='w-full text-center'>
                        <p className='text-primary font-normal text-[40px] leading-10'>24 hour</p>
                        <p className='text-primary font-normal text-[16px] leading-4 mt-2'>Unlimited Access</p>
                    </div>

                    <div className='h-[30px] w-[1px] bg-[#DADADA] '/>
                    
                    <div className='w-full text-center'>
                        <p className='text-primary font-normal text-[40px] leading-10'>500+</p>
                        <p className='text-primary font-normal text-[16px] leading-4 mt-2'>Students</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About