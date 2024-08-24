

import { Stripe, loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './Form/CheckOutForm';
import cards from '../assets/cards.webp'
const stripePromise = loadStripe('pk_live_5101x8BJesfjdiX0tXp52KU9YUXIBM50J81CrLtuWDEX6busAVDUHt1uWTOYDnJYKdY7Sp7FPHx9uARgoqjEpSg3K00581lNf7Z');
interface ChildProps {
    setPaymentStatus: (arg0: any) => void
    data: any
}
const Payment = ({ setPaymentStatus, data }: ChildProps) => {
    return (
        <div className="px-14 py-4 payment">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#555555]">Payment</h3>
            <div className="flex justify-center items-center mx-auto w-[200px] h-[120px] my-5 rounded-lg overflow-hidden">
                <img className="h-full w-full object-cover" src={cards} alt="" />
            </div>
            <p className='text-center text-2xl pb-4'>Personal Information</p>
                <Elements stripe={stripePromise}>
                    <CheckoutForm setPaymentStatus={setPaymentStatus} data={data} />
                </Elements>
        </div>
    )
}

export default Payment
