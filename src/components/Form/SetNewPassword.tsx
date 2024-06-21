
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { useAppDispatch } from '../../Store/hook'
import { SetNewPass } from '../../States/Authentication/SetNewPassSlice'
interface Inputs {
    search: string | null,
    email: string | null,
    password: string,
    savePass: string | null,
    username: string | null,
    contact: string | null,
    confirmPass: string | null,
}
interface ChildPops {
    setOpenNewPass: (arg0: boolean) => void
    setOpenChangedPass: (arg0: boolean) => void
}
const SetNewPassword = ({ setOpenNewPass, setOpenChangedPass }: ChildPops) => {//email:localStorage.getItem('resetEmail'),
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { confirmPass, password } = data
        if (confirmPass !== password) {
            return Swal.fire({
                position: "center",
                icon: "error",
                title: "confirm password doesn't match",
                showConfirmButton: false,
                timer: 1500,
                imageWidth: 300,
                imageHeight: 400,
            })
        }
        dispatch(SetNewPass({ email: localStorage.getItem('resetEmail'), password: password, confirmPassword: confirmPass }))
            .then((res) => {
                if (res.type === 'SetNewPass/fulfilled') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "password changed",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setOpenNewPass(false)
                    setOpenChangedPass(false)
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        timer: 1500,
                        showConfirmButton: false,
                        showCloseButton: false
                    });
                }
            })
    }
    const [inputType, setInputType] = useState('password')
    const [conFirmPassType, setConFirmPassType] = useState('password')
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full px-5 py-6 text-center">
            <h3 className="text-[#262727] font-bold text-lg md:text-2xl lg:text-4xl mb-4">Set new Password</h3>
            <p className="text-left text-[#575757]">New Password</p>
            <div className="w-full relative">
                <input type={inputType} placeholder="Password" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("password", { required: true })} />
                <button type="button" className="text-2xl absolute right-2 top-[50%] translate-y-[-50%]">
                    {inputType === 'text' ? <FaEye onClick={() => setInputType('password')} /> : <FaEyeSlash onClick={() => setInputType('text')} />}
                </button>
            </div>
            {errors.password && <p className="text-red-600 text-left">new Password  is required</p>}
            <p className="text-left text-[#575757]">Confirm new Password</p>
            <div className="w-full relative">
                <input type={conFirmPassType} placeholder="confirm Password" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("confirmPass", { required: true })} />
                <button type="button" className="text-2xl absolute right-2 top-[50%] translate-y-[-50%]">
                    {conFirmPassType === 'text' ? <FaEye onClick={() => setConFirmPassType('password')} /> : <FaEyeSlash onClick={() => setConFirmPassType('text')} />}
                </button>
            </div>
            {errors.confirmPass && <p className="text-red-600 text-left">confirm new Password  is required</p>}
            <input onClick={() => {

            }} value={`change password`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
        </form>
    )
}

export default SetNewPassword
