import React from "react";
import "./Home.css";
import H_img from "./hero -img.png";
import UsefulLinks from "../../components/UsefuLinks/UsefulLinks";
// import Playback_video from "./Playback_video/Playback_video";
import Banner from "./Banner_1/Banner";
import Banner2 from "./Banner_2/Banner2";
import { Link } from "react-router-dom";
import Hero_section from "./Hero_section";
import HomeButtons from "./HomeButtons";
import JoinUs from "./JoinUs/JoinUs";
const Home = () => {
  return (
    <div class="Home-Container">
       <Hero_section/>
       <section class="report-cybercrimes">
    <div class="container">
        <div class="report-cybercrimes-content">
            <h2 class="section-title"></h2>
            <p class="section-description">Help us fight cybercrimes by reporting any suspicious activities or incidents you encounter online.</p>
            <div class="report-count">
                <span id="count">0</span>
        
            </div>
        </div>
    </div>
</section>



     
      <Banner2 />
      <div className="Home_usef">
       <JoinUs/>
      </div>
    </div>
  );
};

export default Home;
