import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { GetProp, Input, Modal } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoIosSearch } from 'react-icons/io';
import LoginPopUp from '../../pages/LoginPopUp';
import { OTPProps } from 'antd/es/input/OTP';
import { FaRegUser } from 'react-icons/fa';
import { TfiMenu } from 'react-icons/tfi';
import { useAppDispatch, useAppSelector } from '../../Store/hook';
import ForgetPassword from '../../components/Form/ForgetPassword';
import VerifyCodeForm from '../../components/Form/VerifyCodeForm';
import SetNewPassword from '../../components/Form/SetNewPassword';
import { MdOutlineFeedback } from 'react-icons/md';
import { CiLogout, CiTimer } from 'react-icons/ci';
import { ServerUrl } from '../../AxiosConfig/Config';
import { ShopItems } from '../../States/Shop/ShopSlice';
import { putFeedBack } from '../../States/FeedBack/putFeedbackSlice';
import Swal from 'sweetalert2';
import { UserContext } from '../../Provider/UserProvider';
import { GetMySubscription } from '../../States/Subscription/GetMySubscriptionSlice';
import { GetBannerData } from '../../States/Banner/BannerDataSlice';
interface IRoutes {
    name: string;
    path: string
}
interface Inputs {
    feedback: string | undefined | null,
}
const Navbar = (): React.JSX.Element => {
    const [openSearchModal, setOpenSearchModal] = useState(false)
    const { pathname } = useLocation();
    const { openPopUp, setOpenPopUp } = useContext<any>(UserContext)
    const [signIn, toggle] = useState(true);
    const [openForgetPass, setOpenForgetPass] = useState(false)
    const [openVerifyPass, setOpenVerifyPass] = useState(false)
    const [openNewPass, setOpenNewPass] = useState(false)
    const [openChangedPass, setOpenChangedPass] = useState(false)
    const [openFeedbackModal, setopenFeedbackModal] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const { user, loading: userloading }: any = useAppSelector(state => state.Profile)
    const [showUserOptions, setShowUserOptions] = useState(false);
    const [searchValue, setSearchValue] = useState<string>('')
    const dispatch = useAppDispatch()
    const { Products } = useAppSelector(state => state.ShopItems)
    const { myPlan } = useAppSelector(state => state.GetMySubscription)
    const navigate = useNavigate()
    const { BannerData } = useAppSelector(state => state.GetBannerData)
    useEffect(() => {
        dispatch(GetBannerData())
    }, [])
    // my plan
    useEffect(() => {
        dispatch(GetMySubscription())
    }, [user])
    // search shop items 
    useEffect(() => {
        dispatch(ShopItems({ page: 1, limit: 5, sort: '', searchTerm: searchValue }))
    }, [searchValue])
    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(putFeedBack({ text: data.feedback })).then((res) => {
            if (res.type == 'putFeedBack/fulfilled') {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Feedback has been sent",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    reset()
                    setopenFeedbackModal(false)
                });
            }
        });
    }

    const items = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Studio",
            path: "/academy"
        },
        {
            name: "Shop",
            path: "/shop"
        },
        {
            name: "Blogs",
            path: "/blogs"
        }
    ]
    const onChange: GetProp<typeof Input.OTP, 'onChange'> = (text) => {
    };
    const sharedProps: OTPProps = {
        onChange,
    };
    const handleLogOut = () => {
        localStorage.removeItem('token')
        navigate('/')
        location.reload();
    }

    const handleChange = (e: any) => {
        setSearchValue(e.target.value)
    }
    return (
        <div className='bg-base fixed top-0 h-[80px] z-50 flex items-center justify-center  w-full'>
            <div className='container flex items-center justify-between'>
                <Link to="/">
                    <img src={`${ServerUrl}${BannerData?.logo}`} style={{ height: 62 }} alt="" />
                </Link>
                <button style={{
                    transition: '.5s'
                }} className={`${showMenu ? 'rotate-90 bg-white' : 'rotate-0 '} p-2 rounded-lg lg:hidden block`} onClick={() => setShowMenu(!showMenu)}>
                    <TfiMenu className='text-2xl font-bold' />
                </button>
                <div style={{
                    transition: '.5s'
                }} className={`flex items-center  lg:flex-row flex-col gap-3 z-50 lg:z-0 py-5 lg:py-0 bg-[#F8F1E6] lg:bg-transparent absolute lg:static w-[50%] lg:w-auto  top-20 ${showMenu ? 'right-0 flex showMenu' : '-right-[100%] showClose hidden lg:flex'} h-screen lg:h-fit overflow-y-auto`}>
                    {/* routes  section*/}
                    <ul className='flex items-center lg:flex-row flex-col gap-6'>
                        {
                            items?.map((item: IRoutes, index) => {
                                if (item?.path === '/academy' && (!user?.email || !myPlan?.amount)) {
                                    return false
                                }
                                return (
                                    <Link key={index} to={`${item.path}`}>
                                        <li className={`${item.path === pathname ? "text-primary" : "text-secondary"} font-light text-[16px] leading-[21px]`}>{item.name}</li>
                                    </Link>
                                )
                            })
                        }
                        <Link target='_blank' to={`https://app.arketa.co/iframe/unityinmotion/schedule`}>
                            <li className={`text-secondary font-light text-[16px] leading-[21px]`}>Workout With Me</li>
                        </Link>
                    </ul>

                    {/* others routes and user menu section */}
                    <div className='flex items-center lg:flex-row flex-col gap-6'>
                        {
                            <button onClick={() => {
                                if (!user?.email) {
                                    return setOpenPopUp(true)
                                }
                                navigate('/cart')
                            }}>
                                <BsCart2 size={24} color='#555555' />
                            </button>
                        }

                        <button onClick={() => setOpenSearchModal(true)}>
                            <IoSearch size={24} color='#555555' />
                        </button>

                        {
                            user?.email ? <>
                                <img onClick={() => setShowUserOptions(!showUserOptions)} className='h-10 w-10 rounded-full cursor-pointer' src={user.profile_image.includes('http') ? 'https://i.ibb.co/d4RSbKx/Ellipse-980.png' : `${ServerUrl}/${user.profile_image}`} alt="" />
                                {
                                    showUserOptions && <div className='w-[250px]  bg-white fixed top-20 flex flex-col gap-1'>
                                        <Link onClick={() => {
                                            setShowUserOptions(false)
                                        }} className='flex justify-start items-center gap-2 text-gray-500 hover:bg-[#F8F1E6] py-1 px-4 transition-all w-full' to={`/profile`}>
                                            <FaRegUser className='text-xl' />
                                            My Profile
                                        </Link>
                                        <Link onClick={() => {
                                            setShowUserOptions(false)
                                        }} className='flex justify-start items-center  gap-2 text-gray-500 hover:bg-[#F8F1E6] py-1 px-4 transition-all w-full' to={`/order`}>
                                            <CiTimer className='text-xl' />
                                            Order History
                                        </Link>
                                        <Link onClick={() => {
                                            setShowUserOptions(false)
                                            setopenFeedbackModal(true)

                                        }} className='flex justify-start items-center  gap-2 text-gray-500 hover:bg-[#F8F1E6] py-1 px-4 transition-all w-full' to={`#`}>
                                            <MdOutlineFeedback className='text-xl' />
                                            Feedback
                                        </Link>
                                        <button onClick={() => {
                                            setShowUserOptions(false)
                                            handleLogOut()
                                        }} className='flex justify-start items-center  gap-2 text-gray-500 hover:bg-[#F8F1E6] py-1 px-4 transition-all w-full'>
                                            <CiLogout className='text-xl' />
                                            Log Out
                                        </button>
                                    </div>
                                }

                            </> : <>
                                <div onClick={() => {
                                    toggle(false)
                                    setOpenPopUp(true)
                                }}
                                    className='
                            border border-primary text-primary 
                            font-light text-[16px] leading-[21px] 
                            cursor-pointer w-[137px] h-10
                            flex items-center justify-center
                        '
                                >
                                    Login
                                </div>
                                <div onClick={() => {
                                    toggle(true)
                                    setOpenPopUp(true)
                                }}
                                    className=' lg:flex hidden
                            bg-primary text-[#FBFBFB] 
                            font-light text-[16px] leading-[21px] 
                            cursor-pointer w-[137px] h-10
                            items-center justify-center
                        '
                                >
                                    Sign Up
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <Modal
                centered
                open={openChangedPass}
                onCancel={() => setOpenChangedPass(false)}
                width={1000}
                footer={false}
            >
                <div className='grid grid-cols-2 justify-start min-h-[700px] overflow-hidden rounded-[6px] items-center gap-0 h-full relative'>
                    <div className="bg-white w-full px-5 py-6 text-center">
                        <h3 className="text-[#262727] font-bold text-lg md:text-2xl lg:text-4xl mb-4">Congratulations</h3>
                        <button onClick={() => setOpenChangedPass(false)} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer">
                            Continue
                        </button>
                    </div>
                    <div className="w-full bg-[#B47000] h-full flex flex-col justify-center items-center text-white gap-9 z-40">
                        <p className="text-[16px] text-center lg:text-2xl text-[#DADADA]">Your password has been updated, please <br /> change your password regularly to avoid <br /> this happening</p>
                    </div>
                </div>
            </Modal>
            <Modal
                centered
                open={openNewPass}
                onCancel={() => setOpenNewPass(false)}
                width={1000}
                footer={false}
            >
                <div className='grid grid-cols-2 justify-start min-h-[700px] overflow-hidden rounded-[6px] items-center gap-0 h-full relative'>
                    <SetNewPassword setOpenChangedPass={setOpenChangedPass} setOpenNewPass={setOpenNewPass} />
                    <div className="w-full bg-[#B47000] h-full flex flex-col justify-center items-center text-white gap-9 z-40">
                        <p className="text-[16px] text-center lg:text-2xl text-[#DADADA]">Create a new password. <br />
                            insure it differs from previous one.</p>
                    </div>
                </div>
            </Modal>
            <Modal
                centered
                open={openVerifyPass}
                onCancel={() => setOpenVerifyPass(false)}
                width={1000}
                footer={false}
            >
                <div className='grid grid-cols-2 justify-start min-h-[700px] overflow-hidden rounded-[6px] items-center gap-0 h-full relative'>
                    <VerifyCodeForm setOpenNewPass={setOpenNewPass} setOpenVerifyPass={setOpenVerifyPass} />
                    <div className="w-full bg-[#B47000] h-full flex flex-col justify-center items-center text-white gap-9 z-40">
                        <p className="text-[16px] text-center lg:text-2xl text-[#DADADA]">Congratulations! <br />
                            Pleas enter your 6 digit code </p>
                    </div>
                </div>
            </Modal>
            <Modal
                centered
                open={openForgetPass}
                onCancel={() => setOpenForgetPass(false)}
                width={1000}
                footer={false}
            >
                <div className='grid grid-cols-2  justify-start min-h-[700px] overflow-hidden rounded-[6px]  items-center gap-0 h-full relative'>
                    <ForgetPassword setOpenForgetPass={setOpenForgetPass} setOpenVerifyPass={setOpenVerifyPass} />
                    <div className="w-full bg-[#B47000] h-full flex flex-col justify-center items-center text-white gap-9 z-40">
                        <p className="text-[16px] text-center lg:text-2xl text-[#DADADA]">Welcome to our forgot password page ! <br />
                            provide your email for <br />
                            confirm 6 digit verification code.</p>
                    </div>
                </div>
            </Modal>
            <Modal
                centered
                open={openPopUp}
                onCancel={() => setOpenPopUp(false)}
                width={1000}
                footer={false}
            >
                <LoginPopUp
                    signIn={signIn} toggle={toggle} setOpenForgetPass={setOpenForgetPass} setOpenPopUp={setOpenPopUp}
                />
            </Modal>
            <Modal
                centered
                open={openSearchModal}
                onCancel={() => {
                    setSearchValue('')
                    setOpenSearchModal(false)
                }}
                width={700}
                footer={false}
            >
                <div className='p-5 relative pb-10 rounded-lg overflow-hidden'>
                    <div className='w-full mt-6 relative'>
                        <input onChange={handleChange} placeholder="search" className='w-full p-3 border outline-none' />
                        <button className='absolute right-5 top-[50%] translate-y-[-50%]'>
                            <IoIosSearch />
                        </button>
                    </div>
                    <div className='flex flex-col gap-2 items-start justify-start py-10  h-[530px] overflow-y-auto'>
                        {
                            Products?.map(item => <div className='flex justify-start items-center gap-4 flex-wrap w-full'>
                                <div className='w-20 h-20 rounded-xl overflow-hidden'>
                                    <img className='h-full w-full object-cover' src={`${ServerUrl}/${item?.images[0]}`} alt="" />
                                </div>
                                <div>
                                    <p className='text-[16px] lg:text-lg text-[#555555]'>{item?.productName}</p>
                                    <p className='text-[16px] lg:text-lg text-[#555555]'>${item?.price}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <Link onClick={() => setOpenSearchModal(false)} to={`/shop?search=${searchValue}`} className='text-[#B47000] w-full py-3 bg-[#F8F1E6] absolute text-center bottom-0 left-0 text-lg'>See all results</Link>
                </div>
            </Modal>
            <Modal
                centered
                footer={false}
                onCancel={() => setopenFeedbackModal(false)}
                open={openFeedbackModal}
            >
                <form onSubmit={handleSubmit(onSubmit)} className='p-2'>
                    <h3 className='text-2xl lg:text-4xl text-[#555555] font-bold text-center mb-10'>Write your Feedback</h3>
                    <p className='mb-2'>Feedback</p>
                    <textarea className='w-full border resize-none p-2 h-44 outline-none rounded-md' placeholder='Write your thinks' {...register("feedback", { required: true })} />
                    {errors.feedback && <span className='text-red-500'>feedback is required *</span>}
                    <input className='text-white bg-[#B47000] p-3 px-6 rounded cursor-pointer mx-auto block w-fit mt-3' value={`send`} type="submit" />
                </form>
            </Modal>
        </div>
    )
}

export default Navbar