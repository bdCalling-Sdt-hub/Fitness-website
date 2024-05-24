import React from 'react';
import Heading from '../common/Heading';
import Banner from "../../assets/class_banner.png";
import { Navigate, useNavigate } from 'react-router-dom';

const Class = (): React.JSX.Element => {
    const navigate = useNavigate()
    return (
        <div className='container md:grid md:grid-cols-2 flex flex-col-reverse gap-8'>
            <div className=' h-fit my-auto'>
                <Heading title='Free Class ' style='my-6' />
                <p className='text-secondary text-justify font-normal mb-6 text-[16px] leading-5'>This class is a demo class, you get all the exercises, guidelines and tips related to fitness in our fitness course. So don't delay and join our community now.</p>
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
                    Join Our Community
                </button>
            </div>

            <div onClick={() => {
                return navigate(`/free-class`)
            }}>
                <img className='cursor-pointer' src={Banner} alt="" />
            </div>
        </div>
    )
}

export default Class