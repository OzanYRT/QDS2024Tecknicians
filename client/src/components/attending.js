import React, { useState, useEffect } from 'react';
import scholarshipsData from '../data/scholarships.json';
import axios from 'axios';
import ScholarshipCard from './scholarshipCard';
// import '../style/attending.css'; // Assuming you create an Attending.css for this component

export default function Attending() {
  const [userScholarships, setUserScholarships] = useState([]);

  useEffect(() => {
    const fetchUserScholarships = async () => {
      try {
        const userEmail = localStorage.getItem('email');
        const response = await axios.get(`http://localhost:5050/api/scholarships/${userEmail}`);
        const userScholarshipsNames = response.data;

        const matchedScholarships = scholarshipsData.filter(scholarship =>
          userScholarshipsNames.includes(scholarship.name)
        );

        setUserScholarships(matchedScholarships);
      } catch (error) {
        console.error('Error fetching user scholarships:', error);
      }
    };

    fetchUserScholarships();
  }, []);

  return (
    <div className="scholarships-container">
      {userScholarships.map(scholarship => (
        <ScholarshipCard key={scholarship.name} scholarship={scholarship} />
      ))}
    </div>
  );
}
