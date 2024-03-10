import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page1() {
  const [user, setUser] = useState(null); // Holds the fetched user data
  const [error, setError] = useState(''); // Holds any error messages

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token'); // Retrieve the stored JWT token
      if (!token) {
        setError('No session token found. Please log in.'); // Set an error if the token is missing
        return;
      }

      try {
        const response = await axios.get('http://localhost:5050/user-data', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });

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
        <p>{error}</p>
      ) : user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <p>Email: {user.email}</p>
          <p>Interests: {user.interests?.join(', ')}</p>
          <p>About Me: {user.aboutme || 'No additional information provided.'}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
