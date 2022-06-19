import React from 'react'
import AllPizza from "../pizza-data"
import Pizza from '../components/Pizza'
import {Container , Row , Col} from "react-bootstrap"
const HomePage = () => {
  return (
      <>
          <Container>
              <Row>
                  {
                      AllPizza.map(pizza => {
                          return <Col md={4}>
                              <Pizza pizza={pizza} />
                          </Col>
                      })
                  }
              </Row>
          </Container>
      </>
  )
}

export default HomePage