import React from "react";
import { Button, Card, Row, Col , Modal , Image} from "react-bootstrap";
import { useState } from "react";

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
    const [quentity, setQuentity] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "18rem", marginTop: "15px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "222px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <hr />
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

      {/* modle */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ width: "600px" }}>
            <Col md={6}>
              {" "}
              <Image
                src={pizza.image}
                style={{ width: "300px", height: "250px" }}
              />{" "}
            </Col>
            <Col md={6}>
              <h3>Size : {varient}</h3>
              <h3>Price : {pizza.prices[0][varient]}</h3>
              <h3>Qnt : {quentity}</h3>
              <h3>Total : {pizza.prices[0][varient] * quentity}</h3>
            </Col>
          </Row>
          <div>
            <h4>Description :</h4>
            <h5>{pizza.description}</h5>
          </div>
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default Pizza;
