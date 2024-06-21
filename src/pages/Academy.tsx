import React, { useEffect, useRef, useState } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Calendar, Empty, Input } from 'antd';
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
import { IoIosArrowDown } from 'react-icons/io';
import { FaCheckCircle, FaRegFilePdf } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { SingleProgram } from '../States/Program/SingleProgramSlice';
import baseURL, { ServerUrl } from '../AxiosConfig/Config';
import { SiGoogledocs } from 'react-icons/si';
import { RxCross1 } from 'react-icons/rx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddComment } from '../States/Comments/AddCommentSlice';
import Swal from 'sweetalert2';
import { GetAllComment } from '../States/Comments/GetAllCommentSlice';
import ReplayCommentForm from '../components/Form/ReplayCommentForm';
type ContentRef = HTMLDivElement | null;
type Inputs = {
    comment: string,
};
const Academy = (): React.JSX.Element => {
    const { user, loading: userloading }: any = useAppSelector(state => state.Profile)
    const { id } = useParams()
    const [openCalender, setOpenCalender] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<any>('');
    const [keyword, setKeyword] = useState<string | undefined>("");
    const [playing, setPlaying] = useState(false);
    const { SingleProgramData } = useAppSelector(state => state.SingleProgram)
    const [CurrentClass, setCurrentClass] = useState<any>()
    const [anyties, setanalayties] = useState<any>()
    const { myPlan, loading } = useAppSelector(state => state.GetMySubscription)
    const { commentData } = useAppSelector(state => state.GetAllComment)
    const [replay, setreplay] = useState({ id: '', open: true })
    const [limit, setLimit] = useState(10)
    const navigate = useNavigate()
    if (!loading && !myPlan?.amount) {
        navigate('/')
    }
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();
    const handleRead = (id: any) => {
        baseURL.get(`/class/single/${id}`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((res) => console.log(res))
    }

    useEffect(() => {
        baseURL.get(`/program/analytics/${id}`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((res) => {
            if (res.data.success) {
                setanalayties(res.data.data)
            }
        })
    }, [id, CurrentClass?._id])


    const dispatch = useAppDispatch()
    const onChange = (value: Dayjs) => {
        const date = new Date
        if (dayjs(date).format('YYYY-MM-DD') == dayjs(value).format('YYYY-MM-DD')) {
            return setSelectedDate('')
        }
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
    useEffect(() => {
        dispatch(SingleProgram({ id, date: selectedDate, searchTerm: keyword })).then((res) => {
            if (res.type == "SingleProgram/fulfilled") {
                setCurrentClass((res?.payload?.series[0]?.classes[0]))
                handleRead((res?.payload?.series[0]?.classes[0])?._id)
            }

        })
    }, [id, selectedDate, keyword])

    useEffect(() => {
        dispatch(GetAllComment({ classId: CurrentClass?._id, limit: limit }))
    }, [CurrentClass?._id, limit])

    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(AddComment({ comment: data.comment, classId: CurrentClass?._id })).then((res) => {
            if (res.type == 'AddComment/fulfilled') {
                reset()
                dispatch(GetAllComment({ classId: CurrentClass?._id, limit: limit }))
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your comment has been sent",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    };

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
            {
                selectedDate && <div className='mt-3 flex justify-start items-center gap-3'>
                    <p>filtered by date : <span className='font-bold'>{selectedDate}</span></p> <button onClick={() => setSelectedDate('')} className='p-1 text-xl bg-red-600 text-white rounded-full hover:scale-105 active:scale-95 transition-all'><RxCross1 /></button>
                </div>
            }
            <div className='md:grid flex flex-col grid-cols-12 gap-10 mt-8 group'>
                {
                    CurrentClass ? <div className='col-span-8 '>
                        <div className='video_player flex items-center justify-center'>
                            <ReactPlayer
                                width='100%'
                                height='100%'
                                controls
                                playing={playing}
                                onPlay={() => setPlaying(true)}
                                onPause={() => setPlaying(false)}
                                url={`${ServerUrl}/${CurrentClass?.video}`}
                            />
                            <div className='play-pause-button' onClick={() => setPlaying(!playing)} >
                                <div className={`w-20 h-20 ${playing ? 'hover:flex hidden' : 'flex'} rounded-full bg-primary bg-opacity-50  items-center justify-center`}>
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
                            <p className='text-[#3C3C3C] font-normal text-[16px] leading-[13px]'>Topic : {CurrentClass?.topic}</p>
                            <p className='text-[#3C3C3C] font-normal text-[16px] leading-[13px]'>{CurrentClass?.date.split('T')[0]}</p>
                            <a className='flex justify-start items-center gap-1 hover:text-blue-500' href={`${ServerUrl}/${CurrentClass?.pdfFile}`} target="_blank" rel="noopener noreferrer">
                                <FaRegFilePdf /> PDF File
                            </a>
                            <a className='flex justify-start items-center gap-1 hover:text-blue-500' href={`${ServerUrl}/${CurrentClass?.docFile}`} target="_blank" rel="noopener noreferrer">
                                <SiGoogledocs /> Doc File
                            </a>
                        </div>
                        <p className='text-[#242424] font-semibold text-[24px] leading-[18px] mb-6'>{CurrentClass?.title}</p>
                        <p className='text-secondary font-normal text-[14px] leading-7'>
                            {CurrentClass?.description}
                        </p>
                        {
                            user?.role == 'USER' && <div className='flex justify-start items-start gap-3 mt-4'>
                                <img className='w-10 h-10 rounded-full' src={user.profile_image.includes('http') ? 'https://i.ibb.co/d4RSbKx/Ellipse-980.png' : `${ServerUrl}/${user.profile_image}`} alt="" />
                                <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                                    <div className='w-full text-end'>
                                        <p className='text-start mb-1'>{user?.email}</p>
                                        <textarea className='w-full h-32 border resize-none outline-none p-2' {...register("comment", { required: true })}>
                                        </textarea>
                                        {errors.comment && <p className='text-red-500 text-start'>This field is required*</p>}
                                        <button className='border border-[#B47000] p-1 px-4 text-[#B47000] '>Add a comment </button>
                                    </div>
                                </form>
                            </div>
                        }
                        <h3 className='text-3xl font-semibold py-5'>comments</h3>
                        {
                            commentData?.comments?.map((item) => <div key={item?._id} className='flex justify-start items-start gap-3 mt-4 my-8'>
                                <img className='w-10 h-10 rounded-full' src={item?.userId?.profile_image.includes('http') ? 'https://i.ibb.co/d4RSbKx/Ellipse-980.png' : `${ServerUrl}/${item?.userId?.profile_image}`} alt="" />
                                <div className='w-full text-end'>
                                    <p className=' mb-3 text-start'>{item?.userId?.email}</p>
                                    <p className='text-start opacity-65'>{item?.comment}</p>
                                    {
                                        item?.reply?.length <= 0 && user?.role == 'ADMIN' && !(replay?.id == item?._id && replay.open) && <button onClick={() => {
                                            setreplay({ id: item?._id, open: true })
                                        }} className='border border-[#B47000] p-1 px-4 text-[#B47000] '>Replay </button>
                                    }
                                    {
                                        (replay?.id == item?._id && replay.open) && <ReplayCommentForm limit={limit} classId={CurrentClass?._id} id={item?._id} replay={replay} setreplay={setreplay} user={user} />
                                    }
                                    {
                                        item?.reply?.map((replays) => <div key={replays?._id} className='flex justify-start items-start gap-3 mt-4'>
                                            {/* <img className='w-10 h-10 rounded-full' src={user.profile_image.includes('http') ? 'https://i.ibb.co/H2TQY14/2304226.png' : `${ServerUrl}/${user.profile_image}`} alt="" /> */}
                                            <img className='w-10 h-10 rounded-full' src={'https://i.ibb.co/H2TQY14/2304226.png'} alt="" />
                                            <div className='w-full text-end'>
                                                <p className=' mb-3 text-start'>{user?.email}</p>
                                                <p className='text-start opacity-65'>{replays?.reply}</p>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>)
                        }
                        {
                            limit > 10 && <button className='border border-[red] p-1 px-4 text-[red] ml-4' onClick={() => {
                                limit > 10 && setLimit(limit - 10)
                            }}>
                                see less
                            </button>
                        }
                        {
                            (commentData?.totalComment && commentData?.totalComment > 10 && commentData?.totalComment && commentData?.totalComment > limit) && <button className='border border-[#B47000] p-1 px-4 text-[#B47000] ml-4' onClick={() => setLimit(limit + 10)}>
                                see more
                            </button>
                        }

                    </div> : <Empty className='col-span-8 ' />
                }

                <div className='col-span-4 w-full'>
                    <div className='w-full rounded h-[280px] p-4 mb-6 select-none pointer-events-none'
                        style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}
                    >
                        <h1 className='text-secondary text-[16px] leading-[12px] font-bold'>Your Progress</h1>
                        <Chart anyties={anyties} />
                        <StatusLabel />
                    </div>

                    <div className='w-full  md:overflow-y-scroll md:max-h-[700px] video-collection'>
                        <div className=' md:flex flex-col gap-3'>
                            {
                                (SingleProgramData?.series && SingleProgramData?.series?.length <= 0) && <p className='text-red-500'>No data found </p>
                            }
                            {
                                SingleProgramData?.series?.map((item, index) => <div key={index} className='cursor-pointer p-3 bg-[#F2F2F2]'>
                                    <div onClick={() => toggleAccordion(index)} className=' relative'>
                                        <p className='text-[#555555] font-semibold text-[16px] leading-[12px]'>Series No {index + 1} : {item?.title}</p>
                                        <div className='flex justify-start items-center gap-3 mt-3'>
                                            <p className='text-[#919191] text-xs'>Total video : {item?.classes?.length}</p>
                                            <p className='text-[#919191] text-xs font-semibold'>Duration {item?.totalVideoDuration} H</p>
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
                                            item?.classes?.map((item, index) => {
                                                return (
                                                    <div onClick={() => { handleRead(item?._id); setCurrentClass(item) }} key={index} className='flex justify-start items-start gap-3 mt-6'>
                                                        <div>
                                                            <FaCheckCircle className={` ${anyties?.realClasses.includes(item?._id) ? 'text-green-500' : 'text-gray-500'} text-lg`} />
                                                        </div>
                                                        <div>
                                                            <p className='text-[#555555] font-semibold text-[16px] leading-[12px]'>Class No {index + 1} :{item?.title}</p>
                                                            <div className='flex justify-start items-center gap-3 mt-2'>
                                                                <p className='text-[#919191] text-sm'>{item?.description.slice(0, 150)}..</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            )}
                                    </div>
                                </div>)
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
            {/* <div className='flex justify-between items-center gap-4 flex-wrap mt-20 '>
                <h4 className='text-2xl lg:text-3xl font-medium'>More Class Like This</h4>
                <Link className='text-[#B47000] underline' to={`/academy`}>
                    View all
                </Link>
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
            </div> */}
        </div>
    )
}

export default Academy