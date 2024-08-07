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
import GetAllProgramSlice from '../States/Program/GetAllProgramSlice';
import SingleProgramSlice from '../States/Program/SingleProgramSlice';
import GetAllBlogSlice from '../States/Blog/GetAllBlogSlice';
import GetSingleBlogSlice from '../States/Blog/GetSingleBlogSlice';
import GetAllOrderSlice from '../States/Order/GetAllOrderSlice';
import GetAllFeedbackSlice from '../States/FeedBack/GetAllFeedbackSlice';
import putFeedbackSlice from '../States/FeedBack/putFeedbackSlice';
import PrivecyPolicySlice from '../States/PrivecyPolicy/PrivecyPolicySlice';
import GetAllContactSlice from '../States/Contact/GetAllContactSlice';
import SentContactMessageSlice from '../States/Contact/SentContactMessageSlice';
import GetAboutContentSlice from '../States/About/GetAboutContentSlice';
import TermsConditionsSlice from '../States/TermsConditions/TermsConditionsSlice';
import PaymentIntantSlice from '../States/Payment/PaymentIntantSlice';
import PlaceOrderSlice from '../States/Order/PlaceOrderSlice';
import BuyPlanSlice from '../States/Subscription/BuyPlanSlice';
import GetMySubscriptionSlice from '../States/Subscription/GetMySubscriptionSlice';
import BannerDataSlice from '../States/Banner/BannerDataSlice';
import AddCommentSlice from '../States/Comments/AddCommentSlice';
import GetAllCommentSlice from '../States/Comments/GetAllCommentSlice';
import AddReplaySlice from '../States/Comments/AddReplaySlice';
import GetFAQSlice from '../States/FAQ/GetFAQSlice';
import DeleteCartSlice from '../States/Cart/DeleteCartSlice';

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
        BuyPlan: BuyPlanSlice,
        GetMySubscription: GetMySubscriptionSlice,
        // shop
        ShopItems: ShopSlice,
        SingleProduct: ProductDetailsSlice,
        //cart 
        AddToCart: AddToCartSlice,
        GetToCart: GetToCartSlice,
        DeleteCart:DeleteCartSlice,
        //order
        GetAllOrder: GetAllOrderSlice,
        PlaceOrder: PlaceOrderSlice,
        //series
        GetAllSeries: GetAllSeriesSlice,
        //program
        GetAllProgram: GetAllProgramSlice,
        SingleProgram: SingleProgramSlice,
        //blog
        GetAllBlog: GetAllBlogSlice,
        SingleBlog: GetSingleBlogSlice,
        //feedback 
        GetAllFeedback: GetAllFeedbackSlice,
        putFeedback: putFeedbackSlice,
        //privecy policy 
        PrivecyPolicy: PrivecyPolicySlice,
        // contact 
        GetAllContact: GetAllContactSlice,
        SentContact: SentContactMessageSlice,
        //about
        GetAboutContent: GetAboutContentSlice,
        //trams and condition  
        TermsConditions: TermsConditionsSlice,
        // payment intant 
        PaymentIntant: PaymentIntantSlice,
        //baner
        GetBannerData: BannerDataSlice,
        //comment
        AddComment: AddCommentSlice,
        GetAllComment: GetAllCommentSlice,
        AddReplay: AddReplaySlice,
        //faq
        GetFAQ: GetFAQSlice,

    },
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;