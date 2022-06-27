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
      amount={subTotal * 1000}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51LFIGAKqrH31VSJTBUD1OvFkjtdmkV638spGzzSjHwncsw1km7JU9hrTS5sW4M3GjHHoJux6CSnezfuJf5f9wp6x00SOeMDu28"
      currency="USD"
    >
      <Button>Pay Now</Button>
    </StripeCheckout>
  );
};

export default Checkout;
