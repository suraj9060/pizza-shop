import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Error from '../components/Error';
import Loader from '../components/Loader';
import { getUserOrders } from '../Redux/actions/OrderAction'

const OrderPage = () => {
    const orderState = useSelector((state) => state.getUserOrdersReducer);
    const {loading , error , orders} = orderState
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserOrders())
    },[])
  return (
      <>
          <h1> Your Orders</h1>
          {loading && <Loader />}
          {error && <Error />}
          {orders && orders.map(order => (
              <Row>
                  <Col md={4}>
                      {
                          order.orderItems.map((item) => (
                              <h1>{ item.name}[{item.varient}]</h1>
                          ))
                      }
                  </Col>
              </Row>
          ))}
      </>
  )
}

export default OrderPage