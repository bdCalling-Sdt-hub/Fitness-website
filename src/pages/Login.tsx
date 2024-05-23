import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx"
import { Link } from "react-router-dom"

type Inputs = {
    email: string,
    password: string,
    savePass: string | null,
    username: string | null,
    contact: string | null,
}
interface childProps {
    openModalFor: string,
    setopenModalFor: (openModalFor: string) => void
}
const Login = ({ openModalFor, setopenModalFor }: childProps): React.JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    const [inputType, setInputType] = useState('password')
    return (
        <div className='md:grid md:grid-cols-2 flex flex-col justify-start min-h-[700px] overflow-hidden rounded-[6px] items-start md:items-center gap-0 h-full relative'>

            {
                openModalFor === 'login' ? <>
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full px-5 py-6 text-center">
                        <h3 className="text-[#262727] font-bold text-4xl">Login to Account</h3>
                        <p className="text-sm py-6">Please enter your email and password to continue</p>
                        <p className="text-left text-[#575757]">Email</p>
                        <input placeholder="Asadujjaman@gmail.com" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("email", { required: true })} />
                        {errors.email && <p className="text-red-600 text-left">Email is required</p>}
                        <p className="text-left text-[#575757]">Password</p>
                        <div className="w-full relative">
                            <input type={inputType} placeholder="Password" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("password", { required: true })} />
                            <button className="text-2xl absolute right-2 top-[50%] translate-y-[-50%]">
                                {inputType === 'text' ? <FaEye onClick={() => setInputType('password')} /> : <FaEyeSlash onClick={() => setInputType('text')} />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-600 text-left">Password  is required</p>}
                        <div className="w-full flex justify-between items-center">
                            <div className="flex justify-start items-center gap-2 clear-start ">
                                <input value={`save`} type="checkbox" id="" {...register("savePass", { required: true })} />
                                <p className="text-[#6A6D7C]">Remember Password</p>
                            </div>
                            <Link to={`#`} className="text-[#FF0000]">
                                Forgot Password?
                            </Link>
                        </div>
                        <input value={`Sign In`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
                    </form>
                    <div className="w-full bg-[#B47000] h-full flex flex-col justify-center items-center text-white gap-9 z-40">
                        <h3 className="text-2xl md:text-3xl xl:text-4xl text-center ">Welcome Back !</h3>
                        <p className="text-[16px] text-center lg:text-2xl text-[#DADADA]">Please Sign in into your <br />
                            account with the given <br />
                            details to continue</p>
                        <p className="text-center">New here ? create a new account</p>
                        <button onClick={() => setopenModalFor('register')} className="p-7 py-3 border">
                            Sign Up
                        </button>
                    </div>
                </> : <>
                    <div className="w-full bg-[#B47000] h-full relative overflow-hidden">
                        <div className={`flex flex-col justify-center items-center text-white gap-9 z-40 absolute ${openModalFor === 'login' ? 'left-[100%]' : 'left-0 '} w-full h-full top-0 `}>
                            <h3 className="text-2xl md:text-3xl xl:text-4xl text-center ">Hello Friend!</h3>
                            <p className="text-[16px] text-center lg:text-2xl text-[#DADADA]">Please provide the <br />
                                information's to register <br />
                                your account</p>
                            <p className="text-center">Already have an account! Sign in</p>
                            <button onClick={() => setopenModalFor('login')} className="p-7 py-3 border">
                                Sign in
                            </button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full px-5 py-6 text-center">
                        <h3 className="text-[#262727] font-bold text-4xl">Register a new account</h3>
                        <p className="text-sm py-6">Please enter your information to create account</p>
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
                            <button className="text-2xl absolute right-2 top-[50%] translate-y-[-50%]">
                                {inputType === 'text' ? <FaEye onClick={() => setInputType('password')} /> : <FaEyeSlash onClick={() => setInputType('text')} />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-600 text-left">Password  is required</p>}
                        <div className="w-full flex justify-between items-center">
                            <div className="flex justify-start items-center gap-2 clear-start ">
                                <input value={`save`} type="checkbox" id="" {...register("savePass", { required: true })} />
                                <p className="text-[#6A6D7C]">Remember Password</p>
                            </div>
                            <Link to={`#`} className="text-[#FF0000]">
                                Forgot Password?
                            </Link>
                        </div>
                        <input value={`Sign In`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
                    </form>
                </>
            }
            <button className={`absolute top-[14px] right-[14px] ${openModalFor === 'login' ? 'bg-white' : 'bg-[#B47000]'} p-1 rounded-full`}>
                <RxCross1 className={` text-xl`} />
            </button>
        </div>
    )
}

export default Login
