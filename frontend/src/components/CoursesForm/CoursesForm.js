import React from "react";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import "./CoursesForm.css";
import BannerTitle from "../BannerTitle/BannerTitle";

const CoursesForm = () => {
  return (
    <div className="d-flex justify-content-center courseForm">
      <Form style={{ width: "50%" }}>
        <Form.Row>
          <Form.Group as={Col}>
            <BannerTitle title="Courses" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="formCourseName" style={{ width: "100%" }}>
            <Form.Label className="d-flex justify-content-start">
              Course Name
            </Form.Label>
            <Form.Control type="text" placeholder="Augusta National" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formStreetAddress">
            <Form.Label className="d-flex justify-content-start">
              Street Address
            </Form.Label>
            <Form.Control type="text" placeholder="1234 Main St." />
          </Form.Group>
          <Form.Group as={Col} controlId="formState">
            <Form.Label className="d-flex justify-content-start">
              State
            </Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2 inlineFormCustomSelect"
              custom
            >
              <option value="0">State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formNotes">
            <Form.Label className="d-flex justify-content-start">
              Notes
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Beautiful course!"
            />
          </Form.Group>
        </Form.Row>
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CoursesForm;
