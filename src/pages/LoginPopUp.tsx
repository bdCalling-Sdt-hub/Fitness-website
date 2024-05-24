import { useState } from 'react';
import * as  LoginStyle from '../components/LoginStyle'
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Link } from "react-router-dom"
interface ChildPops {
    signIn: boolean,
    toggle: (signIn: boolean) => void,
    setOpenForgetPass: (openForgetPass: boolean) => void
    setOpenPopUp: (openPopUp: boolean) => void
}
type Inputs = {
    email: string,
    password: string,
    savePass: string | null,
    username: string | null,
    contact: string | null,
}

const LoginPopUp = ({ signIn, toggle,setOpenForgetPass ,setOpenPopUp}: ChildPops) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    const [inputType, setInputType] = useState('password')
    return (
        <LoginStyle.Container>
            <LoginStyle.SignUpContainer signinIn={signIn}>
                <LoginStyle.Form>
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
                            <button onClick={()=>{
                                setOpenPopUp(false)
                                setOpenForgetPass(true)
                                }} className="text-[#FF0000]">
                                Forgot Password?
                            </button>
                        </div>
                        <input value={`Sign In`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
                    </form>
                </LoginStyle.Form>
            </LoginStyle.SignUpContainer>

            <LoginStyle.SignInContainer signinIn={signIn}>
                <LoginStyle.Form>
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
                        </div>
                        <input value={`Sign In`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
                    </form>
                </LoginStyle.Form>
            </LoginStyle.SignInContainer>

            <LoginStyle.OverlayContainer signinIn={signIn}>
                <LoginStyle.Overlay signinIn={signIn}>

                    <LoginStyle.LeftOverlayPanel signinIn={signIn}>
                        <div className="w-full bg-[#B47000] h-full flex flex-col justify-center items-center text-white gap-9 z-40">
                            <h3 className="text-2xl md:text-3xl xl:text-4xl text-center ">Welcome Back !</h3>
                            <p className="text-[16px] text-center lg:text-2xl text-[#DADADA]">Please Sign in into your <br />
                                account with the given <br />
                                details to continue</p>
                            <p className="text-center">New here ? create a new account</p>
                            <button onClick={() => toggle(true)} className="p-7 py-3 border">
                                Sign Up
                            </button>
                        </div>
                    </LoginStyle.LeftOverlayPanel>

                    <LoginStyle.RightOverlayPanel signinIn={signIn}>
                        <div className="w-full bg-[#B47000] h-full relative overflow-hidden">
                            <div className={`flex flex-col justify-center items-center text-white gap-9 w-full h-full top-0 `}>
                                <h3 className="text-2xl md:text-3xl xl:text-4xl text-center ">Hello Friend!</h3>
                                <p className="text-[16px] text-center lg:text-2xl text-[#DADADA]">Please provide the <br />
                                    information's to register <br />
                                    your account</p>
                                <p className="text-center">Already have an account! Sign in</p>
                                <button onClick={() => toggle(false)} className="p-7 py-3 border">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </LoginStyle.RightOverlayPanel>

                </LoginStyle.Overlay>
            </LoginStyle.OverlayContainer>

        </LoginStyle.Container>
    )
}

export default LoginPopUp
