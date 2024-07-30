import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./Logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img src={logo} alt="Website Logo" className="logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/login">Register Complaint</NavLink>
        </li>
        <li>
          <NavLink to="/trackcomplaint">Track Complaint</NavLink>
        </li>
        <li>
          <NavLink to="/contactus">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};
