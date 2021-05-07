import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignInform = () => {
  return (
    <div>
      <Row className="mb-4">
        <Col size="sm" className="mb-3">
          <h1 style={{ color: "#d2d0d0" }}>Log In</h1>
        </Col>
      </Row>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control size="lg" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control size="lg" type="password" placeholder="Password" />
        </Form.Group>
        <Button className="mt-2" variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className="text-muted mt-5">
          <Link to="/register" style={{ fontSize: "20px", color: "#a9a9a9" }}>
            Don't have an account?
          </Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default SignInform;
