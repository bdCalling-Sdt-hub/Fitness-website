import React, { useState } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Calendar, Input } from 'antd';
import { CgSearch } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import Modal from '../components/common/Modal';
import  dayjs, { Dayjs } from 'dayjs';
import { IoClose } from "react-icons/io5";
import ReactPlayer from 'react-player'
import { IoPlaySharp } from "react-icons/io5";
import { GrPauseFill } from "react-icons/gr";
import Chart from '../Academy/Chart';
import StatusLabel from '../Academy/StatusLabel';
import Thubmnail from "../assets/video_thumbnail.png"
import { LuCalendar } from 'react-icons/lu';

const Academy = ():React.JSX.Element => {
    const [openCalender, setOpenCalender] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string | null>("");
    const [keyword, setKeyword] = useState<string | undefined>("");
    const [playing, setPlaying] = useState(false);
    
    const onChange = (value: Dayjs) => {
        setSelectedDate( dayjs(value).format('YYYY-MM-DD'))
    };

    const disableTomorrowAndFutureDates = (current: Dayjs) => {
        return current.isAfter(dayjs().endOf('day'));
    };



    return (
        <div className='container pb-20'>
            <Navigation name='Demand Library'  />
            <Heading title='Studio'  style='mb-6' />
            <MetaTag title='Academy' />

            <div className='customPlaceholder flex items-end gap-3 justify-end bg-primary p-2'>
                <Input
                    onChange={(e)=>setKeyword(e.target.value)}
                    value={keyword}
                    placeholder='Search here...'
                    style={{
                        fontSize: 16,
                        lineHeight: "12px",
                        fontWeight: 400,
                        height: 48
                    }}
                    className='text-primary w-[416px]'
                    prefix={<CgSearch  size={24} color='#905A00' />}
                    suffix={<IoClose onClick={()=>setKeyword("")} className={`${keyword  !== "" ? "block": "none"} cursor-pointer`}  size={24} color='#905A00' />}
                />
                <div onClick={()=>setOpenCalender(!openCalender)} className='h-[48px] w-[50px] cursor-pointer  bg-white flex items-center justify-center'>
                    <CiCalendarDate color='#905A00' size={35}  />
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
                        <div className='play-pause-button' onClick={()=>setPlaying(!playing)} >
                            <div className='w-20 h-20  rounded-full bg-primary bg-opacity-50 flex items-center justify-center'>
                                {
                                    playing
                                    ?
                                    <IoPlaySharp size={40} color='#FEFEFE' />
                                    :
                                    <GrPauseFill size={40} color='#FEFEFE'/>
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
                        style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}
                    >
                        <h1 className='text-secondary text-[16px] leading-[12px] font-bold'>Your Progress</h1>
                        <Chart/>
                        <StatusLabel/>
                    </div>

                    <div className='w-full  md:overflow-y-scroll md:h-[700px] video-collection'>
                        <div className='sm:grid sm:grid-cols-2 md:flex flex-col gap-6'>
                            {
                                [...Array(5)].map((item: unknown, index)=>{
                                    return(
                                        <div key={index} className='w-full my-3'>
                                            <div className='w-full h-80'>
                                            <img className='w-full h-full object-cover' src={Thubmnail}  alt="video thumbnail" />
                                            </div>
                                            <div className='flex items-center gap-4 mt-[14px] mb-2'>
                                                <LuCalendar size={16} color='#555555' />
                                                <p className='text-secondary font-normal text-[14px] leading-[10px]'>03 Sep 2024</p>
                                                <p className='text-secondary font-normal text-[14px] leading-[10px]'>Topic : Yoga</p>
                                            </div>

                                            <p className='text-[#242424] font-semibold text-[16px] leading-[12px]'>45-min advance vinyasa yoga</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            
            {/* modal component for choose particular date from calender */}
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
        </div>
    )
}

export default Academy