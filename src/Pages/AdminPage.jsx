import React,{useEffect} from 'react'
import { Row, Col, Container, ButtonGroup, Button } from "react-bootstrap"
import { useSelector} from "react-redux"
import AddNewPizzasAdmin from '../components/admin/AddNewPizzasAdmin';
import OrderListAdmin from '../components/admin/OrderListAdmin';
import PizzasListAdmin from '../components/admin/PizzasListAdmin';
import UserLisAdmint from '../components/admin/UserLisAdmint';
import {Switch , Route} from "react-router-dom"


const AdminPage = ({ history }) => {
    
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
   console.log(currentUser);

    
    useEffect(() => {
        if (
          localStorage.getItem("currentUser") === null ||
          !currentUser.isAdimn
        ) {
          window.location.href = "/";
        }
    },[])
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p2">Admin Dashboard</h1>
          <Col md={4}>
            <ButtonGroup vertical style={{ minHeight: "250px" }}>
              <Button
                onClick={() => history.push("/admin/userlist")}
                className="mb-2"
              >
                All Users
              </Button>
              <Button
                onClick={() => history.push("/admin/pizzalist")}
                variant="success"
                className="mb-2"
              >
                All Pizzas
              </Button>
              <Button
                onClick={() => history.push("/admin/addnewpizza")}
                variant="info"
                className="mb-2"
              >
                Add Pizzas
              </Button>
              <Button
                onClick={() => history.push("/admin/orderlist")}
                variant="warning"
                className="mb-2"
              >
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={8}>
            <Switch>
              <Route path="/admin" component={UserLisAdmint} exact />
              <Route
                path="/admin/addnewpizza"
                component={AddNewPizzasAdmin}
                exact
              />
              <Route path="/admin/orderlist" component={OrderListAdmin} exact />
              <Route
                path="/admin/pizzalist"
                component={PizzasListAdmin}
                exact
              />
              <Route path="/admin/userlist" component={UserLisAdmint} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminPage