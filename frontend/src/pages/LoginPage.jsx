import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export const LoginPage = ({onLogin}) => {

  const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = () => {
      axios.post('/api/login', { email, password })
        .then(response => console.log(response.data))
        .catch(error => console.error('Error:', error));
      onLogin()
      navigate('/')
    };
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form autoComplete='off'>
            <h3>
              Login Page
            </h3>
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
                type="text"
                placeholder="Enter username"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
          <p style={{fontSize:15 , marginTop:'5px'}}>
            Don't have account? <strong> <Link to='/Register' style={{textDecoration:"none"}}> Register Here </Link> </strong>
          </p>
        </Col>
      </Row>
    </Container>
  )
}
