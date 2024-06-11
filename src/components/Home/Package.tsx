import React, { useContext, useEffect, useState } from 'react'
import Heading from '../common/Heading'
// import Modal from '../common/Modal';
import { RiCheckboxCircleFill } from "react-icons/ri";
import Payment from '../Payment';
import { useAppDispatch, useAppSelector } from '../../Store/hook';
import { Subscription } from '../../States/Subscription/SubscriptionSlice';
import { Empty, Modal } from 'antd';
import { BuyPlan } from '../../States/Subscription/BuyPlanSlice';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../../Provider/UserProvider';
import { GetMySubscription } from '../../States/Subscription/GetMySubscriptionSlice';

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
const Package = (): React.JSX.Element => {
    const { openPopUp, setOpenPopUp } = useContext<any>(UserContext)
    const { user, loading: userloading }: any = useAppSelector(state => state.Profile)
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)
    const [openPayment, setOpenPayment] = useState(false)
    const { plan } = useAppSelector(state => state.Subscription);
    const [ModalData, setModalData] = useState<Plans>()
    const [paymentStatus, setPaymentStatus] = useState<any>(null);
    useEffect(() => {
        setOpenPayment(false)
        if (paymentStatus?.status === 'paid') {
            dispatch(BuyPlan({ planId: paymentStatus?.productId, amount: paymentStatus?.amount }))
            dispatch(GetMySubscription())
        }
    }, [paymentStatus])
    useEffect(() => {
        dispatch(Subscription())
    }, [])
    const body = (
        <div className='p-10'>
            <h1 className='font-light lg:text-2xl text-lg leading-8 text-center text-secondary'>{ModalData?.title}</h1>
            <p className='text-[#B47000] text-center my-8 lg:text-[36px] text-xl leading-[49px] '>${ModalData?.price}<sub className='text-[#B47000] text-[18px] leading-6 font-semibold ml-2'>{ModalData?.duration} month</sub></p>
            <div className='grid grid-cols-1 gap-6 '>
                {
                    ModalData?.items?.map((_item: any) => {
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
                    setOpenPopUp(true)
                    setOpen(false)
                    return
                }
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
    return (
        <div className='container'>
            <Heading title='Membership Options' style='text-center' />

            <div className='mt-10 lg:mt-16 xl:mt-24 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col justify-start items-start md:items-center'>
                {
                    (plan && plan.length) <= 0 && [...Array(3).keys()].map((item) => <Empty key={item} />)
                }
                {
                    plan?.map((item: Plans) => {
                        return (
                            <div key={item?._id} className='bg-base rounded p-6 w-full'>
                                <p className='text-secondary text-center font-normal lg:text-2xl text-lg leading-8'>{item?.title}</p>
                                <p className='text-secondary text-center font-semibold lg:text-[32px] text-xl leading-[43px]'>${item?.price}</p>
                                <button
                                    onClick={() => {
                                        setModalData(item)
                                        setOpen(true)
                                    }
                                    }
                                    style={{
                                        width: 174,
                                        border: "none",
                                        outline: "none",
                                        borderRadius: 4,
                                        height: 48,
                                        margin: "30px auto 0 auto"
                                    }}
                                    className='
                                        bg-[#2F2F2F]
                                        flex flex-row-reverse items-center justify-center gap-1 
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

            <Modal
                open={open}
                onCancel={() => setOpen(false)}
                centered
                footer={false}>
                {body}
            </Modal>
            <Modal
                open={openPayment}
                onCancel={() => setOpenPayment(false)}
                centered
                footer={false}
            >
                <Payment setPaymentStatus={setPaymentStatus} data={ModalData} />
            </Modal>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default Package