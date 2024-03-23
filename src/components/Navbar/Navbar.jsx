import React from "react";
import "./Navbar.css";
import logo from "./Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Rectangle-135">
      <div className="navbar-content">
        <div className="navC">
        <p className="navcircle">
        <img src={logo} className="image-remofgvsfvebg-preview-2" alt="Logo" />
        </p>
        </div>
        <div className="cybers">
        <Link to="/"  className="CyberSoochna-1">CyberSoochna</Link>
        </div>
        <div className="navbartitle_container">
          {/* <button className="complaint-btn">Register a Complaint</button> */}
          <Link to="/login" className="complaint-btn">Register a Complaint</Link>
          <Link to="/userdetails" className="complaint-btn">Track a Complaint</Link>
          <button className="complaint-btn">Services</button>
          <button className="complaint-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
