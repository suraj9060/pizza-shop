import React from 'react'
import {Container , Row ,  Col} from "react-bootstrap"

const About = () => {
  return (
    <>
      <Container style={{marginTop:50}}>
        <h1>Who We Are ?</h1>
        <p>
          Pizza shop owners need more ways to increase orders and keep customers
          coming back, and a direct line of communication can drastically help.
          Business texting can close the gap between you and your customers by
          allowing them to text you when they have questions, want to place an
          order, or follow up on an order. Texting enables you to effortlessly
          communicate with your customers, ultimately helping you increase your
          pizza sales. Text message marketing is also a cost-effective way to
          promote your specials and entice new customers to try your pizza.
          Wondering how exactly you can implement texting in your pizza
          marketing strategy? Here are five ways to do it.
        </p>
        <h1>Our Speciality</h1>

        <Row>
          <Col md={6}>
            Pizza shop owners need more ways to increase orders and keep
            customers coming back, and a direct line of communication can
            drastically help. Business texting can close the gap between you and
            your customers by allowing them to text you when they have
            questions, want to place an order, or follow up on an order. Texting
            enables you to effortlessly communicate with your customers
          </Col>
          <Col md={6}>
            Pizza shop owners need more ways to increase orders and keep
            customers coming back, and a direct line of communication can
            drastically help. Business texting can close the gap between you and
            your customers by allowing them to text you when they have
            questions, want to place an order, or follow up on an order. Texting
            enables you to effortlessly communicate with your customers
          </Col>
        </Row>
              <Row>
                  <h1>Our cheif </h1>
          <Col md={3}>
            {" "}
            Pizza shop owners need more ways to increase orders and keep
            customers coming back, and a direct line of communication can
            drastically help. Business texting can close the gap between you and
            your customers by allowing them
          </Col>
          <Col md={3}>
            {" "}
            Pizza shop owners need more ways to increase orders and keep
            customers coming back, and a direct line of communication can
            drastically help. Business texting can close the gap between you and
            your customers by allowing them
          </Col>
          <Col md={3}>
            {" "}
            Pizza shop owners need more ways to increase orders and keep
            customers coming back, and a direct line of communication can
            drastically help. Business texting can close the gap between you and
            your customers by allowing them
          </Col>
          <Col md={3}>
            {" "}
            Pizza shop owners need more ways to increase orders and keep
            customers coming back, and a direct line of communication can
            drastically help. Business texting can close the gap between you and
            your customers by allowing them
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About