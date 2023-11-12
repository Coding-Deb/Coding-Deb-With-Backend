import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa"; // Import the icons you want to use
import { Link } from "react-router-dom";
export const AboutPage = () => {
  const containerStyle = {
    background: "linear-gradient(45deg, #3494E6, #EC6EAD)",
    minHeight: "100vh",
    // display: "flex",
    
    // alignItems: "center",
    // padding:"25px",
    // marginTop:"40px"
  };
  return (
    <div style={containerStyle}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="m-4">
          <h4>
            About Us
          </h4>
          </Navbar.Brand>
      </Navbar>

      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center mb-4">About Us</h2>
            <p>
              Welcome to our website dedicated to learning coding languages with
              <strong className="text-primary"> @Coding_Deb</strong>.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-dark text-white py-4">
        <footer>
          <Row className="text-center">
            <Col md={4}>
              <h3>Contact Us</h3>
              <div className="mb-3">
                <FaPhone size={24} /> +1-123-456-7890
              </div>
              <div className="mb-3">
                <FaEnvelope size={24} /> info@example.com
              </div>
              <div>
                <FaMapMarker size={24} /> 123 Main St, City, Country
              </div>
            </Col>
            <Col md={4}>
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <Link to="/home" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h3>Follow Us</h3>
              <div>
                <Link to="#" className="text-white me-2">
                  Facebook
                </Link>
                <Link to="#" className="text-white me-2">
                  Twitter
                </Link>
                <Link to="#" className="text-white me-2">
                  Instagram
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              &copy; {new Date().getFullYear()} Coding Deb
            </Col>
          </Row>
        </footer>
      </Container>
    </div>
  );
}
