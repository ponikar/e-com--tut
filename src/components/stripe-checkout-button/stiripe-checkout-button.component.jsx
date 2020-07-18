import React from 'react'


import StripeCheckOut from 'react-stripe-checkout'



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51H5tf3KXyyam2m8EwbwIBOUUmK58tsvX0xcCqvfVJI4g3GgZgo0yFvOKw4KkehzPtzA3ZQtxdqSNAGK2ITzgTZ7m00sOGhHtBS";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return(
        <StripeCheckOut
            label="Pay Now"
            name="E COM SITE"
            locale="in"
            shippingAddress
            billingAddress
            description={`Your total is $${price}`}
            panelLabel="Pay Now"
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}

         />
    )
}

export default StripeCheckoutButton;