import React from "react";
import "./Home.css";
import Hero_section from "./Hero_section";
import JoinUs from "./JoinUs/JoinUs";
import About from "./About/About";
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



     
      
      <div className="Home_usef">
        <About/>
       <JoinUs/>
      </div>
    </div>
  );
};

export default Home;
