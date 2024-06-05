import React, { useEffect, useState } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Calendar, Input } from 'antd';
import { CgSearch } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import Modal from '../components/common/Modal';
import dayjs, { Dayjs } from 'dayjs';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { GetAllSeries } from '../States/Series/GetAllSeriesSlice';
import { ServerUrl } from '../AxiosConfig/Config';
import { GetAllProgram } from '../States/Program/GetAllProgramSlice';

const Studio = (): React.JSX.Element => {
    const [openCalender, setOpenCalender] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string | null>("");
    const [keyword, setKeyword] = useState<string | undefined>("");
    const dispatch = useAppDispatch()
    const { AllProgram, meta } = useAppSelector(state => state.GetAllProgram)
    console.log(AllProgram, meta);

    useEffect(() => {
        dispatch(GetAllProgram())
    }, [])
    const onChange = (value: Dayjs) => {
        setSelectedDate(dayjs(value).format('YYYY-MM-DD'))
    };

    const disableTomorrowAndFutureDates = (current: Dayjs) => {
        return current.isAfter(dayjs().endOf('day'));
    };



    return (
        <div className='container pb-20'>
            <Navigation name='Demand Library' />
            <Heading title='Studio' style='mb-6' />
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
            <div className='md:grid flex flex-col md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 justify-start md:items-center items-start py-8'>
                {AllProgram?.map(item => <div className='w-full h-full' key={item?._id}>
                    <div className='w-full h-60'>
                        <img className='w-full h-full object-cover' src={`${ServerUrl}/${item?.image}`} alt="" />
                    </div>
                    <div className='flex justify-between items-center gap-2 flex-wrap mt-4'>
                        <h3 className='text-[#2F2F2F] text-lg md:text-2xl'>{item?.title}</h3>
                        <Link to={`/academy/${item?._id}`} className='py-2 px-6 bg-[#555555] text-white'>
                            Details
                        </Link>
                    </div>
                </div>)}
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
        </div>
    )
}

export default Studio
