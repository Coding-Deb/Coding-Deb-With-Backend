import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

import "../common.css";

export const TopBar = ({checklog}) => {
  const imageStyle = {
    opacity: 0.7,
  };

  const [username, setUsername] = useState('');
  // const userId = '654f72890dc4edf61fc03d4a'; // Replace with the actual user ID after login

  // useEffect(() => {
  //   const fetchUsername = async () => {
  //     try {
  //       const response = await fetch(`/api/get_username/${userId}`);
  //       const data = await response.json();

  //       if (response.ok) {
  //         setUsername(data.username);
  //       } else {
  //         console.error(data.message);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching username:', error);
  //     }
  //   };

  //   fetchUsername();
  // }, [userId]);

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <h2 style={{ color: "white" }}>Coding Deb</h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {
          checklog ? 
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/courses">
              <h5>Courses</h5>
            </Nav.Link>
            

            <Nav.Link as={Link} to="/about">
              <h5>About</h5>
            </Nav.Link>
            <Nav.Link as={Link} to="/chats">
              <h5>Chat</h5>
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/dashboard">
                Dashboard
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/Login">
                Log In
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Register">
                Register
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/Logout">
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
      :
      null  
      }
      </Container>
    </Navbar>
  );
};
