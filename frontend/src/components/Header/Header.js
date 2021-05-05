import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <i class="fad fa-golf-ball" style={{ marginRight: "10px" }}></i>Golf
        Tracker
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
