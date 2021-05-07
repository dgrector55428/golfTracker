import React from "react";
import { Form } from "react-bootstrap";

const ScoreInputForm = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Course</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Temperature</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Wind</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Time</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" />
        </Form.Group>
      </Form>
    </>
  );
};

export default ScoreInputForm;
