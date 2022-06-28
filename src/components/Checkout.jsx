import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../Redux/actions/OrderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";

const Checkout = ({ subTotal }) => {
  const orderStatus = useSelector((state) => state.PlaceOrderReducer);
  const { loading, error, success } = orderStatus;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {success && <Success />}

      <StripeCheckout
        amount={subTotal * 1000}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51LFIGAKqrH31VSJTBUD1OvFkjtdmkV638spGzzSjHwncsw1km7JU9hrTS5sW4M3GjHHoJux6CSnezfuJf5f9wp6x00SOeMDu28"
        currency="USD"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
