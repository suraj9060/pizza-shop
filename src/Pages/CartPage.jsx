import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { addToCart } from '../Redux/actions/cartAction';
const CartPage = () => {
    const dispatch = useDispatch()    
    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems
    // console.log(cartItems.varients[0]);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Cart Items</h1>
          <Row>
            {cartItems.map((item) => (
              <>
                <div
                  style={{
                    border: "2px solid black",
                    display: "flex",
                    margin: "2px 0",
                    borderRadius: "2px 30px 2px 30px",
                    alignItems: "center",
                  }}
                >
                  <Col md={7}>
                    <h5>{item.name}</h5>
                    <h6>
                      Price :{item.quantity} X {item.prices[0][item.varients]} =
                      {item.price}
                    </h6>
                    <h6
                      style={{
                        border: "3px solid red",
                        width: "160px",
                        padding: "10px",
                        borderRadius: "0 10px 0 10px",
                      }}
                    >
                      Quantity :{" "}
                      <BsArrowLeftCircle
                        style={{ cursor: "pointer", margin: "5px 0px" }}
                        className="text-danger"
                        onClick={() =>
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varients)
                          )
                        }
                      />{" "}
                      {item.quantity}{" "}
                      <BsArrowRightCircle
                        style={{ cursor: "pointer", margin: "2px 0px" }}
                        className="text-success"
                        onClick={() =>
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varients)
                          )
                        }
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "5px 0",
                      }}
                    />
                  </Col>
                </div>
              </>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <h1>Payment Info</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage