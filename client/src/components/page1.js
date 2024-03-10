import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/page1.css"; 


const hashCode = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const character = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + character;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const stringToColor = str => {
  const hash = hashCode(str);
  const hue = hash % 360; // Get a hue value between 0 and 359
  return `hsl(${hue}, 50%, 60%)`; // Return HSL color string with 60% saturation and 80% lightness for a pastel look
};



export default function Page1() {
  const [user, setUser] = useState(null); // Holds the fetched user data
  const [error, setError] = useState(''); // Holds any error messages

  useEffect(() => {
    const fetchData = async () => {
      // Retrieve the email from localStorage
      const email = localStorage.getItem('email');
      if (!email) {
        setError('No email found. Please log in.'); // Set an error if the email is missing
        return;
      }

      try {
        // Fetch user data by email
        const response = await axios.get(`http://localhost:5050/api/${email}`);
        setUser(response.data); // Update state with fetched user data
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data. Please try again.'); // Set an error if fetching fails
      }
    };

    fetchData();
  }, []);

  // Render user data or appropriate message based on the state
  return (
    <div>
      {error ? (
        <p className="message">{error}</p>
      ) : user ? (
        <div className="user-details-card">
          <h1>Welcome, {user.username}</h1>
          <p>Email: {user.email}</p>
          <div className="interests-container">
            {user.interests?.map((interest, index) => (
              <span 
                key={index} 
                className="interest-tag"
                style={{
                  backgroundColor: stringToColor(interest),
                  color: 'white', 
                  border: '1px solid black'
                }}
              >
                {interest}
              </span>
            ))}
          </div>
          <p>About Me: 
            <br></br>
            {user.aboutme || 'No additional information provided.'}</p>
        </div>
      ) : (
        <p className="message">Loading user data...</p>
      )}
    </div>
  )};