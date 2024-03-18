import React from "react";
import "./Home.css";
import logo from "./Logo.png";

const Home = () => {
  return (
    <div className="home_container">
      <div className="Nav_logo">
        <img src={logo} className="logo" />
      </div>
      <span class="CyberSoochna">CyberSoochna</span>
      <span class="Register-a-Complaint">Register a Complaint</span>
    </div>
  );
};

export default Home;
