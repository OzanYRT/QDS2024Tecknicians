import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page2() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    interests: '', // Keep as a string to simplify editing
    aboutme: '', // Adding the aboutme field
  });

  const userEmail = 'bigmonke@monke.com';

  useEffect(() => {
    // Fetch user data and autofill the form
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/api/${encodeURIComponent(userEmail)}`);
        const { username, email, interests, aboutme } = response.data;
        setFormData({
          username,
          email,
          interests: interests.join(', '), // Convert array to string for the input field
          aboutme, // Autofill the aboutme field
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userEmail]); // Fetch user data once on component mount

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare the data for the PUT request, converting interests back to an array
      const updateData = {
        ...formData,
        interests: formData.interests.split(',').map(interest => interest.trim()), // Convert the string back to an array for the database
      };
      // Perform the PUT request to update the user
      await axios.put(`http://localhost:5050/api/update/${encodeURIComponent(userEmail)}`, updateData);
      alert('User updated successfully');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled // Email remains non-editable
          />
        </div>
        <div>
          <label>Interests:</label>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
          />
          <small>Separate interests with commas</small>
        </div>
        <div>
          <label>About Me:</label>
          <textarea // Use textarea for aboutme to allow multi-line input
            name="aboutme"
            value={formData.aboutme}
            onChange={handleChange}
            rows="4"
            style={{ width: '100%' }}
          ></textarea>
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}
