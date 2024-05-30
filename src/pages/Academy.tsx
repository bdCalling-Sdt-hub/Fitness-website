import React, { useEffect, useRef, useState } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Calendar, Input } from 'antd';
import { CgSearch } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import Modal from '../components/common/Modal';
import dayjs, { Dayjs } from 'dayjs';
import { IoClose } from "react-icons/io5";
import ReactPlayer from 'react-player'
import { IoPlaySharp } from "react-icons/io5";
import { GrPauseFill } from "react-icons/gr";
import Chart from '../Academy/Chart';
import StatusLabel from '../Academy/StatusLabel';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { IoIosArrowDown } from 'react-icons/io';
interface ProgramData {
    _id: string,
    img: string,
    title: String
}
const data: ProgramData[] = [
    {
        _id: '1',
        img: 'https://i.ibb.co/wKjvbPB/Rectangle-5101.png',
        title: 'Sweat and Stretch'

    },
    {
        _id: '2',
        img: 'https://i.ibb.co/wKjvbPB/Rectangle-5101.png',
        title: 'Sweat and Stretch'

    },
    {
        _id: '3',
        img: 'https://i.ibb.co/wKjvbPB/Rectangle-5101.png',
        title: 'Sweat and Stretch'

    },
    {
        _id: '4',
        img: 'https://i.ibb.co/wKjvbPB/Rectangle-5101.png',
        title: 'Sweat and Stretch'

    },
    {
        _id: '5',
        img: 'https://i.ibb.co/wKjvbPB/Rectangle-5101.png',
        title: 'Sweat and Stretch'

    },
    {
        _id: '6',
        img: 'https://i.ibb.co/wKjvbPB/Rectangle-5101.png',
        title: 'Sweat and Stretch'

    },
    {
        _id: '7',
        img: 'https://i.ibb.co/wKjvbPB/Rectangle-5101.png',
        title: 'Sweat and Stretch'

    },
    {
        _id: '8',
        img: 'https://i.ibb.co/wKjvbPB/Rectangle-5101.png',
        title: 'Sweat and Stretch'

    },
    {
        _id: '9',
        img: 'https://i.ibb.co/wKjvbPB/Rectangle-5101.png',
        title: 'Sweat and Stretch'

    },
]
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
type ContentRef = HTMLDivElement | null;
const Academy = (): React.JSX.Element => {
    const [openCalender, setOpenCalender] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string | null>("");
    const [keyword, setKeyword] = useState<string | undefined>("");
    const [playing, setPlaying] = useState(false);

    const onChange = (value: Dayjs) => {
        setSelectedDate(dayjs(value).format('YYYY-MM-DD'))
    };

    const disableTomorrowAndFutureDates = (current: Dayjs) => {
        return current.isAfter(dayjs().endOf('day'));
    };
    //accordion
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<ContentRef[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex]!.style.maxHeight = `${contentRefs.current[openIndex]!.scrollHeight}px`;
        }

        contentRefs.current.forEach((ref, index) => {
            if (ref && index !== openIndex) {
                ref.style.maxHeight = '0px';
            }
        });
    }, [openIndex]);

    //accordion 
    return (
        <div className='container pb-20'>
            <Navigation name='Demand Library' />
            <Heading title='Series' style='mb-6' />
            <MetaTag title='Academy' />
            <div className='customPlaceholder flex items-end gap-3 justify-end bg-primary p-2'>
                <Input
                    onChange={(e) => setKeyword(e.target.value)}
                    value={keyword}
                    placeholder='Search here...'
                    style={{
                        fontSize: 16,
                        lineHeight: "12px",
                        fontWeight: 400,
                        height: 48
                    }}
                    className='text-primary w-[416px]'
                    prefix={<CgSearch size={24} color='#905A00' />}
                    suffix={<IoClose onClick={() => setKeyword("")} className={`${keyword !== "" ? "block" : "none"} cursor-pointer`} size={24} color='#905A00' />}
                />
                <div onClick={() => setOpenCalender(!openCalender)} className='h-[48px] w-[50px] cursor-pointer  bg-white flex items-center justify-center'>
                    <CiCalendarDate color='#905A00' size={35} />
                </div>
            </div>
            <div className='md:grid flex flex-col grid-cols-12 gap-10 mt-8 group'>
                <div className='col-span-8 '>
                    <div className='video_player flex items-center justify-center'>
                        <ReactPlayer
                            width='100%'
                            height='100%'
                            controls
                            playing={playing}
                            url='https://res.cloudinary.com/ddqovbzxy/video/upload/v1716027602/mzimld8b9vgqhargfrmt.mp4'

                        />
                        <div className='play-pause-button' onClick={() => setPlaying(!playing)} >
                            <div className='w-20 h-20  rounded-full bg-primary bg-opacity-50 flex items-center justify-center'>
                                {
                                    playing
                                        ?
                                        <IoPlaySharp size={40} color='#FEFEFE' />
                                        :
                                        <GrPauseFill size={40} color='#FEFEFE' />
                                }
                            </div>
                        </div>
                    </div>

                    {/* video description */}
                    <div className='flex items-center gap-4 my-4'>
                        <p className='text-[#3C3C3C] font-normal text-[16px] leading-[13px]'>Topic : Yoga</p>
                        <p className='text-[#3C3C3C] font-normal text-[16px] leading-[13px]'>03 Sep 2024</p>
                    </div>
                    <p className='text-[#242424] font-semibold text-[24px] leading-[18px] mb-6'>45-min advance vinyasa yoga</p>


                    <p className='text-secondary font-normal text-[14px] leading-7'>
                        dignissim, Vestibulum nec Nunc Nullam amet, quis quis convallis.
                        dui placerat. vitae eget dignissim, Praesent est. sed sit sit vitae tincidunt Nunc nec
                        Vestibulum ultrices Sed ac lacus vel malesuada Ut nulla, varius lacus sapien luctus maximus
                        vitae nec dolor ex. efficitur. Nullam amet, elementum amet, eget amet, eu orci sodales. sodales.
                        odio vitae at Nam orci leo. nec malesuada Lorem Nunc ac placerat Lorem Ut in Quisque amet, Nam non.
                        est. venenatis lacus varius sapien orci nulla, tincidunt

                        <br />
                        <br />

                        dignissim, Vestibulum nec Nunc Nullam amet, quis quis convallis.
                        dui placerat. vitae eget dignissim, Praesent est. sed sit sit vitae tincidunt Nunc nec
                        Vestibulum ultrices Sed ac lacus vel malesuada Ut nulla, varius lacus sapien luctus maximus
                        vitae nec dolor ex. efficitur. Nullam amet, elementum amet, eget amet, eu orci sodales. sodales.
                        odio vitae at Nam orci leo. nec malesuada Lorem Nunc ac placerat Lorem Ut in Quisque amet, Nam non.
                        est. venenatis lacus varius sapien orci nulla, tincidunt
                    </p>
                </div>

                <div className='col-span-4 w-full'>
                    <div className='w-full rounded h-[280px] p-4 mb-6'
                        style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}
                    >
                        <h1 className='text-secondary text-[16px] leading-[12px] font-bold'>Your Progress</h1>
                        <Chart />
                        <StatusLabel />
                    </div>

                    <div className='w-full  md:overflow-y-scroll md:max-h-[700px] video-collection'>
                        <div className=' md:flex flex-col gap-3'>

                            {
                                [...Array(10)].map((_, index) => (
                                    <div key={index} className='cursor-pointer p-3 bg-[#F2F2F2]'>
                                        <div onClick={() => toggleAccordion(index)} className=' relative'>
                                            <p className='text-[#555555] font-semibold text-[16px] leading-[12px]'>Series No {index + 1} : advance vinyasa yoga</p>
                                            <div className='flex justify-start items-center gap-3 mt-3'>
                                                <p className='text-[#919191] text-xs'>Total video : 04</p> <p className='text-[#919191] text-xs'>3 h 40 m</p>
                                            </div>
                                            <IoIosArrowDown className='text-2xl absolute right-1 top-1' />
                                        </div>
                                        <div
                                            ref={(el) => (contentRefs.current[index] = el)}
                                            className='accordion-content overflow-hidden transition-max-height duration-300 ease-in-out'
                                            style={{
                                                maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px'
                                            }}
                                        >
                                            {
                                                [...Array(5)].map((item: unknown, index) => {
                                                    return (
                                                        <div key={index} className='flex justify-start items-start gap-3 mt-6'>
                                                            <div>
                                                                <FaCheckCircle className='text-green-500 text-lg' />
                                                            </div>
                                                            <div>
                                                                <p className='text-[#555555] font-semibold text-[16px] leading-[12px]'>Class No {index + 1} : advance vinyasa yoga</p>
                                                                <div className='flex justify-start items-center gap-3 mt-2'>
                                                                    <p className='text-[#919191] text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam earum consequuntur,</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                )}
                                        </div>


                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title='Pick Your Date'
                open={openCalender}
                setOpen={setOpenCalender}
                body={
                    <Calendar
                        fullscreen={false}
                        disabledDate={disableTomorrowAndFutureDates}
                        onChange={onChange}
                    />
                }
            />
            <div className='flex justify-between items-center gap-4 flex-wrap mt-10'>
                <h4 className='text-2xl lg:text-3xl font-medium'>More Class Like This</h4>
                <Link className='text-[#B47000] underline' to={`/academy`}>
                    View all
                </Link>
            </div>
            <div className='md:grid flex flex-col md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 justify-start md:items-center items-start py-8'>
                {data?.slice(0, 3).map(item => <div className='w-full h-full' key={item?._id}>
                    <div className='w-full h-60'>
                        <img className='w-full h-full object-cover' src={item?.img} alt="" />
                    </div>
                    <div className='flex justify-between items-center gap-2 flex-wrap mt-4'>
                        <h3 className='text-[#2F2F2F] text-lg md:text-2xl'>{item?.title}</h3>
                        <Link to={`/academy/${item?._id}`} className='py-2 px-6 bg-[#555555] text-white'>
                            Details
                        </Link>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Academy