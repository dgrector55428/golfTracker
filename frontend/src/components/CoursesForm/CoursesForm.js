import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./CoursesForm.css";

const CoursesForm = () => {
  return (
    <div className="d-flex justify-content-center courseForm">
      <Form style={{ width: "50%" }}>
        <Form.Group controlId="formCourseName">
          <Form.Label className="d-flex justify-content-start" size="lg">
            Course Name
          </Form.Label>
          <Form.Control type="text" placeholder="Augusta National" size="lg" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="formStreetAddress">
              <Form.Label className="d-flex justify-content-start" size="lg">
                Street Address
              </Form.Label>
              <Form.Control type="text" placeholder="1234 Main St." size="lg" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formState">
              <Form.Label className="d-flex justify-content-start" size="lg">
                State
              </Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0">State</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="info" type="submit" size="lg">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CoursesForm;
