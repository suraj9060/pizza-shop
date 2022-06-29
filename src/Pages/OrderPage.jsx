import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Error from '../components/Error';
import Loader from '../components/Loader';
import { getUserOrders } from '../Redux/actions/OrderAction'

const OrderPage = () => {
    const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState
  console.log(orderState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserOrders())
    },[dispatch])
  return (
    <>
      <h1> Your Orders</h1>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {orders &&
        orders.map((order) => (
          <div className='container border p4 bg-light'>
            <Row>
              <Col md={4}>
                <h4>Items :</h4>
                {order?.orderItems?.map((item) => (
                  <div
                    className="container"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "#def5c9",
                    }}
                  >
                    <div>
                      <h6 key={item.name}>{item.name}</h6>
                      <h6>
                        {" "}
                        Size :- {item.varients} * {item.quantity}
                      </h6>
                      <h5>Total :- {item.price}</h5>
                    </div>
                    <div>
                      <img
                        src={item.image}
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </Col>
              <Col md={4}>
                <h4>Address</h4>
                <h6>Street :{order.shippingAddress.street}</h6>
                <h6>City :{order.shippingAddress.city}</h6>
                <h6>PinCoad :{order.shippingAddress.pincode}</h6>
                <h6>Countery :{order.shippingAddress.country}</h6>
              </Col>
              <Col md={4}>
                <h4>Order Info</h4>
                <h6>Order Amount : {order.orderAmount}</h6>
                <h6>Transection id : {order.transectionId}</h6>
              </Col>
            </Row>
          </div>
        ))}
    </>
  );
}

export default OrderPage