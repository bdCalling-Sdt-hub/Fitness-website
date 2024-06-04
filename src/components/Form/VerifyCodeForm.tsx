import { GetProp, Input } from 'antd';
import { OTPProps } from 'antd/es/input/OTP';
import React, { useState } from 'react'
import { useAppDispatch } from '../../Store/hook';
import { VerifyCode } from '../../States/Authentication/VerifyCodeSlice';
interface ChildPops {
    setOpenVerifyPass: (arg0: boolean) => void
    setOpenNewPass: (arg0: boolean) => void
}
const VerifyCodeForm = ({ setOpenVerifyPass, setOpenNewPass }: ChildPops): React.JSX.Element => {
    const [code, setCode] = useState('')
    const dispatch = useAppDispatch()
    const onChange: GetProp<typeof Input.OTP, 'onChange'> = (text) => {
        // console.log('onChange:', text);
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
    return (
        <div className="bg-white w-full px-1 md:px-5 py-6 text-center">
            <h3 className="text-[#262727] font-bold text-lg md:text-2xl lg:text-4xl mb-4">Verification Code</h3>
            <Input.OTP style={{
            }} length={6} {...sharedProps} /> <br />
            <input onClick={verifyCode} value={`Send Code`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
        </div>
    )
}

export default VerifyCodeForm
