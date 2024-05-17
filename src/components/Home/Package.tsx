import React from 'react'
import Heading from '../common/Heading'

interface IItem {
    name: string;
    price: string;
}

const Package = ():React.JSX.Element => {
    const items: IItem[] = [
        { name: 'Basic Membership', price: '$10' },
        { name: 'Standard Membership', price: '$20' },
        { name: 'Premium Membership', price: '$30' }
    ];
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
        </div>
    )
}

export default Package