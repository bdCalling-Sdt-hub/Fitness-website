import React, { useState } from 'react';
import Navigation from '../components/common/Navigation';
import MetaTag from '../components/common/MetaTag';
import Heading from '../components/common/Heading';
import photo from "../assets/details.png";
import photo1 from "../assets/details1.jpg";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import RelatedProduct from '../components/RelatedProduct';

interface IItemProps {
    image: string;
}

const ProductDetails = ():React.JSX.Element => {
    const [quantity, setQuantity] = useState(0)

    const data: IItemProps[] = [
        {
            image: "https://res.cloudinary.com/ddqovbzxy/image/upload/v1715939210/ss6aiiwjlu1tsd3xy2hd.png"
        },
        {
            image: "https://res.cloudinary.com/ddqovbzxy/image/upload/v1715939210/ss6aiiwjlu1tsd3xy2hd.png"
        },
        {
            image: "https://res.cloudinary.com/ddqovbzxy/image/upload/v1715939210/ss6aiiwjlu1tsd3xy2hd.png"
        },
        {
            image: "https://res.cloudinary.com/ddqovbzxy/image/upload/v1715939210/ss6aiiwjlu1tsd3xy2hd.png"
        },
    ]

    return (
        <div className='container pb-20'>
            <Navigation name='Product Details' />
            <MetaTag title='Product Details' />
            <Heading title='Product Details' style='mb-6' />

            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <div className='w-full  border p-10'>
                        <img src={photo1} style={{width: "100%", height: "100%", objectFit: "contain"}} alt="" />
                    </div>
                    <div className='grid grid-cols-4 gap-[14px] mt-[14px]'>
                        {
                            [...Array(4)]?.map((item: unknown, index)=>{
                                return (
                                    <div key={index} className=' h-[160px] flex items-center justify-center border border-[#DADADA] p-3'>
                                        <img src={photo} alt="" />
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-[40px] leading-[54px] text-secondary font-normal mb-2'>The Dumbbell</h1>
                    <p className='text-[20px] leading-[27px] text-secondary font-normal mb-6'>Price: $150 CND</p>

                    <p className='text-[16px] leading-[21px] text-secondary font-normal mb-4'>Quantity</p>
                    <div className='border w-[160px] h-[48px] flex items-center justify-between px-4 mb-10'>
                        <button disabled={quantity === 0} onClick={()=>setQuantity(quantity - 1)}>
                            <HiOutlineMinusSm className='text-secondary' size={24} />
                        </button>
                        <p className='text-[16px] leading-[21px] text-secondary font-normal'>{quantity}</p>
                        <button onClick={()=>setQuantity(quantity + 1)}>
                            <HiOutlinePlusSm className='text-secondary' size={24} />
                        </button>
                    </div>

                    <Button label='Add to Cart' style='border border-secondary text-secondary w-full mb-6' />
                    <Button label='Buy Now' style='bg-secondary text-[#FBFBFB] w-full mb-10' />

                    <p className='text-[16px] leading-[40px] text-secondary font-normal mb-4'>
                        It is a long established fact that a reader will be distracted by the 
                        readable content of a page when looking at its layout. The point of 
                        using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                        as opposed to using 'Content here, content here', making it look like readable English. 
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default 
                        model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                        Various versions have evolved over the years, sometimes by accident
                    </p>

                    <p className='text-[24px] leading-[15px] text-[#242424] font-normal'>INCLUDES:</p>
                    <ul className='list-disc pl-4 mt-6'>
                        <li className='text-[18px] leading-[11px] text-[#242424] font-light mb-3'>1 x The Ball</li>
                        <li className='text-[18px] leading-[11px] text-[#242424] font-light'>1 x The Ball</li>
                    </ul>
                </div>

            </div>

            <div className='w-full h-[1px] bg-[#C2C2C2] my-10' />

            <div className='flex items-center justify-between mb-6'>
                <Heading title='You may also like' />
                <Link to={"/"} className='text-[16px] text-primary leading-5 font-medium underline'>
                    View All
                </Link>
            </div>
            <RelatedProduct/>
        </div>
    )
}

export default ProductDetails