import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const CourseEntryPage = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const [username, setUsername] = useState("");
    const [course, setCourse] = useState('');
    const [data, setData] = useState('');
  
    useEffect(() => {
      axios.get(`/api/details/${name}`)
        .then(response => setCourse(response.data.language.name))
        .catch(error => console.error('Error fetching course details:', error));
    }, [name]);
  
    
    
    if (!course) {
      return <div>Loading...</div>;
    }

    const handleSubmit = async () => {
        try {
          console.log('Before axios.post');
          const response = await axios.post("/api/course_data_entry", { course, username });
          console.log('Response:', response);
          setData(response.data.message);
          navigate("/courses");
        } catch (error) {
          console.error("Error:", error);
        }
      };
      

    return (
    <Container className="mt-5">
        <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form autoComplete="off">
            <Form.Group controlId="formEmail">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={course}
              />
            </Form.Group>

            <Form.Group controlId="formUsername">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
              />
            </Form.Group>


            <Button
              variant="primary"
              onClick={() => {
                handleSubmit();
                // handleValidate();
              }}
              style={{ marginTop: "10px", width: "100%" }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
