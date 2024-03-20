import React from "react";
import "./Home.css";
import H_img from "./hero -img.png";
import UsefulLinks from "../../components/UsefuLinks/UsefulLinks";

const Home = () => {
  return (
    <div class="Home-Container">
      <div className="hero_section">
        <div className="leftside_HS">
          <div className="left_top">
            <span class="hero_CyberSoochna">CyberSoochna</span>
            <p>
              <span class="hero_hd2">Empowering a Resilient Response to</span>
            </p>
            <span class="hero_hd3">Digital Crimes and Frauds</span>
            <p className="pp">
              <span class="hero_sbh">
                "Securely report, investigate, and manage cybercrime incidents
                effectively."
              </span>
            </p>
          </div>
          <div className="left_bottom">
            <button className="report_btn">
              <span class="Report_text">Report an Incident Now</span>
            </button>
            <button className="report_btn">
              <span class="Report_text">Learn How to Report</span>
            </button>
            <button className="report_btn">
              <span class="Report_text">Stay Informed</span>
            </button>
          </div>
        </div>
        <div className="rightside_HS">
          <div className="hero_img">
            <img className="hero_i" src={H_img} alt="" />
          </div>
          <div class="Emergency">
            <button className="em">
              <span class="em_text">
                IN ANY EMERGENCY CASE CALL 1930
              </span>
            </button>
          </div>
        </div>
      </div>
      <div>
      <UsefulLinks/>
    </div>
    </div>
    
    
  );
};

export default Home;
