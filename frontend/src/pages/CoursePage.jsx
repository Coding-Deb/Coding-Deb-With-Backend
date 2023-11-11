import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export const CoursePage = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios.get('/api/data') // Assuming your Express server is running on the same host
      .then(response => setCourses(response.data.programming_languages))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {courses.map((item, index) => (
          <Col key={index} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.year_created}
                </Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>
                  <h6> Code: </h6> {item.example_code}
                </Card.Text>
                <Button onClick={() => navigate(`/coursedetails/${item.name}`)}>
                  Enroll Here
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
