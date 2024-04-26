import React from "react";
import "./Hero_section.css";
import { useNavigate } from "react-router-dom";

const Hero_section = () => {
  const navigate = useNavigate();

  const handleReport = () => {
    navigate("/reportincident")
  }
  const handleHowto = () => {
    navigate("/")
  }
  const handleStayInformed = () => {
    navigate("/stayinformed")
  }



  return (
<div class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Report Cybercrimes</h1>
            <p class="hero-subtitle">Empower a safer digital world</p>
            <div class="hero-buttons">
                <button onClick={handleReport} class="hero-button">REPORT <br /> INCIDENT</button>
                <button onClick={handleHowto} class="hero-button">HOW TO <br /> REPORT</button>
                <button  onClick={handleStayInformed} class="hero-button">STAY <br /> INFORMED</button>
            </div>
        </div>
    </div>
  );
};

export default Hero_section;
