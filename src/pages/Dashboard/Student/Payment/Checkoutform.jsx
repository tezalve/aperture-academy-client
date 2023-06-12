import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSelectedclasses from '../../../../hooks/useSelectedclasses';

const Checkoutform = ({ selectedClass }) => {

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [, refetch] = useSelectedclasses();

    const [paymentDone, setPaymentDone] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        setPaymentDone(true);

    }

    if (paymentDone) {
        fetch(`http://localhost:5000/paymentdone/${selectedClass._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        fetch(`http://localhost:5000/updateseat/${selectedClass.class_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        refetch();
        refetch();
        toast.success(`Payment Complete`);
        navigate('/dashboard');
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default Checkoutform;