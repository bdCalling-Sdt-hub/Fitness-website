import React, { useContext, useEffect, useRef, useState } from 'react'
import MetaTag from '../components/common/MetaTag'
import Heading from '../components/common/Heading'
import Video from "../assets/video.mp4"
import { FaPlay } from 'react-icons/fa'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { useAppDispatch, useAppSelector } from '../Store/hook'
import Payment from '../components/Payment'
import Modal from '../components/common/Modal'
import { BuyPlan } from '../States/Subscription/BuyPlanSlice'
import { UserContext } from '../Provider/UserProvider'
interface Plans {
    _id: string,
    title: string,
    items: [{ title: string, _id: string, id: string, }],
    price: number,
    status: true,
    duration: number,
    plan_type: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
    id: string,
}
const FreeClass = (): React.JSX.Element => {
    const { openPopUp, setOpenPopUp } = useContext<any>(UserContext)
    const { user, loading: userloading }: any = useAppSelector(state => state.Profile)
    const [open, setOpen] = useState(false)
    const [openPayment, setOpenPayment] = useState(false)
    const { plan } = useAppSelector(state => state.Subscription);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [ModalData, setModalData] = useState<Plans>()
    const [paymentStatus, setPaymentStatus] = useState<any>(null);
    const dispatch = useAppDispatch()
    useEffect(() => {
        setOpenPayment(false)
        if (paymentStatus?.status === 'paid') {
            dispatch(BuyPlan({ planId: paymentStatus?.productId, amount: paymentStatus?.amount }))
        }
    }, [paymentStatus])
    const handlePlay = () => {
        if (!user?.email) {
            return
        }
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
    useEffect(() => {
        const videoElement = videoRef.current;

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);

        if (videoElement) {
            videoElement.addEventListener('play', onPlay);
            videoElement.addEventListener('pause', onPause);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('play', onPlay);
                videoElement.removeEventListener('pause', onPause);
            }
        };
    }, []);
    return (
        <div className='container mx-auto py-6'>
            <Heading title='Free Class' style='mb-6' />
            <MetaTag title='Free Class' />
            <div className='container mx-auto overflow-hidden w-full py-6 max-h-[658px] min-h-96 sm:min-h-[470px] lg:min-h-[530px] xl:min-h-[658px] rounded-lg relative bg-red-400'>
                <video ref={videoRef} controls={user?.email} style={{
                }} className='rounded-lg w-full object-cover'>
                    <source src={Video} type="video/mp4" />
                </video>
                {
                    !isPlaying && <button onClick={handlePlay} className='bg-[#3F2700] bg-opacity-45  p-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer rounded-full'>
                        <FaPlay className=' text-white text-3xl' />
                    </button>
                }
            </div>
            <div className='md:grid md:grid-cols-2 flex flex-col xl:grid-cols-3 gap-6 justify-start items-start md:items-center my-14 mb-8'>
                {
                    plan.map((item: Plans, index) => {
                        return (
                            <div className='p-10'>
                                <h1 className='font-light lg:text-2xl text-lg leading-8 text-center text-secondary'>{item?.title}</h1>
                                <p className='text-[#B47000] text-center my-8 lg:text-[36px] text-xl leading-[49px] '>${item?.price}<sub className='text-[#B47000] text-[18px] leading-6 font-semibold ml-2'>{item?.duration} month</sub></p>
                                <div className='grid grid-cols-1 gap-6 '>
                                    {
                                        item?.items?.map((_item: any) => {
                                            return (
                                                <div key={_item?._id} className='flex items-center text-secondary text-[16px] leading-5 font-normal gap-[14px]'>
                                                    <h1></h1>
                                                    <RiCheckboxCircleFill size={24} color='#555555' />
                                                    {_item?.title}
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <button onClick={() => {
                                    if (!user?.email) {
                                        return setOpenPopUp(true)
                                    }
                                    setModalData(item)
                                    setOpen(false)
                                    setOpenPayment(true)
                                }}
                                    style={{
                                        width: "100%",
                                        border: "none",
                                        outline: "none",
                                        borderRadius: 4,
                                        height: 56,
                                        margin: "56px auto 0 auto"
                                    }}
                                    className='
                                    bg-[#3C3C3C]
                                    text-[#F2F2F2] font-normal text-[16px] leading-5
                                '
                                >
                                    Buy Now
                                </button>
                            </div>
                        )
                    })
                }

            </div>
            <p className='text-sm md:text-[16px] lg:text-[19px] text-[#555555] leading-9 pb-11'><strong>Note:</strong>  stablished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>
            <Modal
                open={openPayment}
                setOpen={setOpenPayment}
                body={<Payment data={ModalData} setPaymentStatus={setPaymentStatus} />}
            />
        </div>
    )
}

export default FreeClass
