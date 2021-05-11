import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <i
          className="fad fa-golf-ball"
          style={{ marginRight: "10px", fontSize: "30px" }}
        ></i>
        Golf Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end mr-5">
        <Navbar.Text className="m-2">
          <Link to="/courses">Courses</Link>
        </Navbar.Text>
        <Navbar.Text className="m-2">
          <Link to="/scores">Scores</Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
