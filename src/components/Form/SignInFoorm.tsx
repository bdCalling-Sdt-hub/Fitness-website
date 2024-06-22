import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useAppDispatch } from '../../Store/hook'
import { login } from '../../States/Authentication/loginSlice'
import Swal from 'sweetalert2'
type Inputs = {
    email: string,
    password: string,
    savePass: string | null,
    username: string | null,
    contact: string | null,
}
interface ChildPops {
    setOpenPopUp: (arg0: boolean) => void
    setOpenForgetPass: (arg0: boolean) => void
}
const SignInFoorm = ({ setOpenPopUp, setOpenForgetPass }: ChildPops) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log("email", data.email, "password", data?.password)


        dispatch(login({ email: data.email, password: data.password }))
            .then(response => {
                if (response?.type === 'login/fulfilled') {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Logged In Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        // navigate("/")
                        location.reload();
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: response?.payload?.message,
                        showConfirmButton: false,
                        timer: 1500,
                        imageWidth: 300,
                        imageHeight: 400,
                    })
                }
            })
    }
    const [inputType, setInputType] = useState('password')
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full md:px-5 px-1 py-6 text-center">
            <h3 className="text-[#262727] font-bold text-lg md:text-2xl lg:text-4xl">Login to Account</h3>
            <p className="text-sm py-2 md:py-4 lg:py-6">Please enter your email and password to continue</p>
            <p className="text-left text-[#575757]">Email</p>
            <input placeholder="Enter your email" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("email", { required: true })} />
            {errors.email && <p className="text-red-600 text-left">Email is required</p>}
            <p className="text-left text-[#575757]">Password</p>
            <div className="w-full relative">
                <input type={inputType} placeholder="Password" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("password", { required: true })} />
                <button type='button' className="text-2xl absolute right-2 top-[50%] translate-y-[-50%]">
                    {inputType === 'text' ? <FaEye onClick={() => setInputType('password')} /> : <FaEyeSlash onClick={() => setInputType('text')} />}
                </button>
            </div>
            {errors.password && <p className="text-red-600 text-left">Password  is required</p>}
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <div className="flex justify-start items-center gap-2 clear-start ">
                    <input value={`save`} type="checkbox" id="" {...register("savePass", { required: false })} />
                    <p className="text-[#6A6D7C]">Remember Password</p>
                </div>
                <button type='button' onClick={() => {
                    setOpenPopUp(false)
                    setOpenForgetPass(true)
                }} className="text-[#FF0000]">
                    Forgot Password?
                </button>
            </div>
            <input value={`Sign In`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
        </form>
    )
}

export default SignInFoorm
