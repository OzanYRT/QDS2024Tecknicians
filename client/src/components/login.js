import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
import '../style/login.css'; // Import your CSS file
import newLogo from '../assets/images/logo.webp'; 

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5050/api/login', formData);
      console.log(response.data);
      login(); // Update login state
      navigate('/home');
    } catch (error) {
      console.error("Error logging in:", error.response.data);
    }
  };

  return (
    <div className="login-container">
      <div className="icon">
        <img src={newLogo} alt="logo" className="logo" />       
      </div>
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
