import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import "./CourseTable.css";

const CourseTable = () => {
  return (
    <div className="d-flex justify-content-center" id="coursesTblWrapper">
      <Table
        striped
        bordered
        hover
        variant="dark"
        className="mt-5"
        style={{ width: "75%" }}
      >
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Street Address</th>
            <th>City</th>
            <th>State</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Baker National</td>
            <td>2935 Parkview Dr</td>
            <td>Hamel</td>
            <td>Minnesota</td>
            <td>04/05/2020</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CourseTable;
