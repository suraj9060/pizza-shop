import React from 'react'
// import AllPizza from "../pizza-data"
import{useDispatch , useSelector} from "react-redux"
import Pizza from '../components/Pizza'
import {Container , Row , Col} from "react-bootstrap"
import { useEffect } from 'react'
import { getAllPizzas } from "../Redux/actions/action.jsx"
import Loader from '../components/Loader'
import Error from '../components/Error'
// import {getAllPizzaReducer} from "../Redux/reducers/reducers"
const HomePage = () => {
    const dispatch = useDispatch();
    const allState = useSelector((state) => state.getAllPizzaReducer);
    console.log(allState)

    useEffect(() => {
       dispatch(getAllPizzas())
    }, [dispatch])

        const { loading, pizzas, error } = allState;
    // console.log(loading);
    // console.log(pizzas)
    // console.log(error)
    
  return (
    <>
      <Container>
              {
                  loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <Row>
            {pizzas.map((pizza) => {
              return (
                <Col md={4}>
                  <Pizza pizza={pizza} />
                </Col>
              );
            })}
          </Row>
              )
              }
      </Container>
    </>
  );
}

export default HomePage