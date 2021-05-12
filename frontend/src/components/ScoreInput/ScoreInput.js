import React from "react";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import "./ScoreInput.css";
import BannerTitle from "../BannerTitle/BannerTitle";

const ScoreInput = () => {
  return (
    <div className="d-flex justify-content-center courseForm">
      <Form style={{ width: "70%" }}>
        <Form.Row>
          <Form.Group as={Col}>
            <BannerTitle title="Scores" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="parInputWrapper">
            <Form.Label className="d-flex justify-content-start">
              Par
            </Form.Label>
            <Form.Control className="parInput" type="text" placeholder="71" />
          </Form.Group>
          <Form.Group as={Col} controlId="scoreInputWrapper">
            <Form.Label className="d-flex justify-content-start">
              Score
            </Form.Label>
            <Form.Control
              className="scoreInput"
              type="text"
              placeholder="125"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="ddlHolesWrapper">
            <Form.Label className="d-flex justify-content-start">
              # of Holes
            </Form.Label>
            <Form.Control as="select" className="mr-sm-2 ddlHoles" custom>
              <option value="9">9</option>
              <option value="18">18</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="ddlCourseWrapper">
            <Form.Label className="d-flex justify-content-start">
              Course
            </Form.Label>
            <Form.Control as="select" className="mr-sm-2 ddlCourse" custom>
              <option value="0">Select Course</option>
              <option value="1">Baker National</option>
              <option value="2">New Hope Village</option>
              <option value="3">Rush Creek</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="ddlTodWrapper">
            <Form.Label className="d-flex justify-content-start">
              Time of Day
            </Form.Label>
            <Form.Control as="select" className="mr-sm-2 ddlTod" custom>
              <option value="0">Select Time of Day</option>
              <option value="1">Morning</option>
              <option value="2">Afternoon</option>
              <option value="3">Evening</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="scoreTempWrapper">
            <Form.Label className="d-flex justify-content-start">
              Temperature
            </Form.Label>
            <Form.Control className="tempInput" type="text" placeholder="80°" />
          </Form.Group>
          <Form.Group as={Col} controlId="windSpeedWrapper">
            <Form.Label className="d-flex justify-content-start">
              Wind Speed
            </Form.Label>
            <Form.Control
              className="windSpeedInput"
              type="text"
              placeholder="6 mph"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="windDirectionWrapper">
            <Form.Label className="d-flex justify-content-start">
              Wind Direction
            </Form.Label>
            <Form.Control
              className="windDirectionInput"
              type="text"
              placeholder="N"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <button className="btn btn-info submitScoreBtn">Submit</button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default ScoreInput;
