import React, { useEffect } from "react";
import Logo from "../../assets/logo.png";
import { IoIosSend } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hook";
import { GetAllContact } from "../../States/Contact/GetAllContactSlice";

const Footer = (): React.JSX.Element => {
    const { Contact } = useAppSelector(state => state.GetAllContact)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(GetAllContact())
    }, [])
    return (
        <div className="relative bg-primary pt-[70px]">
            <div className='container flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className="w-full">
                    <img src={Logo} style={{ width: 162, height: 62, marginBottom: 24 }} alt="" />
                    <p className="text-[18px] font-normal leading-[34px] text-[#F7F7F7]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>

                <div className="w-full">
                    <h1 className="mb-[58px] lg:text-[32px] text-xl font-normal leading-[28px] text-[#F7F7F7]">Information</h1>
                    <ul className='grid grid-cols-1 gap-4 text-[16px] font-normal leading-[19px] text-[#F2F2F2]'>
                        <Link to={`/about-us`}>
                            <li>Why Choose Us</li>
                        </Link>
                        <Link to={`/privacy-policy`}>
                            <li>Privacy Policy</li>
                        </Link>
                        <Link to={`/terms-conditions`}>
                            <li>Terms & Condition</li>
                        </Link>
                        <Link to={`/contact-us`}>
                            <li>Contacts Us</li>
                        </Link>
                    </ul>
                </div>


                <div className="w-full">
                    <h1 className="mb-[58px] lg:text-[32px] text-xl font-normal leading-[28px] text-[#F7F7F7]">Help & Support</h1>
                    <div className="flex items-center gap-3">
                        <FiMail size={24} color="#F7F7F7" />
                        <p className="text-[16px] font-normal leading-[30px]  text-[#F7F7F7]">Email : {Contact?.email?.[0]?.email || 'mail@gmail.com'} </p>
                    </div>

                    {/* number */}

                    <div className="flex items-center gap-3 mt-4">
                        <IoCallOutline size={24} color="#F7F7F7" />
                        <p className="text-[16px] font-normal leading-[30px]  text-[#F7F7F7]">Phone : {Contact?.number?.[0]?.number || '+188750-6866'} </p>
                    </div>


                </div>

                <div className="w-full">
                    <h1 className="mb-[58px] lg:text-[32px] text-xl font-normal leading-[28px] text-[#F7F7F7]">Newsletter Sign up</h1>
                    <p className="text-[16px] font-normal leading-[30px]  text-[#F7F7F7]">Get Alert Directly Into Your Inbox After Each Post.</p>
                    <div className="bg-white w-full relative h-[56px] flex items-center gap-2 rounded-[100px] px-3 mt-11">
                        <input
                            type="text"
                            placeholder="enter your email"
                            className="font-normal  capitalize text-[14px] leading-[24px] text-secondary border-none outline-none w-full pl-2 pr-11"
                        />

                        <div className="bg-base w-[51px] h-[48px] absolute top-[4px] right-1 rounded-full flex  items-center justify-center">
                            <IoIosSend size={24} color="#3F2700" />
                        </div>
                    </div>
                </div>
            </div>

            {/* copy write */}

            <div className='bg-[#07060A] mt-20 flex items-center justify-center'>
                <div className="container flex items-center flex-wrap justify-between py-[18px]">
                    <p className=" text-[16px] font-normal leading-[24px] text-[#D9D9D9]">©2024 Spaktech. Agency | All Right Reserved</p>

                    <div className="flex items-center gap-[42px]">
                        <CiFacebook size={24} color="white" />
                        <FaInstagram size={24} color="white" />
                        <FaXTwitter size={22} color="white" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;