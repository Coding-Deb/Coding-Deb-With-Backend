import React from "react";
// import "../common.css";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { FaComment, FaSearch } from "react-icons/fa";

export const HomePage = () => {
  return (
    <Row className="content_full" style={{ height: "100vh", margin: 0, padding: 0, backgroundColor: "green" }}>
      <div className="sidebar">
        <h2>Sidebar</h2>
        <p>Some sidebar content goes here.</p>
        
      </div>
      <div className="content">
        <h2>Main Content</h2>
        <p>Some main content goes here.</p>
      </div>
    </Row>
  );
};
