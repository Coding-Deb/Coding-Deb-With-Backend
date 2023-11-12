import React, { useEffect, useState } from "react";
// import "../common.css";
import { Container, Card, Row, Col, Button, Alert } from "react-bootstrap";
import { FaComment, FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const HomePage = () => {
  const location = useLocation();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  useEffect(() => {
    const loginStatus = location.state ? location.state.loginStatus : "";

    if (loginStatus) {
      setAlertMessage(loginStatus);
      setShowAlert(true);

      // Hide the alert after 3 seconds
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      // Clear the timeout when the component unmounts or when the alert is closed manually
      return () => clearTimeout(timeoutId);
    }
  }, [location.state]);
  return (
    <Row
      className="content_full"
      style={{
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "green",
      }}
    >
      <div className="sidebar">
        <h2>Sidebar</h2>
        <p>Some sidebar content goes here.</p>
        {showAlert && (
        <Alert
          variant="info"
          onClose={() => setShowAlert(false)}
          dismissible
          style={{position:"absolute"}}
        >
          {alertMessage}
        </Alert>
      )}
      </div>
      <div className="content">
        <h2>Main Content</h2>
        <p>Some main content goes here.</p>
      </div>
    </Row>
  );
};
