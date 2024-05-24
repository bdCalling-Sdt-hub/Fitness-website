import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { Modal } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoIosSearch } from 'react-icons/io';
import LoginPopUp from '../../pages/LoginPopUp';

interface IRoutes {
    name: string;
    path: string
}

interface Inputs {
    search: string
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
    return (
        <div className='bg-base h-[80px] flex items-center justify-center'>
            <div className='container flex items-center justify-between'>

                <Link to="/">
                    <img src={Logo} style={{ width: 162, height: 62 }} alt="" />
                </Link>


                {/* routes  section*/}
                <ul className='flex items-center gap-6'>
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
                <div className='flex items-center gap-6'>
                    <Link to={"/cart"}>
                        <BsCart2 size={24} color='#555555' />
                    </Link>
                    <button onClick={() => setOpenSearchModal(true)}>
                        <IoSearch size={24} color='#555555' />
                    </button>

                    <div onClick={() => {
                        // setopenModalFor('login')
                        // setOpen(true)
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
                        // setopenModalFor('register')
                        // setOpen(true)
                        toggle(true)
                        setOpenPopUp(true)
                    }}
                        className='
                            bg-primary text-[#FBFBFB] 
                            font-light text-[16px] leading-[21px] 
                            cursor-pointer w-[137px] h-10
                            flex items-center justify-center
                        '
                    >
                        Sign In
                    </div>
                </div>
            </div>
            <Modal
                centered
                open={openPopUp}
                onCancel={() => setOpenPopUp(false)}
                width={900}
                footer={false}
            >
                <LoginPopUp 
                signIn={signIn} toggle={toggle}
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