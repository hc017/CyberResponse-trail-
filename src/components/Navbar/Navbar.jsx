import React from "react";
import "./Navbar.css";
import logo from "./Logo.png";

const Navbar = () => {
  return (
    <div className="Rectangle-135">
      <div className="navbar-content">
        <p className="navcircle">
        <img src={logo} className="image-remofgvsfvebg-preview-2" alt="Logo" />
        </p>
        <span className="CyberSoochna-1">CyberSoochna</span>
        <div className="navbartitle_container">
          <button className="complaint-btn">Register a Complaint</button>
          <button className="complaint-btn">Track a Complaint</button>
          <button className="complaint-btn">Services</button>
          <button className="complaint-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
