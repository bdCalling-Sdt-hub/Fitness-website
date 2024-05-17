/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import Heading from '../common/Heading';
import { MdKeyboardArrowRight } from 'react-icons/md';

const FAQ = (): React.JSX.Element => {
    const [tab, setTab] = useState<boolean>(false);
    const [tabID, setTabID] = useState<number>();
    const elementRef = useRef(null);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        if (elementRef.current) {
            setHeight(elementRef.current.clientHeight);
        }
    }, []);
    return (
        <div className='container'>
            <Heading title='Frequently Asked Questions'  style='text-center'/>

            <div className='mt-10'>
                <div className='grid grid-cols-1 gap-6 w-[820px] mx-auto'>
                    {
                        [...Array(5)].map((_item: any, index)=>{
                            return (
                                <div 
                                    key={index}
                                    className={` 
                                        p-4 rounded-[4px] border border-secondary   border-opacity-[12%]
                                        ${tab && tabID === index ? `h-[200px]` : 'h-[60px] '} transition-h duration-300 overflow-hidden
                                    `}
                                >
                                    <div onClick={()=>(setTabID(index), setTab(!tab))} className='flex cursor-pointer items-center justify-between mb-4 '>
                                        <p className='text-[20px] leading-5 font-normal text-secondary'>What is an affiliate e-commerce website?</p>

                                        <div className='w-7 h-7 border border-[#B47000] rounded-full flex items-center justify-center'>
                                            <MdKeyboardArrowRight  color='#B47000' size={22}
                                                className={` transition-rotate duration-300
                                                    ${tab && tabID === index ? "rotate-90" : "0"}
                                                `}
                                            />
                                        </div>
                                        
                                    </div>
                                    <div ref={elementRef} className='text-[16px] leading-6 font-normal text-secondary'>
                                        convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada 
                                        tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default FAQ;