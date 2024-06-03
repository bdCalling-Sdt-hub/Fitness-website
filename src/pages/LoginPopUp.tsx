import { useState } from 'react';
import * as  LoginStyle from '../components/LoginStyle'
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAppDispatch } from '../Store/hook';
import SignInFoorm from '../components/Form/SignInFoorm';
import SignUpForm from '../components/Form/SignUpForm';
interface ChildPops {
    signIn: boolean,
    toggle: (signIn: boolean) => void,
    setOpenForgetPass: (openForgetPass: boolean) => void
    setOpenPopUp: (openPopUp: boolean) => void
}

const LoginPopUp = ({ signIn, toggle, setOpenForgetPass, setOpenPopUp }: ChildPops) => {
    return (
        <LoginStyle.Container>
            <LoginStyle.SignUpContainer signinIn={signIn}>
                <LoginStyle.Form>
                    <SignInFoorm setOpenForgetPass={setOpenForgetPass} setOpenPopUp={setOpenPopUp} />
                </LoginStyle.Form>
            </LoginStyle.SignUpContainer>
            <LoginStyle.SignInContainer signinIn={signIn}>
                <LoginStyle.Form>
                    <SignUpForm setOpenPopUp={setOpenPopUp} />
                </LoginStyle.Form>
            </LoginStyle.SignInContainer>
            <LoginStyle.OverlayContainer signinIn={signIn}>
                <LoginStyle.Overlay signinIn={signIn}>
                    <LoginStyle.LeftOverlayPanel signinIn={signIn}>
                        <div className="w-full bg-[#B47000] h-full flex flex-col justify-center items-center text-white gap-2 md:gap-4 lg:gap-6 xl:gap-9 z-40">
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
                        <div className="w-full bg-[#B47000] h-full flex flex-col justify-center items-center text-white gap-2 md:gap-4 lg:gap-6 xl:gap-9 z-40">
                            <h3 className="text-2xl md:text-3xl xl:text-4xl text-center ">Hello Friend!</h3>
                            <p className="text-[16px] text-center lg:text-2xl text-[#DADADA]">Please provide the <br />
                                information's to register <br />
                                your account</p>
                            <p className="text-center">Already have an account! Sign in</p>
                            <button onClick={() => toggle(false)} className="p-7 py-3 border">
                                Sign in
                            </button>
                        </div>
                    </LoginStyle.RightOverlayPanel>

                </LoginStyle.Overlay>
            </LoginStyle.OverlayContainer>

        </LoginStyle.Container>
    )
}

export default LoginPopUp
