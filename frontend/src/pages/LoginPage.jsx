import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleSubmit = () => {
    if (email !== "" && password !== "") {
      axios
        .post("/api/login", { email, password })
        .then((response) => {
          setLoginStatus(response.data.message)
          navigate("/", { state: { loginStatus : response.data.message } });

        })
        .catch((error) => console.error("Error:", error));
      onLogin();
    } else {
      navigate("/Login");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form autoComplete="off">
            <h3>Login Page</h3>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password" // Change type to password
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={handleSubmit}
              style={{
                marginTop: "10px",
                width: "100%", // Make the button full width
              }}
            >
              Submit
            </Button>
          </Form>
          <p style={{ fontSize: 15, marginTop: "5px" }}>
            Don't have an account?{" "}
            <strong>
              {" "}
              <Link to="/Register" style={{ textDecoration: "none" }}>
                {" "}
                Register Here{" "}
              </Link>{" "}
            </strong>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
