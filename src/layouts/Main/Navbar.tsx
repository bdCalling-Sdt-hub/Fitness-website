import React, {  useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { GetProp, Input, Modal } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoIosSearch } from 'react-icons/io';
import LoginPopUp from '../../pages/LoginPopUp';
import { OTPProps } from 'antd/es/input/OTP';
import {  FaRegUser } from 'react-icons/fa';
import { TfiMenu } from 'react-icons/tfi';
import { useAppSelector } from '../../Store/hook';
import ForgetPassword from '../../components/Form/ForgetPassword';
import VerifyCodeForm from '../../components/Form/VerifyCodeForm';
import SetNewPassword from '../../components/Form/SetNewPassword';
import { MdOutlineFeedback } from 'react-icons/md';
import { CiLogout, CiTimer } from 'react-icons/ci';
interface IRoutes {
    name: string;
    path: string
}

interface Inputs {
    search: string | null,
    email: string | null,
    password: string,
    savePass: string | null,
    username: string | null,
    contact: string | null,
    confirmPass: string | null,
}
const dataSource = [
    {
        key: '1',
        name: 'The Dumbbell',
        img: 'https://i.ibb.co/TcBnDLP/Rectangle-5089.png',
        price: '150 CND',
        time: '05/12/2024',
        quantity: '02',
    },
    {
        key: '1',
        name: 'The Dumbbell',
        img: 'https://i.ibb.co/TcBnDLP/Rectangle-5089.png',
        price: '150 CND',
        time: '05/12/2024',
        quantity: '02',
    },
    {
        key: '1',
        name: 'The Dumbbell',
        img: 'https://i.ibb.co/TcBnDLP/Rectangle-5089.png',
        price: '150 CND',
        time: '05/12/2024',
        quantity: '02',
    },
    {
        key: '1',
        name: 'The Dumbbell',
        img: 'https://i.ibb.co/TcBnDLP/Rectangle-5089.png',
        price: '150 CND',
        time: '05/12/2024',
        quantity: '02',
    },
];
const Navbar = (): React.JSX.Element => {
    const [openSearchModal, setOpenSearchModal] = useState(false)
    const { pathname } = useLocation();
    const [openPopUp, setOpenPopUp] = useState(false)
    const [signIn, toggle] = useState(true);
    const [openForgetPass, setOpenForgetPass] = useState(false)
    const [openVerifyPass, setOpenVerifyPass] = useState(false)
    const [openNewPass, setOpenNewPass] = useState(false)
    const [openChangedPass, setOpenChangedPass] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const { user }: any = useAppSelector(state => state.Profile)
    const [showUserOptions, setShowUserOptions] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        //console.log(data)
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
            name: "About Us",
            path: "/about-us"
        },
        {
            name: "Contacts Us",
            path: "/contact-us"
        },
        {
            name: "Blogs",
            path: "/blogs"
        }
    ]
    const onChange: GetProp<typeof Input.OTP, 'onChange'> = (text) => {
        //console.log('onChange:', text);
    };
    const sharedProps: OTPProps = {
        onChange,
    };
    const handleLogOut = () => {
        localStorage.removeItem('token')
        location.reload();
    }
    return (
        <div className='bg-base fixed top-0 h-[80px] z-50 flex items-center justify-center  w-full'>
            <div className='container flex items-center justify-between'>
                <Link to="/">
                    <img src={Logo} style={{ width: 162, height: 62 }} alt="" />
                </Link>
                <button style={{
                    transition: '.5s'
                }} className={`${showMenu ? 'rotate-90 bg-white' : 'rotate-0 '} p-2 rounded-lg lg:hidden block`} onClick={() => setShowMenu(!showMenu)}>
                    <TfiMenu className='text-2xl font-bold' />
                </button>
                <div style={{
                    transition: '.5s'
                }} className={`flex items-center lg:flex-row flex-col gap-3 z-50 lg:z-0 py-5 lg:py-0 bg-[#F8F1E6] lg:bg-transparent absolute lg:static w-[50%] lg:w-auto  top-20 ${showMenu ? 'right-0 flex showMenu' : '-right-[100%] showClose hidden lg:flex'} h-screen lg:h-fit overflow-y-auto `}>
                    {/* routes  section*/}
                    <ul className='flex items-center lg:flex-row flex-col gap-6'>
                        {
                            items?.map((item: IRoutes, index) => {
                                return (
                                    <Link key={index} to={`${item.path}`}>
                                        <li className={`${item.path === pathname ? "text-primary" : "text-secondary"} font-light text-[16px] leading-[21px]`}>{item.name}</li>
                                    </Link>
                                )
                            })
                        }
                    </ul>

                    {/* others routes and user menu section */}
                    <div className='flex items-center lg:flex-row flex-col gap-6'>
                        <Link to={"/cart"}>
                            <BsCart2 size={24} color='#555555' />
                        </Link>
                        <button onClick={() => setOpenSearchModal(true)}>
                            <IoSearch size={24} color='#555555' />
                        </button>
                        {
                            user?.email ? <>
                                <img onClick={() => setShowUserOptions(!showUserOptions)} className='h-10 w-10 rounded-full cursor-pointer' src={user.profile_image.includes('undefined') ? 'https://i.ibb.co/d4RSbKx/Ellipse-980.png' : user.profile_image} alt="" />
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
                                        }} className='flex justify-start items-center  gap-2 text-gray-500 hover:bg-[#F8F1E6] py-1 px-4 transition-all w-full' to={`#`}>
                                            <CiTimer className='text-xl' />
                                            Order History
                                        </Link>
                                        <Link onClick={() => {
                                            setShowUserOptions(false)
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
                onCancel={() => setOpenSearchModal(false)}
                width={700}
                footer={false}
            >
                <div className='p-5 relative pb-10 rounded-lg overflow-hidden'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full mt-6 relative'>
                            <input placeholder="search" className='w-full p-3 border outline-none' {...register("search")} />
                            <button className='absolute right-5 top-[50%] translate-y-[-50%]'>
                                <IoIosSearch />
                            </button>
                        </div>
                    </form>
                    <div className='flex flex-col gap-2 items-start justify-start py-10'>
                        {
                            dataSource?.map(item => <div className='flex justify-start items-center gap-4 flex-wrap w-full'>
                                <div className='w-20 h-20 rounded-xl overflow-hidden'>
                                    <img className='h-full w-full object-cover' src={item?.img} alt="" />
                                </div>
                                <div>
                                    <p className='text-[16px] lg:text-lg text-[#555555]'>The Dumbbell</p>
                                    <p className='text-[16px] lg:text-lg text-[#555555]'>150 CND</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <button className='text-[#B47000] w-full py-3 bg-[#F8F1E6] absolute bottom-0 left-0 text-lg'>See all results</button>
                </div>
            </Modal>
        </div>
    )
}

export default Navbar