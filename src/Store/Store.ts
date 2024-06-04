import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../States/Authentication/loginSlice'
import SignUpSlice from '../States/Authentication/SignUpSlice';
import ForgatePasswordSlice from '../States/Authentication/ForgatePasswordSlice';
import VerifyCodeSlice from '../States/Authentication/VerifyCodeSlice';
import SetNewPassSlice from '../States/Authentication/SetNewPassSlice';
import ProfileSlice from '../States/Authentication/ProfileSlice';

export const Store = configureStore({
    reducer: {
        //authentication 
        login: loginSlice,
        signup:SignUpSlice,
        ForgtePass : ForgatePasswordSlice,
        VerifyCode:VerifyCodeSlice,
        SetNewPass:SetNewPassSlice,
        Profile:ProfileSlice,
    },
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;