import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../style/navbar.css"; 
import { NavLink } from "react-router-dom";
import { useAuth } from './AuthContext';
import newLogo from '../assets/images/logo.webp'; // Adjust the path based on your project structure


export default function Navbar() {
  const { isLoggedIn } = useAuth(); // Destructure isLoggedIn
  
  if (!isLoggedIn) return null;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
        <img style={{ width: '70%' }} src={newLogo} alt="logo" />        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/record">
                My Scholarships
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/page1">
                ScholarAi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/settings">
                Settings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">
                Log Out
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
