import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Checkoutform from './Checkoutform';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const selectedClass = useLoaderData();
    console.log(selectedClass);
    return (
        <div>
            pay
            <Elements stripe={stripePromise}>
                <Checkoutform selectedClass={selectedClass}></Checkoutform>
            </Elements>
        </div>
    );
};

export default Payment;