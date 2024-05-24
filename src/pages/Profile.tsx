/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import { CiEdit } from 'react-icons/ci';
import { Button, Form, Input } from 'antd';

const Profile = ():React.JSX.Element => {
    const [imgURL, setImgURL] = useState<string>();
    const [image, setImage] = useState<object>();
    console.log(image)
    const [tab, setTab] = useState(new URLSearchParams(window.location.search).get('tab') || "Profile");

    const handlePageChange = (tab: string) => {
        setTab(tab);
        const params = new URLSearchParams(window.location.search);
        params.set('tab', tab);
        window.history.pushState(null, "", `?${params.toString()}`);
    };

    const handleChange=(e:any)=>{
        const file= e.target.files[0];
        setImage(file)
        const imgUrl = URL.createObjectURL(file);
        setImgURL(imgUrl);
    }
    return (
        <div className='container pb-16'>
            <Navigation name={`${tab}`} />
            <Heading title='Profile'  style='mb-6'  />

            <div className='bg-base py-9 px-10 rounded flex items-center gap-6' >
                <div className='relative w-[124px] h-[124px] mx-auto'>
                    <input type="file" onChange={handleChange} id='img' style={{display : "none"}} />
                    <img 
                        style={{width: 124, height: 124, borderRadius: "100%"}} 
                        src={`${imgURL ? imgURL : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"}`}
                        alt="" 
                    />
                    <label 
                        htmlFor="img" 
                        className='
                            absolute top-1/2 -right-2 
                            bg-white 
                            rounded-full 
                            w-6 h-6 
                            flex items-center justify-center 
                            cursor-pointer
                        '
                    >
                        <CiEdit color='#929394' />
                    </label>
                </div>
                <div className='w-full'>
                    <p className=' text-primary text-[16px] leading-5 font-light'>Hello</p>
                    <p className=' text-[#575757] text-[24px] leading-[32px] font-semibold  '>Asad Admin</p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-6 my-6">
                <p 
                    onClick={()=>handlePageChange("Profile")}
                    className={`
                        ${tab === "Profile" ? "border-primary border-b-2 font-semibold" : "border-b-2 border-transparent font-normal" }
                        pb-2 cursor-pointer text-[16px] leading-5  text-[#6D6D6D]
                    `}
                >
                    Edit Profile
                </p>
                <p 
                    onClick={()=>handlePageChange("Change Password")} 
                    className={`
                        ${tab === "Change Password" ? "border-primary border-b-2 font-semibold" : "border-b-2 border-transparent font-normal" }
                        pb-2 cursor-pointer text-base leading-[18px]  text-[#6D6D6D]
                    `}
                >
                    Change Password
                </p>
            </div>


            {
                tab === "Profile"
                ?
                <div 
                    className='max-w-[481px] mx-auto rounded-lg p-6'
                    style={{
                        boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
                    }}
                >
                    <h1 className='text-center text-secondary leading-7 text-2xl font-medium mb-7'>Edit Profile</h1>
                    <Form layout="vertical">
                        <Form.Item 
                            name="fullName"
                            label={<p className="text-[#919191] text-[16px] leading-5 font-normal">User Name</p>}
                        >
                            <Input 
                                style={{
                                    width: "100%",
                                    height: 48,
                                    border: "1px solid #DCDDDE",
                                    borderRadius: "8px",
                                    color: "#919191",
                                    outline: "none"
                                }}
                                className='text-[16px] leading-5'
                                placeholder="Enter User Name"
                            />
                        </Form.Item>
                            
                        <Form.Item 
                            name="email"
                            label={<p className="text-[#919191] text-[16px] leading-5 font-normal">Email</p>}
                        >
                            <Input 
                                style={{
                                    width: "100%",
                                    height: 48,
                                    border: "1px solid #DCDDDE",
                                    borderRadius: "8px",
                                    color: "#919191",
                                    outline: "none"
                                }}
                                className='text-[16px] leading-5'
                                placeholder="Enter Email"
                            />
                        </Form.Item>

                        <Form.Item 
                            name="mobileNumber"
                            label={<p className="text-[#919191] text-[16px] leading-5 font-normal">Contact Number</p>}
                        >
                            <Input 
                                style={{
                                    width: "100%",
                                    height: 48,
                                    border: "1px solid #DCDDDE",
                                    borderRadius: "8px",
                                    color: "#919191",
                                    outline: "none"
                                }}
                                className='text-[16px] leading-5'
                                placeholder="Enter Contact Number"
                            />
                        </Form.Item>

                        <Form.Item 
                            name="designation"
                            label={<p className="text-[#919191] text-[16px] leading-5 font-normal">Designation</p>}
                        >
                            <Input 
                                style={{
                                    width: "100%",
                                    height: 48,
                                    border: "1px solid #DCDDDE",
                                    borderRadius: "8px",
                                    color: "#919191",
                                    outline: "none"
                                }}
                                className='text-[16px] leading-5'
                                placeholder="Enter Designation"
                            />
                        </Form.Item>

                        <Form.Item 
                            name="address"
                            label={<p className="text-[#919191] text-[16px] leading-5 font-normal">Address</p>}
                        >
                            <Input 
                                style={{
                                    width: "100%",
                                    height: 48,
                                    border: "1px solid #DCDDDE",
                                    borderRadius: "8px",
                                    color: "#919191",
                                    outline: "none"
                                }}
                                className='text-[16px] leading-5'
                                placeholder="Enter Address"
                            />
                        </Form.Item>

                        <Form.Item 
                            style={{marginBottom: 0, display: "flex", alignItems: "center", justifyContent: "center"}}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                style={{
                                    width : 197,
                                    height: 48,
                                    color: "#FCFCFC"
                                }}
                                className='font-normal text-[16px] leading-6 bg-primary'
                            >
                                Save Changes
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                :
                <div 
                    className='max-w-[481px] mx-auto rounded-lg p-6'
                    style={{
                        boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
                    }}
                >
                    <h1 className='text-center text-secondary leading-7 text-2xl font-medium mb-7'>Change Password</h1>
                    <Form
                        layout='vertical'
                    >
                            <Form.Item 
                                name="current_password"
                                label={<p className="text-[#415D71] text-sm leading-5 poppins-semibold">Current Password</p>}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter Current Password!"
                                    }
                                ]}
                            >
                                <Input.Password 
                                    style={{
                                        width: "100%",
                                        height: "42px",
                                        border: "1px solid #DCDDDE",
                                        borderRadius: "8px",
                                        color: "black",
                                        outline: "none",

                                    }}
                                    type="text" 
                                    placeholder="Enter Current Password"
                                />
                            </Form.Item>


                            <Form.Item
                                name="new_password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter New Password!"
                                    }
                                ]}
                                label={<p className="text-[#415D71] text-sm leading-5 poppins-semibold">New Password</p>}
                            >
                                <Input.Password 
                                    style={{
                                        width: "100%",
                                        height: "42px",
                                        border: "1px solid #DCDDDE",
                                        borderRadius: "8px",
                                        color: "black",
                                        outline: "none",

                                    }}
                                    type="text" 
                                    placeholder="Enter New Password"
                                />
                            </Form.Item>

                            <Form.Item 
                                label={<p className="text-[#415D71] text-sm leading-5 poppins-semibold">Confirm Password</p>}
                                name="confirm_password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter Confirm Password!"
                                    }
                                ]}
                            >
                                <Input.Password 
                                    style={{
                                        width: "100%",
                                        height: "42px",
                                        border: "1px solid #DCDDDE",
                                        borderRadius: "8px",
                                        color: "black",
                                        outline: "none",

                                    }}
                                    type="text" 
                                    placeholder="Enter Confirm Password"
                                />
                            </Form.Item>

                        <Form.Item 
                            style={{marginBottom: 0, display: "flex", alignItems: "center", justifyContent: "center"}}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                style={{
                                    width : 197,
                                    height: 48,
                                    color: "#FCFCFC"
                                }}
                                className='font-normal text-[16px] leading-6 bg-primary'
                            >
                                Save Changes
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            }
        </div>
    )
}

export default Profile