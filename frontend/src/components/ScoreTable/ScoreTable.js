import React from "react";
import { Table } from "react-bootstrap";
import "./ScoreTable.css";

const ScoreTable = () => {
  return (
    <div className="d-flex justify-content-center" id="scoreTblWrapper">
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
            <th>Date</th>
            <th>Par</th>
            <th>Score</th>
            <th>Course</th>
            <th># of Holes</th>
            <th>Time of Day</th>
            <th>Temperature</th>
            <th>Wind Speed(mph)</th>
            <th>Wind Direction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>05/25/2020</td>
            <td>71</td>
            <td>125</td>
            <td>Baker National</td>
            <td>18</td>
            <td>Afternoon</td>
            <td>82°</td>
            <td>10</td>
            <td>N</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ScoreTable;
