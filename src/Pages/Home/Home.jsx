import React from "react";
import "./Home.css";
import H_img from "./hero -img.png";
import UsefulLinks from "../../components/UsefuLinks/UsefulLinks";
// import Playback_video from "./Playback_video/Playback_video";
import Banner from "./Banner_1/Banner";
import Banner2 from "./Banner_2/Banner2";
import { Link } from "react-router-dom";
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
            <Link to="/reportincident" type="button" className="report_btn">
              <span class="Report_text">Report an Incident Now</span>
            </Link>
            <Link to="/reportincident" type="button" className="report_btn">
              <span class="Report_text">Learn How to Report</span>
            </Link>
            <Link to="/reportincident" type="button" className="report_btn">
              <span class="Report_text">Stay Informed</span>
            </Link>
          </div>
        </div>
        <div className="rightside_HS">
          <div className="hero_img">
            <img className="hero_i" src={H_img} alt="" />
          </div>
        </div>
      </div>
      <Banner />
      <Banner2 />
      <div className="Home_usef">
        <UsefulLinks />
      </div>
    </div>
  );
};

export default Home;
