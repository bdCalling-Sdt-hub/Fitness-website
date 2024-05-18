import React from 'react'
import { GoMail } from 'react-icons/go'
import { IoCallOutline } from 'react-icons/io5'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Button, Form, Input } from 'antd'

const ContactUs = ():React.JSX.Element => {
    return (
        <div className='container pb-20'>
            <Navigation name='Contact Us' />
            <Heading title='Contact Us'  style='mb-6' />
            <MetaTag title='Contact Us' />

            <div className='flex items-center justify-between w-[572px] mx-auto'>
                <div className='flex gap-3'>
                    <div className='flex items-center gap-4 h-fit'>
                        <GoMail size={20} color='#575757' />
                        <h2 className='text-secondary text-[16px] leading-[30px] font-normal'>Email : </h2>
                    </div>
                    <div>
                        <p className='text-secondary text-[16px] leading-[30px] font-normal'>xxxxxxx@gmail.com</p>
                        <p className='text-secondary text-[16px] leading-[30px] font-normal'>xxxxxxx@gmail.com</p>
                    </div>
                </div>
                
                <div className='flex gap-3'>
                    <div className='flex items-center gap-4 h-fit'>
                        <IoCallOutline size={20} color='#575757' />
                        <h2 className='text-secondary text-[16px] leading-[30px] font-normal'>Phone : </h2>
                    </div>
                    <div>
                        <p className='text-secondary text-[16px] leading-[30px] font-normal'>+9999999997</p>
                        <p className='text-secondary text-[16px] leading-[30px] font-normal'>+9999999997</p>
                    </div>
                </div>
            </div>

            <h1 className='text-[40px] leading-8 text-secondary text-center mt-16 font-normal'>Get in Touch</h1>
            <p className='my-10 text-[18px] leading-[14px] text-secondary text-center font-normal'>Contact with us</p>

            <Form layout='vertical' className='w-[572px] mx-auto'>
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
                        placeholder="Enter User Name"
                    />
                </Form.Item>

                <Form.Item 
                    name="message"
                    label={<p className="text-[#919191] text-[16px] leading-5 font-normal">Message</p>}
                >
                    <Input.TextArea 
                        style={{
                            width: "100%",
                            height: 213,
                            border: "1px solid #DCDDDE",
                            borderRadius: "8px",
                            color: "#919191",
                            outline: "none",
                            resize: "none"
                        }}
                        className='text-[16px] leading-5'
                        placeholder="What can we help with?"
                    />
                </Form.Item>

                <Form.Item 
                    style={{marginBottom: 0}}
                >
                    <Button
                        block
                        htmlType="submit"
                        style={{
                            width : "100%",
                            height: 48,
                            color: "#FCFCFC"
                        }}
                        className='font-normal text-[16px] leading-6 bg-primary'
                    >
                        Send
                    </Button>
                </Form.Item>
            </Form>


        </div>
    )
}

export default ContactUs