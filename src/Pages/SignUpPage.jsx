import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import {signInUser} from "../Redux/actions/UserAction"

const SignUpPage = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  
  const signUpState = useSelector((state) => state.signInUserReducer);
  const {error , success, loading} = signUpState
    
  const handleSignUp = (event) => {
       event.preventDefault(); 
        if (password !== conformPassword) {
            alert("password is wrong")
        } else {
            const user = { name, email, password, conformPassword };
            dispatch(signInUser(user))
        }
    setName("")
    setEmail("")
    setConformPassword("")
    setPassword("")
    };
  return (
    <>
      <Container>
        {loading && <Loader />}
        {success && <Success success="user added successfully" />}
        {error && <Error error="something went wrong" />}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Conform Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Conform Password"
              value={conformPassword}
              onChange={(e) => setConformPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary"  onClick={handleSignUp}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignUpPage;
