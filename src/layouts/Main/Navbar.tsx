import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

interface IRoutes {
    name: string;
    path : string
}

const Navbar = ():React.JSX.Element => {
    const items =[
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
            path: "/contacts"
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
                    <img src={Logo} style={{width: 162, height: 62}} alt="" />
                </Link>
                

                {/* routes  section*/}
                <ul className='flex items-center gap-6'>
                    {
                        items?.map((item : IRoutes, index)=>{
                            return (
                                <Link key={index} to={`${item.path}`}>
                                    <li className=' text-secondary font-light text-[16px] leading-[21px]'>{item.name}</li>
                                </Link>
                            )
                        })
                    }
                </ul>

                {/* others routes and user menu section */}
                <div className='flex items-center gap-6'>
                    <Link to={"/notifications"}>
                        <BsCart2 size={24} color='#555555' />
                    </Link>
                    <Link to={"/wishlist"}>
                        <IoSearch size={24} color='#555555' />
                    </Link>
                    <div 
                        className='
                            border border-primary text-primary 
                            font-light text-[16px] leading-[21px] 
                            cursor-pointer w-[137px] h-10
                            flex items-center justify-center
                        '
                    >
                        Login In
                    </div>
                    <div 
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
        </div>
    )
}

export default Navbar