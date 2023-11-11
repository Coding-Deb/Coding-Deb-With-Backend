import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export const RegisterPage = ({onReg}) => {
  const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
  
    const handleSubmit = () => {
      axios.post('/api/register', { email, username, password,cpassword })
        .then(response => console.log(response.data))
        .catch(error => console.error('Error:', error));

        setEmail('');
      setUsername('');
      setPassword('');
      setCpassword('');
        onReg()
        navigate('/Login')
    };
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form autoComplete='off'>
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
                type="text"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formCPassword">
              <Form.Label>Conform Your Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Conform Your Password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
