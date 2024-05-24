import React, { useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import Video from "../../assets/video.mp4"
const Hero = (): React.JSX.Element => {


    return (
        <>
            <div className='relative w-full' style={{ height: "calc(100vh - 80px)" }}>
                <video autoPlay muted loop>
                    <source src={Video} />
                </video>

                <div className='absolute top-0 left-0 flex items-center justify-center w-[100%] h-[100%]' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} >
                    <div className=''>
                        <h1 className='text-[#F2F2F2] text-2xl md:text-4xl xl:text-[64px] leading-8  xl:leading-[87px] font-light text-center'>Functional Movement. <br /> Anytime Anywhere.</h1>
                        <button 
                            style={{
                                width: 226,
                                border: "none",
                                outline: "none",
                                borderRadius: 4,
                                height: 56,
                                margin: "56px auto 0 auto"
                            }}
                            className='
                            bg-primary
                            flex flex-row-reverse items-center justify-center gap-1 
                            text-[#F2F2F2] font-normal text-[16px] leading-5
                        '
                        >
                            <MdOutlineArrowOutward color='#F2F2F2' size={24} />
                            Join our Class
                        </button>
                    </div>
                </div>
            </div>
           

        </>
    )
}

export default Hero