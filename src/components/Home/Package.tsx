import React, { useState } from 'react'
import Heading from '../common/Heading'
import Modal from '../common/Modal';
import { RiCheckboxCircleFill } from "react-icons/ri";

interface IItem {
    name: string;
    price: string;
}

const Package = ():React.JSX.Element => {
    const [open, setOpen] = useState(false)
    const items: IItem[] = [
        { name: 'Basic Membership', price: '$10' },
        { name: 'Standard Membership', price: '$20' },
        { name: 'Premium Membership', price: '$30' }
    ];

    const body = (
        <div className='p-10'>
            <h1 className='font-light text-2xl leading-8 text-center text-secondary'>Standard Membership</h1>
            <p className='text-[#B47000] text-center my-8 text-[36px] leading-[49px] '>48 CND <sub className='text-[#B47000] text-[18px] leading-6 font-semibold'>6 month</sub></p>
            <div className='grid grid-cols-1 gap-6 '>
                {
                    [...Array(7)].map((_item, index)=>{
                        return(
                            <div key={index} className='flex items-center text-secondary text-[16px] leading-5 font-normal gap-[14px]'>
                                <h1></h1>
                                <RiCheckboxCircleFill size={24} color='#555555' />
                                3 New Classes Every Week
                            </div>
                        )
                    })
                }
            </div>

            <button 
                style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    borderRadius: 4,
                    height: 56,
                    margin: "56px auto 0 auto"
                }}
                className='
                    bg-[#3C3C3C]
                    text-[#F2F2F2] font-normal text-[16px] leading-5
                '
            >
                Buy Now
            </button>
        </div>
    )
    
    return (
        <div className='container'>
            <Heading title='Membership Options' style='text-center' />

            <div className='mt-[60px] grid grid-cols-3 gap-6'>
                {
                    items.map((item, index)=>{
                        return (
                            <div key={index} className='bg-base rounded p-6'>
                                <p className='text-secondary text-center font-normal text-[24px] leading-8'>{item?.name}</p>
                                <p className='text-secondary text-center font-semibold text-[32px] leading-[43px]'>{item?.price}</p>
                                <button
                                    onClick={()=>setOpen(true)} 
                                    style={{
                                        width: 174,
                                        border: "none",
                                        outline: "none",
                                        borderRadius: 4,
                                        height: 48,
                                        margin: "30px auto 0 auto"
                                    }}
                                    className='
                                        bg-[#2F2F2F]
                                        flex flex-row-reverse items-center justify-center gap-1 
                                        text-[#F2F2F2] font-normal text-[16px] leading-5
                                    '
                                >
                                    Buy Now 
                                </button>
                            </div>
                        )
                        
                    })
                }
            </div>
            
            <Modal open={open} setOpen={setOpen} body={body} />
            
        </div>
    )
}

export default Package