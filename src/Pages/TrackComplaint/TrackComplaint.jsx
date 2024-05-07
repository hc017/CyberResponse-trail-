import React, { useEffect, useState } from "react";
import "./TrackComplaint.css";
import Em from "../../components/Emergency/Em";
import { Link } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { auth } from "../../FirebaseCongfig/FirebaseConfig";

const TrackComplaint = () => {
  const [Rmobile, setRMobile] = useState("");
  const [Rotp, setROtp] = useState("");
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("");
  
  const sendotp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirm = await signInWithPhoneNumber(auth, Rmobile, recaptcha);
      setUser(confirm);
      console.log("OTP sent");
    } catch (err) {
      console.error(err);
    }
  };
  
  const verifyOtp = async () => {
    try {
      const otpdata = await user.confirm(Rotp);
      console.log(otpdata);
      setStatus("Your status is ongoing!");
      alert("Correct OTP entered");
    } catch (err) {
      setStatus("");
      alert("OTP not matched");
      console.error(err);
    }
  };

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
            
            {/* <div className="TC_vertical_input">
              <p className="TC_vi_text">Acknowledge Number :</p>
              <input
                type="number"
                className="TC_vi_input"
                placeholder="Enter your Old Phone Number "
              />
              <button className="TC_OTP">GET OTP</button>
            </div> */}

            <div className="R_Vi_container">
              <div className="ldiv">
                <label className="R_VI_text">Mobile No:</label>
              </div>
              <div className="VIdiv1">
                <PhoneInput
                  country={'in'}
                  className="urmobile1"
                  value={Rmobile}
                  onChange={(Rmobile) => setRMobile("+" + Rmobile)}
                />
              </div>
            </div>

            <div className="otp_container">
              <div className="ldiv">
                <label className="R_VI_text" id="VIT_otp">
                  OTP:
                </label>
              </div>

              <div className="VIdiv">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="otp_vi_input"
                  id="VIT_input1"
                  value={Rotp}
                  onChange={(e) => setROtp(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="otp_btn">
              <button type="button" className="R_BTN" onClick={sendotp}>
                Get OTP
              </button>
              <button type="button" className="R_BTN" onClick={verifyOtp}>
                Verify OTP
              </button>
            </div>
            {status && <h3 className="status_check">{status}</h3>}
            <div id="recaptcha"></div>

            {/* <div className="TC_vertical_input">
              <p className="TC_vi_text">OTP :</p>
              <input
                type="number"
                className="TC_vi_input"
                placeholder="Enter your OTP "
              />
              <button className="TC_OTP">SUBMIT</button>
            </div> */}
            <div className="UD_TC_bar"></div>
            <div className="TC_block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackComplaint;
