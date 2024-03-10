import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page1() {
  // State to hold user data
  const [user, setUser] = useState(null);

  // Effect hook to fetch user data on component mount
  useEffect(() => {
    // Update the URL in axios.get call to match your API endpoint structure
    // Here, it is assumed your endpoint URL might look something like this
    const fetchData = async () => {
      try {
        // Make sure the URL is correct and matches your server's endpoint
        const response = await axios.get('http://localhost:5050/api/bigmonke@monke.com');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <p>Email: {user.email}</p>
          <p>Interests: {user.interests.join(', ')}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
