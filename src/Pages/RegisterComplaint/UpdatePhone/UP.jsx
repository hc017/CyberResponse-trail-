import React from "react";
import "./UP.css";
import Em from "../../../components/Emergency/Em";
import UFPRed from "../../UserDetails/UserForm/UFP_red";
import UPBar from "../../UserDetails/Userprofilebar/UP_bar";

const UP = () => {
  return (
    <div className="UP_component">
      <div className="UP_innercomponent">
        <Em />
        <div className="UD_up_bar"></div>
        <UPBar />
        <div className="UD_up_bar"></div>
        <UFPRed />
        <div className="UD_up_bar"></div>
        <div className="UD_up_bar"></div>
        <div className="UP_innerform">
          <div className="UP_susdetail_bar">
            <p className="UP_sus_text">UPDATE PHONE NUMBER</p>
          </div>
          <div className="UP_block"></div>
          <div className="UP_Vi">
            <div className="UP_vertical_input">
              <p className="UP_vi_text">Old Phone Number :</p>
              <input
                type="number"
                className="UP_vi_input"
                placeholder="Enter your Old Phone Number "
              />
            </div>
            <div className="UP_vertical_input">
              <p className="UP_vi_text">New Phone Number :</p>
              <input
                type="number"
                className="UP_vi_input"
                placeholder="Enter your New Phone Number "
              />
              <button className="UP_OTP">GET OTP</button>
            </div>
            <div className="UP_vertical_input">
              <p className="UP_vi_text">OTP :</p>
              <input
                type="number"
                className="UP_vi_input"
                placeholder="Enter your OTP "
              />
              <button className="UP_OTP">SUBMIT</button>
            </div>
            <div className="UP_block"></div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default UP;
