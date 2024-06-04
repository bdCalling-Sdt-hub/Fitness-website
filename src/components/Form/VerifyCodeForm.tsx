import { GetProp, Input } from 'antd';
import { OTPProps } from 'antd/es/input/OTP';
import React, { useState } from 'react'
import { useAppDispatch } from '../../Store/hook';
import { VerifyCode } from '../../States/Authentication/VerifyCodeSlice';
import { ForgetPass } from '../../States/Authentication/ForgatePasswordSlice';
import Swal from 'sweetalert2';
interface ChildPops {
    setOpenVerifyPass: (arg0: boolean) => void
    setOpenNewPass: (arg0: boolean) => void
}
const VerifyCodeForm = ({ setOpenVerifyPass, setOpenNewPass }: ChildPops): React.JSX.Element => {
    const [code, setCode] = useState('')
    const dispatch = useAppDispatch()
    const onChange: GetProp<typeof Input.OTP, 'onChange'> = (text) => {
        // //console.log('onChange:', text);
        setCode(text)
    };
    const sharedProps: OTPProps = {
        onChange,
    };
    const verifyCode = () => {
        dispatch(VerifyCode({ code: code, email: localStorage.getItem('resetEmail') }))
            .then((res) => {
                if (res.payload.valid) {
                    setOpenVerifyPass(false)
                    setOpenNewPass(true)
                }
            })
    }
    const handleResendCode = () => {
        dispatch(ForgetPass({ email: localStorage.getItem('resetEmail') }))
            .then(response => {
                if (response?.payload?.success && localStorage.getItem('resetEmail')) {
                    Swal.fire({
                        title: "please check your email",
                        text: "a verification code has been sent to your email",
                        icon: "success",
                        showCancelButton: false,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "okey"
                    })
                }
            })
    }
    return (
        <div className="bg-white w-full px-1 md:px-5 py-6 text-center">
            <h3 className="text-[#262727] font-bold text-lg md:text-2xl lg:text-4xl mb-4">Verification Code</h3>
            <Input.OTP style={{
            }} length={6} {...sharedProps} /> <br />
            <input onClick={verifyCode} value={`Send Code`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
            <div className='flex justify-center items-center mt-4 gap-2'>
                <p>You have not received the email?</p> <button onClick={handleResendCode} className='text-[#51AC1A]'>
                    Resend
                </button>
            </div>
        </div>
    )
}

export default VerifyCodeForm
