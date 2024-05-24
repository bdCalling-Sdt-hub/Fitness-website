import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { GetProp, Input, Modal } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoIosSearch } from 'react-icons/io';
import LoginPopUp from '../../pages/LoginPopUp';
import { OTPProps } from 'antd/es/input/OTP';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { TfiMenu } from 'react-icons/tfi';
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
    const [inputType, setInputType] = useState('password')
    const [conFirmPassType, setConFirmPassType] = useState('password')
    const [openChangedPass, setOpenChangedPass] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    const items = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Academy",
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
        console.log('onChange:', text);
    };
    const sharedProps: OTPProps = {
        onChange,
    };
    return (
            <div className='bg-base h-[80px] flex items-center justify-center relative w-full'>
                <div className='container flex items-center  justify-between'>

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
                    }} className={`flex items-center lg:flex-row flex-col gap-3 z-50 lg:z-0 py-5 lg:py-0 bg-[#F8F1E6] lg:bg-transparent absolute lg:static w-[50%] lg:w-auto  top-20 ${showMenu ? 'right-0 flex showMenu' : '-right-[100%] showClose hidden lg:flex'} h-screen lg:h-fit overflow-y-auto`}>
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
                    <div className='md:grid md:grid-cols-2 flex flex-col justify-start min-h-[700px] overflow-hidden rounded-[6px] items-start md:items-center gap-0 h-full relative'>
                        <div className="bg-white w-full px-5 py-6 text-center">
                            <h3 className="text-[#262727] font-bold text-4xl mb-4">Congratulations</h3>
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
                    <div className='md:grid md:grid-cols-2 flex flex-col justify-start min-h-[700px] overflow-hidden rounded-[6px] items-start md:items-center gap-0 h-full relative'>
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full px-5 py-6 text-center">
                            <h3 className="text-[#262727] font-bold text-4xl mb-4">Set new Password</h3>
                            <p className="text-left text-[#575757]">New Password</p>
                            <div className="w-full relative">
                                <input type={inputType} placeholder="Password" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("password", { required: true })} />
                                <button className="text-2xl absolute right-2 top-[50%] translate-y-[-50%]">
                                    {inputType === 'text' ? <FaEye onClick={() => setInputType('password')} /> : <FaEyeSlash onClick={() => setInputType('text')} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-600 text-left">new Password  is required</p>}
                            <p className="text-left text-[#575757]">Confirm new Password</p>
                            <div className="w-full relative">
                                <input type={conFirmPassType} placeholder="confirm Password" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("confirmPass", { required: true })} />
                                <button className="text-2xl absolute right-2 top-[50%] translate-y-[-50%]">
                                    {conFirmPassType === 'text' ? <FaEye onClick={() => setConFirmPassType('password')} /> : <FaEyeSlash onClick={() => setConFirmPassType('text')} />}
                                </button>
                            </div>
                            {errors.confirmPass && <p className="text-red-600 text-left">confirm new Password  is required</p>}
                            <input onClick={() => {
                                setOpenNewPass(false)
                                setOpenChangedPass(true)
                            }} value={`change password`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
                        </form>
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
                    <div className='md:grid md:grid-cols-2 flex flex-col justify-start min-h-[700px] overflow-hidden rounded-[6px] items-start md:items-center gap-0 h-full relative'>


                        <div className="bg-white w-full px-5 py-6 text-center">
                            <h3 className="text-[#262727] font-bold text-4xl mb-4">Verification Code</h3>
                            <Input.OTP style={{
                            }} length={6} {...sharedProps} /> <br />
                            <input onClick={() => {
                                setOpenVerifyPass(false)
                                setOpenNewPass(true)
                            }} value={`Send Code`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
                        </div>
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
                    <div className='md:grid md:grid-cols-2 flex flex-col justify-start min-h-[700px] overflow-hidden rounded-[6px] items-start md:items-center gap-0 h-full relative'>


                        <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full px-5 py-6 text-center">
                            <h3 className="text-[#262727] font-bold text-4xl">Forgot Password</h3>
                            <p className="text-left text-[#575757]">Email</p>
                            <input placeholder="Asadujjaman@gmail.com" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("email", { required: true })} />
                            {errors.email && <p className="text-red-600 text-left">Email is required</p>}
                            <div className="w-full flex justify-between items-center">
                            </div>
                            <input onClick={() => {
                                setOpenForgetPass(false)
                                setOpenVerifyPass(true)
                            }} value={`Send Code`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
                        </form>
                        <div className="w-full bg-[#B47000] h-full flex flex-col justify-center items-center text-white gap-9 z-40">
                            <p className="text-[16px] text-center lg:text-2xl text-[#DADADA]">Welcome to out forgot password page ! <br />
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