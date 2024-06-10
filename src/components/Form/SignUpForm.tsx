import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../Store/hook";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signUp } from "../../States/Authentication/SignUpSlice";
import Swal from "sweetalert2";

type Inputs = {
    email: string,
    password: string,
    username: string | null,
    contact: string | null,
}
interface ChildPops {
    setOpenPopUp: (arg0: boolean) => void
    toggle: (arg0: boolean) => void
}
const SignUpForm = ({ setOpenPopUp, toggle }: ChildPops) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(signUp({ username: data.username, email: data.email, contact: data.contact, password: data.password }))
            .then(response => {
                if (response?.payload._id) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Sign Up Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        reset()
                        // location.reload();
                        setOpenPopUp(true)
                        toggle(false)
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: response?.payload.message,
                        showConfirmButton: false,
                        timer: 1500,
                        imageWidth: 300,
                        imageHeight: 400,
                    })
                }
            })
        // //console.log(data)
    }
    const [inputType, setInputType] = useState('password')
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full md:px-5 px-1 py-6 text-center">
            <h3 className="text-[#262727] font-bold text-lg md:text-2xl lg:text-4xl">Register a new account</h3>
            <p className="text-sm py-2 md:py-4 lg:py-6">Please enter your information to create account</p>
            <p className="text-left text-[#575757]">User name</p>
            <input placeholder="Asaduj jaman" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("username", { required: true })} />
            {errors.username && <p className="text-red-600 text-left">username is required</p>}
            <p className="text-left text-[#575757]">Email</p>
            <input placeholder="Asadujjaman@gmail.com" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("email", { required: true })} />
            {errors.email && <p className="text-red-600 text-left">Email is required</p>}
            <p className="text-left text-[#575757]">Contact no</p>
            <input placeholder="Asadujjaman@gmail.com" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("contact", { required: true })} />
            {errors.contact && <p className="text-red-600 text-left">Contact is required</p>}
            <p className="text-left text-[#575757]">Password</p>
            <div className="w-full relative">
                <input type={inputType} placeholder="Password" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("password", { required: true })} />
                <button type="button" className="text-2xl absolute right-2 top-[50%] translate-y-[-50%]">
                    {inputType === 'text' ? <FaEye onClick={() => setInputType('password')} /> : <FaEyeSlash onClick={() => setInputType('text')} />}
                </button>
            </div>
            {errors.password && <p className="text-red-600 text-left">Password  is required</p>}
            <input value={`Sign In`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
        </form>
    )
}

export default SignUpForm
