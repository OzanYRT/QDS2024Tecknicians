import React, { useState, useEffect } from 'react';
import scholarshipsData from '../data/scholarships.json';
import axios from 'axios';
import ScholarshipCard from './scholarshipCard';

export default function Attending() {
  const [userScholarships, setUserScholarships] = useState([]);

  useEffect(() => {
    const fetchUserScholarships = async () => {
      try {
        // Assuming email is stored in localStorage for simplicity
        const userEmail = localStorage.getItem('email');
        const response = await axios.get(`http://localhost:5050/api/scholarships/${userEmail}`);
        const userScholarshipsNames = response.data;

        console.log('userScholarshipsNames:', userScholarshipsNames);

        // Filter the local JSON data to find matches
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
    <div>
      {userScholarships.map(scholarship => (
        <ScholarshipCard key={scholarship.name} scholarship={scholarship} />
      ))}
    </div>
  );
}
