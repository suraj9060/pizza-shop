import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Pizza = ({pizza}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pizza.image} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>{pizza.description}</Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Pizza