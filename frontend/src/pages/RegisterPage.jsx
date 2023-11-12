import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const RegisterPage = ({ onReg }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [regStatus, setRegStatus] = useState("");

  const [valid, setvalid] = useState(false);

  const handleSubmit = () => {
    if (
      email !== "" &&
      password !== "" &&
      cpassword !== "" &&
      username !== ""
    ) {
      setTimeout(() => {
        axios
          .post("/api/register", { email, username, password, cpassword })
          .then((response) => {
            setRegStatus(response.data.message);
            navigate("/Login",{ state: { loginStatus : response.data.message } });
          })
          .catch((error) => console.error("Error:", error));
      }, 2000);

      setEmail("");
      setUsername("");
      setPassword("");
      setCpassword("");
      onReg();
    } else {
      navigate("/Register");
    }
  };

  const handleValidate = async () => {
    try {
      await axios.post("/api/validate", { username, email, password });
      console.log("User validated successfully");
      setvalid(true);
    } catch (error) {
      console.error("Invalid credentials:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form autoComplete="off">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formCPassword">
              <Form.Label>Confirm Your Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Your Password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => {
                handleSubmit();
                handleValidate();
              }}
              style={{ marginTop: "10px", width: "100%" }}
            >
              Submit
            </Button>
          </Form>
          {valid ? (
            <Alert style={{ backgroundColor: "lightseagreen" }}>
              <h5 style={{ color: "green" }}>Already Exists</h5>
            </Alert>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};
