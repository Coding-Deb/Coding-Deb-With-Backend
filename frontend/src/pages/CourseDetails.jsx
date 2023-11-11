import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../common.css'; // Import a CSS file for styling

export const CourseDetails = () => {
  const { name } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`/api/details/${name}`)
      .then(response => setCourse(response.data.language))
      .catch(error => console.error('Error fetching course details:', error));
  }, [name]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-details-container">
      <h1>Course Details Page - {course.name}</h1>
      <p>Description: {course.description}</p>
      <p>Year Created: {course.year_created}</p>
      {/* Add more details as needed */}
    </div>
  );
};
