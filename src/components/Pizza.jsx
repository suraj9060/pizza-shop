import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quentity, setQuentity] = useState(1);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pizza.image} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select
                  onChange={(e) => setVarient(e.target.value)}
                  value={varient}
                >
                  {pizza.varients.map((item) => {
                    return <option>{item}</option>;
                  })}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select onChange={(e) => setQuentity(e.target.value)}>
                  {[...Array(5).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price : {pizza.prices[0][varient] * quentity}</Col>
            <Col md={6}>
              
              <Button variant="primary">Add To Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pizza;
