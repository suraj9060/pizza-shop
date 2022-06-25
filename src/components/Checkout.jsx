import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../Redux/actions/OrderAction";

const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };

  return (
    <StripeCheckout
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51Kcr9sSEQ8dEgDMHTr7VRUrUfUwqpa2pTF4YN66BOZ46AcOGD0mrZKpW1ikuKZ86sTKah2klgNGyJ7On0dUs2ZH200gBAtbsUf"
      currency="INR"
    >
      <Button>Pay Now</Button>
    </StripeCheckout>
  );
};

export default Checkout;
