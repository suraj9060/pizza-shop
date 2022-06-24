import React from 'react'
import { Button } from 'react-bootstrap'
import StripeCheckout from "react-stripe-checkout"

const Checkout = ({ subtotal }) => {
    const tokenHandler = (token) => {
        console.log(token)
    }
  return (
    <StripeCheckout
      amount={subtotal * 100}
      shippingAddress
      token={tokenHandler}
          stripeKey="pk_test_51Kcr9sSEQ8dEgDMHTr7VRUrUfUwqpa2pTF4YN66BOZ46AcOGD0mrZKpW1ikuKZ86sTKah2klgNGyJ7On0dUs2ZH200gBAtbsUf"
          currency='INR'
    >
      <Button>Pay Now</Button>
    </StripeCheckout>
  );
}

export default Checkout