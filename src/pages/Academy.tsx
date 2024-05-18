import React, { useState } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Calendar, Input, } from 'antd';
import { CgSearch } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import Modal from '../components/common/Modal';
import  dayjs, { Dayjs } from 'dayjs';
import { IoClose } from "react-icons/io5";
import ReactPlayer from 'react-player'
import { IoPlaySharp } from "react-icons/io5";
import { GrPauseFill } from "react-icons/gr";

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
            <Heading title='Trainee Board'  style='mb-6' />
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


            <div className='grid grid-cols-12 gap-10 mt-8 group'>
                <div className='col-span-8 video_player  flex items-center justify-center'>
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

                <div className='col-span-4 w-full'>
                    <div className='w-full shadow-lg rounded h-[263px] p-4'>
                        <h1 className='text-secondary text-[16px] leading-[12px] font-bold'>Your Progress</h1>
                        <div className='w-[138px] h-[138px] rounded-full p-3 shadow-xl mx-auto my-8'></div>

                        <div className='flex items-center gap-8 justify-center'>
                            <div className='flex items-center gap-[10px]'>
                                <div className='w-4 h-4 rounded-full bg-primary'/>
                                <p className='text-secondary text-[14px] leading-[10px] font-light'>Complete</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='w-4 h-4 rounded-full bg-white shadow-lg'/>
                                <p className='text-secondary text-[14px] leading-[10px] font-light'>Incomplete</p>
                            </div>
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