import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface IItemProps{
    name: string;
    image: string;
    price: string;
}

const RelatedProduct = ():React.JSX.Element => {
    const data: IItemProps[] = [
        {
            name: "The Ball",
            image: "https://res.cloudinary.com/ddqovbzxy/image/upload/v1715939210/d1opftabkgftkzjbgo36.png",
            price: "5000"
        },
        {
            name: "Ab Wheel",
            image: "https://res.cloudinary.com/ddqovbzxy/image/upload/v1715939210/jjri74hg3q5poredozzq.png",
            price: "1500"
        },
        {
            name: "Ab Wheel",
            image: "https://res.cloudinary.com/ddqovbzxy/image/upload/v1715939210/wzsmnlkbvphcyvoxwzcj.png",
            price: "500"
        },
        {
            name: "Ab Wheel",
            image: "https://res.cloudinary.com/ddqovbzxy/image/upload/v1715939210/ss6aiiwjlu1tsd3xy2hd.png",
            price: "640"
        },
    ]
    return (
        <div className='flex items-center justify-between mt-10'>
                {
                    data?.slice(0, 4)?.map((item, index)=>{
                        return (
                            <div 
                                key={index}  
                                className='relative group w-[272px] rounded-lg border border-[#EEEEEE] p-5 cursor-pointer'
                                style={{
                                    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                                }}
                            >
                                <img 
                                    src={item?.image} 
                                    style={{width: 194, height: 194, margin: "0 auto"}} 
                                    alt=""
                                    className='group-hover:scale-105 transition-all duration-75'
                                />
                                <h1 className='text-[16px] font-normal leading-5 text-secondary mt-10'>{item?.name}</h1>
                                <h1 className='text-[26px] font-normal mt-2 text-secondary leading-[36px]'>${item?.price} CND</h1>

                                <div className='absolute top-4 right-4' onClick={(e)=> (e.stopPropagation())}>
                                    <Link to={`/product-details/2`}>
                                        <BsCart2 size={24} color='#905A00' />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default RelatedProduct