import React from 'react'
import { Row, Col, Container, ButtonGroup, Button } from "react-bootstrap"
import AddNewPizzasAdmin from '../components/admin/AddNewPizzasAdmin';
import OrderListAdmin from '../components/admin/OrderListAdmin';
import PizzasListAdmin from '../components/admin/PizzasListAdmin';
import UserLisAdmint from '../components/admin/UserLisAdmint';
import {Switch , Route} from "react-router-dom"

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
                  <Col md={8}>
                      <Switch>
                          <Route path="/admin/addnewpizza" component={AddNewPizzasAdmin} />
                          <Route path="/admin/orderlist" component={OrderListAdmin} />
                          <Route path="/admin/pizzalist" component={PizzasListAdmin} />
                          <Route path="/admin/userlist" component={UserLisAdmint} />
                      </Switch>    
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminPage