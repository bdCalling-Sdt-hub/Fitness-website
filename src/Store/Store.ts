import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../States/Authentication/loginSlice'
import SignUpSlice from '../States/Authentication/SignUpSlice';
import ForgatePasswordSlice from '../States/Authentication/ForgatePasswordSlice';
import VerifyCodeSlice from '../States/Authentication/VerifyCodeSlice';
import SetNewPassSlice from '../States/Authentication/SetNewPassSlice';
import ProfileSlice from '../States/Authentication/ProfileSlice';
import ChangePassSlice from '../States/Authentication/ChangePassSlice';
import EditProfileSlice from '../States/Authentication/EditProfileSlice';
import SubscriptionSlice from '../States/Subscription/SubscriptionSlice';
import ShopSlice from '../States/Shop/ShopSlice';
import ProductDetailsSlice from '../States/Shop/ProductDetailsSlice';
import AddToCartSlice from '../States/Cart/AddToCartSlice';
import GetToCartSlice from '../States/Cart/GetToCartSlice';
import GetAllSeriesSlice from '../States/Series/GetAllSeriesSlice';

export const Store = configureStore({
    reducer: {
        //authentication 
        login: loginSlice,
        signup: SignUpSlice,
        ForgtePass: ForgatePasswordSlice,
        VerifyCode: VerifyCodeSlice,
        SetNewPass: SetNewPassSlice,
        Profile: ProfileSlice,
        ChangePass: ChangePassSlice,
        EditProfile: EditProfileSlice,
        //subscription
        Subscription: SubscriptionSlice,
        // shop
        ShopItems: ShopSlice,
        SingleProduct: ProductDetailsSlice,
        //cart 
        AddToCart: AddToCartSlice,
        GetToCart: GetToCartSlice,
        //series
        GetAllSeries: GetAllSeriesSlice,
    },
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;