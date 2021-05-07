import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <i
          class="fad fa-golf-ball"
          style={{ marginRight: "10px", fontSize: "30px" }}
        ></i>
        Golf Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="#login">Darren Rector</a>
        </Navbar.Text>
      </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Header;
