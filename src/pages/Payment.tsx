import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/Form/CheckOutForm';
const stripePromise = loadStripe('pk_test_51JwnGrLiLwVG3jO00U7B3YmokwdPnB6FKd1uresJgkbsL4f5xUfCmbFdBaGO42KvLmLfVzsgo1oIQToXABSTyypS00xQsEgKZ6');

const Payment = (): React.JSX.Element => {
    return (
        <Elements stripe={stripePromise}>
            {/* <CheckoutForm /> */}
        </Elements>
    );
}

export default Payment
