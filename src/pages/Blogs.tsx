import React from 'react';
import Navigation from '../components/common/Navigation';
import Heading from '../components/common/Heading';
import MetaTag from '../components/common/MetaTag';
import Photo from "../assets/photo1.png";
import { LuCalendar } from "react-icons/lu";
import { Link } from 'react-router-dom';

interface IBlogProps {
    title: string;
    date: string;
    topic: string;
    image: string;
    description: string;
}

const Blogs = ():React.JSX.Element => {
    return (
        <div className='container pb-20'>
            <Navigation name='Blogs' />
            <Heading title='Blogs' style='mb-6' />
            <MetaTag title='Blogs' />

            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col justify-start items-start md:items-center mt-10'>
                {
                    [...Array(6)].map((_item: IBlogProps, index)=>{
                        return (
                            <div key={index} className='group'>
                                <div className='overflow-hidden w-full h-full'>
                                    <img 
                                        src={Photo} className='group-hover:scale-125 transition-all duration-300' style={{width: "100%", height: "100%", objectFit: "cover"}} alt="" />
                                </div>

                                <div className='flex items-center gap-4 my-2'>
                                    <LuCalendar size={24} color='#555555' />
                                    <p className='text-secondary font-normal text-[16px] leading-[22px]'>03 Sep 2024</p>
                                    <p className='text-secondary font-normal text-[16px] leading-[22px]'>Topic : Yoga</p>
                                </div>

                                <p className='text-secondary font-medium text-[24px] leading-[34px] mb-2'>Gym Chronicles: Journey to Strength and Stamina</p>
                                <p className='text-secondary font-light text-[16px] leading-[29px] mb-6'>
                                    Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                                    Latin literature from 45 BC, making it over 2000 years old. Richard.
                                </p>

                                <Link to={`/blog-details/2`}>
                                    <button 
                                        style={{
                                            width: "100%",
                                            outline: "none",
                                            borderRadius: 4,
                                            height: 48
                                        }}
                                        className='
                                            border border-primary
                                            text-primary font-normal text-[16px] leading-6
                                        '
                                    >
                                        Read more
                                    </button>
                                </Link>
                                
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Blogs