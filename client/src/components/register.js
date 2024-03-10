import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/register.css';


function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    interests: '',
    aboutme: '', // Include the aboutme field for formatted text
  });

  const navigate = useNavigate();

  // Handle change for input fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Preparing the data for API call
    // For aboutme as a formatted string, it's directly included in formData and sent as is
    try {
      const response = await axios.post('http://localhost:5050/api/register', formData);
      console.log(response.data);
      navigate('/login'); // Navigate to login page upon successful registration
    } catch (error) {
      console.error("Error registering:", error.response ? error.response.data : 'An error occurred');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
      <div className="form-group">
      <label htmlFor="username" className="form-label">Username:</label>
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
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Interests:</label>
          <input
            type="text"
            name="interests"
            placeholder="e.g., Music, Programming"
            value={formData.interests}
            onChange={handleChange}
            className="form-input"
          />
          <small>Separate interests with commas</small>
        </div>
        <div>
          <label>About Me:</label>
          <textarea
            name="aboutme"
            value={formData.aboutme}
            onChange={handleChange}
            rows="4"
            style={{ width: '100%' }}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
