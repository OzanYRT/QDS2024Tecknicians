import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page2() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    interests: [] // Changed to an array to match your data structure
  });

  const userEmail = 'bigmonke@monke.com';

  useEffect(() => {
    // Fetch user data and autofill the form
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/api/${encodeURIComponent(userEmail)}`);
        const { username, email, interests } = response.data;
        setFormData({
          username,
          email,
          interests: interests.join(', ') // Convert array to string for the input field
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userEmail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // For the interests field, we keep the data as a string for the input field
    if(name === "interests") {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare the data for the PUT request
      const updateData = {
        ...formData,
        interests: formData.interests.split(',').map(interest => interest.trim()) // Convert the string back to an array for the database
      };
      // Perform the PUT request to update the user
      const response = await axios.put(`http://localhost:5050/api/update/${encodeURIComponent(userEmail)}`, updateData);
      console.log(response.data);
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
            disabled // Email should not be editable
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
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}
