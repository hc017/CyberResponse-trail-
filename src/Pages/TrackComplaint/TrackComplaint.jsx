import React from "react";
import "./TrackComplaint.css";
import Em from "../../components/Emergency/Em";
import { Link } from "react-router-dom";

const TrackComplaint = () => {
  return (
    <div className="TC_component">
      <div className="TC_innercomponent">
        <Em />
        <div className="UD_TC_bar"></div>
        <div className="UD_TC_bar"></div>
        <div className="UD_TC_bar"></div>
        <div className="TC_innerform">
          <div className="TC_susdetail_bar">
            <p className="TC_sus_text">Track A Complaint</p>
          </div>

          <div className="TC_block"></div>
          <div className="UD_TC_bar"></div>
          <div className="TC_Vi">
            <div className="TC_vertical_input">
              <p className="TC_vi_text">Acknowledge Number :</p>
              <input
                type="number"
                className="TC_vi_input"
                placeholder="Enter your Old Phone Number "
              />
              <button className="TC_OTP">GET OTP</button>
            </div>
            <div className="TC_vertical_input">
              <p className="TC_vi_text">OTP :</p>
              <input
                type="number"
                className="TC_vi_input"
                placeholder="Enter your OTP "
              />
              <button className="TC_OTP">SUBMIT</button>
            </div>
            <div className="UD_TC_bar"></div>
            <div className="TC_block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackComplaint;
