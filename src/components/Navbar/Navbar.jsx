import React from "react";
import "./Navbar.css";
import logo from "./Logo.png";

const Navbar = () => {
  return (
    <div className="Navbar_Container">
      <div className="Nav_logo">
        <img src={logo} className="logo" alt="" />
      </div>
      <span class="CyberSoochna">CyberSoochna</span>
    </div>
  );
};

export default Navbar;
