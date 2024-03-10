import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page1() {
  // State to hold user data
  const [user, setUser] = useState(null); // Changed to null for initial loading check

  // Effect hook to fetch user data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ensure this endpoint returns the aboutme field with the user data
        const response = await axios.get('http://localhost:5050/api/bigmonke@monke.com');
        setUser(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // Dependency array left empty to run once on mount

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <p>Email: {user.email}</p>
          <p>Interests: {user.interests?.join(', ')}</p>
          {/* Ensure "About Me" displays even if it's empty or not present */}
          <p>About Me: {user.aboutme || ''}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
