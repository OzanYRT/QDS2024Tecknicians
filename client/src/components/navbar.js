import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
//import "css/LandingPage.css";
 // We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 // Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 70 + '%'}} src="logos/ScrapArtsMusic-White.png"></img>
       </NavLink>
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
               Records
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/page1">
               Page 1
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/page2">
               Page 2
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/page3">
               Page 3
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/page4">
               Page 4
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}