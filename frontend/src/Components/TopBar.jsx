import React from "react";
import { Container, Navbar, Nav, NavDropdown, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

import "../common.css";

export const TopBar = () => {
  const imageStyle = {
    opacity: 0.7,
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <h2 style={{ color: "white" }}>Coding Deb</h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/courses">
              <h5>Courses</h5>
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              <h5>About</h5>
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/dashboard">
                Dashboard
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/account">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form inline>
            <Row className="align-items-center">
              <Col xs="auto" className="mb-2 mb-md-0">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 p-2 m-lg-1"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" className="btn">
                  <h6 className="btn_txt">Search</h6>
                </Button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
