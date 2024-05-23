import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import Heading from '../common/Heading';

interface IItemProps {
    name: string;
    image: string;
    price: string;
}

const ShopProductList = (): React.JSX.Element => {
    const navigate = useNavigate()
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
        <div className='container'>
            <div className='flex items-center justify-between mb-6'>
                <Heading title='Shop' style='mb-0' />
                <Link to={"/"} className='text-[16px] text-primary leading-5 font-medium underline'>
                    View All
                </Link>
            </div>

            <div className='flex items-center justify-between mt-10'>
                {
                    data?.slice(0, 4)?.map((item, index) => {
                        return (
                            <div onClick={(): void => {
                                navigate(`/product-details/${'item?._id'}`)
                            }}
                                key={index}
                                className='relative group w-[272px] rounded-lg border border-[#EEEEEE] p-5 cursor-pointer'
                                style={{
                                    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                                }}
                            >
                                <img
                                    src={item?.image}
                                    style={{ width: 194, height: 194, margin: "0 auto" }}
                                    alt=""
                                    className='group-hover:scale-105 transition-all duration-75'
                                />
                                <h1 className='text-[18px] font-normal leading-6 text-secondary mt-10'>{item?.name}</h1>
                                <h1 className='text-[32px] font-normal mt-2 text-secondary leading-[43px]'>${item?.price} CND</h1>

                                <div className='absolute top-4 right-4 ' onClick={(e) => {
                                    // (e.stopPropagation())
                                }}>
                                    <BsCart2 size={24} color='#905A00' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
    return (
        <div>ShopProductList</div>
    )
}

export default ShopProductList