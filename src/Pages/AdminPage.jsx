import React from 'react'
import {Row , Col , Container, ButtonGroup, Button} from "react-bootstrap"

const AdminPage = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className='text-center bg-dark text-light p2'>Admin Dashboard</h1>
          <Col md={4}>
            <ButtonGroup vertical style={{minHeight:"250px"}}>
              <Button className='mb-2' >All Users</Button>
              <Button variant='success' className='mb-2'>All Pizzas</Button>
              <Button variant='info' className='mb-2'>Add Pizzas</Button>
              <Button variant="warning" className='mb-2'>All Orders</Button>
            </ButtonGroup>
          </Col>
          <Col md={8}></Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminPage