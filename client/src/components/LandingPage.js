import React from "react";
import { Link } from "react-router-dom";
import "../style/LandingPage.css"; // Assuming this is the correct path to your CSS file
import newLogo from '../assets/images/glow_6.png';


const LandingPage = () => {
  return (
      <div className="text-center landing-page">
          <div className="icon">
              <img src={newLogo} alt="logo" className="logo"/>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
              <Link to="/login" className="btn btn-primary btn-custom">Login</Link>
              <Link to="/register" className="btn btn-secondary btn-custom">Register</Link>
          </div>
      </div>
  );
};

export default LandingPage;
