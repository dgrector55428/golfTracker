import React from "react";
import { Form, Container, Row, Button } from "react-bootstrap";
import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-1">
        <Form className="registerForm">
          <div className="registerFormHeader mb-5">
            <h2 className="registerFormTitle">
              Register
            </h2>
          </div>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput5">
            <Form.Label>Re-enter Password</Form.Label>
            <Form.Control type="password" placeholder="Re-enter Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="registerFormBtn">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default RegisterForm;
