import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbarnew.css"; // Import the CSS file for styling

const MainNavbar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo">Computer Seekho</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-list">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown title="Placement" id="placement-dropdown">
              <NavDropdown.Item as={Link} to="/batchwise-placement">Batchwise Placement</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/our-recruiters">Our Recruiters</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Courses" id="courses-dropdown">
              <NavDropdown.Item as={Link} to="/pg-dac">PG-DAC</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pg-dbda">PG-DBDA</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pre-cat">PRE-CAT</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/campuslife">Campus Life</Nav.Link>
            <Nav.Link as={Link} to="/faculty">Faculty</Nav.Link>
            <Nav.Link as={Link} to="/getintouch">Get In Touch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;