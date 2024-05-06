import React from "react";
import "./HomeButton.css";
import { useNavigate } from "react-router-dom";

const HomeButtons = () => {
  const navigate = useNavigate();

  const handleReport = () => {
    navigate("/reportincident")
  }
  const handleHowto = () => {
    navigate("/how_to_report")
  }
  const handleStayInformed = () => {
    navigate("/stayinformed")
  }



  return (

        <div class="hero-content">
            <div class="hero-buttons">
                <button onClick={handleReport} class="HomePageKabutton">REPORT INCIDENT</button>
                <button onClick={handleHowto} class="HomePageKabutton">HOW TO REPORT</button>
                <button  onClick={handleStayInformed} class="HomePageKabutton">STAY  INFORMED</button>
            </div>
        </div>
   
  );
};

export default HomeButtons;