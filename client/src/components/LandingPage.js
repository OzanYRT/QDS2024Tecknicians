import React from "react";
import { Link } from "react-router-dom";
import "../style/LandingPage.css"; 
import newLogo from '../assets/images/glow_6.png'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="icon">
        <img src={newLogo} alt="logo" className="logo" />
      </div>
      <div>
        <Link to="/login" className="btn btn-primary btn-custom">Login</Link>
        <Link to="/register" className="btn btn-secondary btn-custom">Register</Link>
      </div>
    </div>
  );
};

export default LandingPage;
