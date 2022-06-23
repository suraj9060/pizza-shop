import React from "react";
// import Container from "react-bootstrap/Container";
import{ Nav , Container , NavDropdown} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Image } from "react-bootstrap"
import { logoutUser } from "../Redux/actions/UserAction";

const NavBar = () => {
 
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const {currentUser} = userState

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Image src="images/logo.png" alt="logo" style={{ height: 50 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/">
                  {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                  <NavDropdown title={currentUser.name}id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Order
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>dispatch(logoutUser())}>
                      Log Out
                    </NavDropdown.Item>
                   
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  <LinkContainer to="login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="signup">
                    <Nav.Link>Sign Up</Nav.Link>
                  </LinkContainer>
                </>
              )}

              <LinkContainer to="cart">
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
