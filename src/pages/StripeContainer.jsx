import React from "react";
import Payment from "./Payment";
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
const PUBLIC_KEY= "pk_test_51PeWA82MRCbEFcWlcjtgBN1DQFtH3rOMyYi957vDfkm3yy7Bk3oe4xZjSA3T8kyllQFQC2697KEErBzicVppxEA200uHImS9qg";
const stripeTestPromise = loadStripe(PUBLIC_KEY);


export default function StripeContainer(){
    return(
        <Elements stripe={stripeTestPromise}>
         <Payment  />
        </Elements>
    )
}



