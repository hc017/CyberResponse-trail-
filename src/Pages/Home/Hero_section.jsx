import React from "react";
import "./Hero_section.css";
import { useNavigate } from "react-router";
const Hero_section = () => {
  const navigate= useNavigate();
  const handleReport=()=>{
    navigate('/reportincident')
  }
  return (
<div class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Report Cybercrimes</h1>
            <p class="hero-subtitle">Empower a safer digital world</p>
            <div class="hero-buttons">
                <button class="hero-button" onClick={handleReport}>REPORT <br /> INCIDENT</button>
                <button class="hero-button">HOW TO <br /> REPORT</button>
                <button class="hero-button">STAY <br /> INFORMED</button>
            </div>
        </div>
    </div>
  );
};

export default Hero_section;
