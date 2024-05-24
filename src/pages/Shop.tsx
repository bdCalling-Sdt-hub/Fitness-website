import React from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Select } from 'antd';
import { BsCart2 } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
const { Option } = Select;


interface IItemProps{
    name: string;
    image: string;
    price: string;
}
const Shop = ():React.JSX.Element => {
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
        <div className='container pb-20'>
            <Navigation name='Shop' />
            <MetaTag title='Shop' />

            <div className='flex items-center flex-wrap justify-between'>
                <Heading title='Shop' />
                {/* filter section */}
                <div  className='max-w-[500px] min-w-[280px] sm:min-w-[360px] md:min-w-[500px] grid grid-cols-2 gap-6'>
                    <Select
                        style={{
                            width: "100%",
                            height: 48,
                            border: "1px solid #E7EBED",
                            outline: "none",
                            borderRadius: 8
                        }}
                        className="poppins-regular text-[#6A6A6A] text-[14px] leading-5"
                        defaultValue={"Gender"}
                    >
                        <Option value="girl">Girl</Option>
                        <Option value="boy">Boy</Option>
                        <Option value="baby">Baby</Option>
                    </Select>

                    <Select
                        style={{
                            width: "100%",
                            height: 48,
                            border: "1px solid #E7EBED",
                            outline: "none",
                            borderRadius: 8
                        }}
                        className="poppins-regular text-[#6A6A6A] text-[14px] leading-5"
                        defaultValue={"Sort By"}
                    >
                        <Option value="low_to_high">Low to High</Option>
                        <Option value="high_to_low">High to Low</Option>
                        <Option value="avarage">Avarage</Option>
                    </Select>
                </div>
            </div>


            <div className='flex flex-col items-start justify-start md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:items-center  gap-6 mt-10'>
                {
                    data?.map((item, index)=>{
                        return (
                            <div onClick={()=>{
                                navigate(`/product-details/${index}`)
                            }}
                                key={index}  
                                className='relative group w-full h-full rounded-lg border border-[#EEEEEE] p-5 cursor-pointer'
                                style={{
                                    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                                }}
                            >
                                <img 
                                    src={item?.image} 
                                    style={{width: 194, height: 194, margin: "0 auto"}} 
                                    alt=""
                                    className='group-hover:scale-105 transition-all duration-100'
                                />
                                <h1 className='text-[16px] font-normal leading-5 text-secondary mt-10'>{item?.name}</h1>
                                <h1 className='text-[26px] font-normal mt-2 text-secondary leading-[36px]'>${item?.price} CND</h1>

                                <div className='absolute top-4 right-4' onClick={(e)=> (e.stopPropagation())}>
                                    <Link to={`/product-details/${index}`}>
                                        <BsCart2 size={24} color='#905A00' />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>



        </div>
    )
}

export default Shop