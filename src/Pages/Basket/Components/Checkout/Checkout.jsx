import React, { useEffect, useState } from "react";
import './style.scss';
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import Layout from "../../../../Components/Layout";
import { useStateContext } from "../../../../Context/Context";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { useLocation } from "react-router-dom";
import CustomSeparator from "../../../../Components/Breadcrumbs";

export default function Checkout() {
    const stripe = useStripe();
    const elements = useElements();
    const { user, theme } = useStateContext();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { state } = useLocation();

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "http://localhost:3000/basket",
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    return (
        <Layout>
            <div className='checkout'>
                <CustomSeparator steps={[
                    {title: 'Home', href: '/'},
                    {title: 'Basket', href: '/basket'},
                ]} currentStep={'Payment'} />
                {
                    user &&
                    <div className={theme === 'dark' ? "backgroundDark checkoutInfo" : "checkoutInfo"}>
                        <p className="checkoutInfoItem" ><PersonOutlineIcon color="info" /> <strong>Customer :</strong> <span>{user.displayName}</span></p>
                        <p className="checkoutInfoItem" ><EmailOutlinedIcon color="info" /> <strong>Email :</strong> {user.email}</p>
                        <p className="checkoutInfoItem" ><MonetizationOnOutlinedIcon color="info" /> <strong>Total Price :</strong> {state?.total}</p>
                    </div>
                }

                <form id="payment-form" onSubmit={handleSubmit}>
                    <PaymentElement id="payment-element" />
                    <button disabled={isLoading || !stripe || !elements} id="submit">
                        <span id="button-text">
                            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                        </span>
                    </button>
                    {/* Show any error or success messages */}
                    {message && <div id="payment-message">{message}</div>}
                </form>
            </div>

        </Layout>
    );
}