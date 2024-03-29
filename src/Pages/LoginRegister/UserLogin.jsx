import React, { useEffect, useState } from 'react'
import './UserLogin.css'
import { Link } from 'react-router-dom'
import logo from './arrow.svg'
import captchaimg from './captcha-bg.png'
import '@fortawesome/fontawesome-free/css/all.css';
import initializeCaptcha from './CaptchaScript';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../FirebaseCongfig/FirebaseConfig';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {

  const [Lemail, setLEmail] = useState("");
  const [loginIdError, setLoginIdError] = useState("");
  const [Lpassword, setLPassword] = useState("");
  const navigate = useNavigate();
  const db = getDatabase();



  const handleLogin = () => {
    console.log(Lemail, Lpassword);
    signInWithEmailAndPassword(auth, Lemail, Lpassword)
      .then((userCredential) => {
        const user = userCredential.user;
        let log = {
          uids: user.uid
        };
        // console.log(log.uids)
        alert("user login");
        navigate('/incidentdetails', {
          state: log
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorMessage);
        // Handle error, show error message, etc.
      });
  };
  




  


  // const sendOTP = async () => {
  //   try {
  //     const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
  //     const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
  //     setUser(confirmation);
  //   }
  //   catch (err) {
  //     console.error(err)
  //   }
  // }

  // const verifyOTP = async () => {
  //   try {
  //     const captcha = document.querySelector(".captcha");
  //     // Check if captcha input matches
  //     if (captchaInput.trim() === captcha.innerText.replace(/\s/g, "")) {
  //       const data = await user.confirm(otp);
  //       console.log(data);
  //       // Show success message if OTP is verified
  //       alert("OTP and Captcha verified successfully!");
  //     } else {
  //       console.log("Captcha not matched. Please try again!");
  //       // Show error message if captcha is not matched
  //       alert("Captcha not matched. Please try again!");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     // Show error message if OTP verification fails
  //     alert("OTP verification failed. Please try again!");
  //   }
  // };

  // const validateEmail = (email) => {
  //   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //   return regex.test(email);
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   // Reset previous error messages
  //   setLoginIdError("");
  //   setPhoneError("");
  //   setOtpError("");
  //   setCaptchaError("");

  //   // Validate email
  //   if (loginId.trim() === "") {
  //     setLoginIdError("Please enter email id.");
  //     return;
  //   } else if (!validateEmail(loginId)) {
  //     setLoginIdError("Invalid email format.");
  //     return;
  //   }

  //   // Validate phone number
  //   if (phone.trim() === "") {
  //     setPhoneError("Please enter mobile number.");
  //     return;
  //   } else if (phone.length !== 13) {
  //     setPhoneError("Mobile number should be exactly 10 digits long.");
  //     return;
  //   }

  //   // Validate OTP
  //   if (otp.trim() === "") {
  //     setOtpError("Please enter OTP.");
  //     return;
  //   } else if (otp.length !== 6) {
  //     setOtpError("OTP should be exactly 6 digits long.");
  //     return;
  //   }

  //   // Validate Captcha
  //   if (captchaInput.trim() === "") {
  //     setCaptchaError("Please enter captcha.");
  //     return;
  //   } else if (captchaInput.length !== 6) {
  //     setCaptchaError("Captcha should be exactly 6 digits long.");
  //     return;
  //   }

  //   // Continue with login process
  //   window.location.href = "/userdetails";
  // };

  // useEffect(() => {
  //   initializeCaptcha(); // Call the initializeCaptcha function when component mounts
  // }, []);

  return (
    <div className='login-page'>
      <div className="inner-login">

        <div className="where-to-location">
          <Link className='visit-home' to='/' >Home</Link>
          <img src={logo} alt="arrow" className='arrow-img' />
          <p className='reg-text'>Register to complaint</p>
        </div>

        <div className="login-rectangle">
          <div className="left-login">
            <p class="Login-to-Complaint"> Login to Complaint </p>
            <div class="login-horizontal-line"> </div>

            <div className='login-form-align'>
              <form action='' method='post'>
                <div>
                
                  <label className="loginid">Login ID:</label>
                  <input type="email" placeholder="Enter your email ID" id="loginid" required value={Lemail}
                    onChange={(e) => {
                      setLEmail(e.target.value);
                      setLoginIdError("");
                    }}
                  />
                  {loginIdError && <span className="error-message-email">{loginIdError}</span>}

                </div>
                <div>
                
                  <label className="loginid">Password:</label>
                  <input type="password" placeholder="Enter your Password" id="loginid" required value={Lpassword}
                    onChange={(e) => {
                      setLPassword(e.target.value);
                    }}

                  />
                  

                </div>
                {/* <div className='mobile'>
                  <label className="mobileno">Mobile No:</label>
                  <PhoneInput country={"in"} value={phone} onChange={(phone) => setPhone("+" + phone)} className="extension" required />
                </div>
                <div className="error-msg">
                  {phoneError && <span className="error-message-phone">{phoneError}</span>}
                </div>
                
                <div className='fillotp'>
                  <label className="getotp">OTP:</label>
                  <input type="text" onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" id="getotp" required />

                  <button type="button" className='getotp-button' onClick={sendOTP} >Get OTP</button>
                  <button type="button" onClick={verifyOTP} className='verifyotp-button' >Verify OTP</button>

                </div>
                {otpError && <span className="error-message-otp">{otpError}</span>}
                <div id='recaptcha'>

                </div>

                <div className="captcha-wrapper">
                  <div className="view-captcha">
                    <label className='captcha-container'> Captcha: </label>
                    <div className="captcha-area">
                      <div className="captcha-img">
                        <img src={captchaimg} alt="Captcha Background" />
                        <span className="captcha" />
                      </div>
                      <button className="reload-btn"><i className="fas fa-redo-alt" /></button>
                    </div>
                  </div>

                  <div className='input-captcha'>
                    <label classname='write-captcha' >Enter Captcha:</label>
                    <input type="text" placeholder='Enter the captcha' id="write-captcha" value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)} required />
                    {captchaError && <span className="error-message-captcha">{captchaError}</span>}
                  </div>
                  <div className="status-text" />
                </div> */}

                <div className='register-newuser'>
                  <Link to="/register" style={{ color: '#fff', textDecoration: 'none'}} >New User? Click to Register</Link>
                </div>
                <div>
                  <Link onClick={(e) => handleLogin(e)} type="button" className='confirm-login-button'>Login</Link>
                  <button type="button" className='cancel-button'>Cancel</button>
                </div>
              </form>
            </div>

          </div>

          <div className="middle-line">
            <div className="login-verticle-line"> </div>
          </div>

          <div className="right-instructions">
            <p className="Login-CHECK-LIST-FOR-COMPLAINANT"> CHECK LIST FOR COMPLAINT </p>
            <p className='Login-infotext'> Please keep this information ready before filing your complaint: </p>
            <div className="Login-mandatory-info">
              <p className="text-style-1">Mandatory Information</p>
              <ol className='info-ol'>
                <li>Incident Date and Time.</li>
                <li>Incident details (minimum 200 characters) without any special characters (#$@^*`"~|!).</li>
                <li>Soft copy of any national Id (Voter Id, Driving license, Passport, PAN Card, Aadhar Card) of complaint in .jpeg, .jpg, .png format (file size should not more than 5 MB).</li>
                <li>In case of financial fraud, please keep following information ready:
                  <ol type="i">
                    <li>Name of the Bank/ Wallet/Merchant</li>
                    <li>12-digit Transaction id/UTR No.</li>
                    <li>Date of transaction</li>
                    <li>Fraud amount</li>
                  </ol>
                </li>
                <li>Soft copy of all the relevant evidences related to the cyber crime (not more than 10 MB each).</li>
              </ol>
              <p className="Optional-Desirable-Information">Optional/Desirable Information:</p>
              <ol className='info-ol'>
                <li>Suspected website URLs/ Social Media handles (wherever applicable).</li>
                <li>Suspect Details (if available):
                  <ol type="i">
                    <li>Mobile No.</li>
                    <li>Email id</li>
                    <li>Bank Account No</li>
                    <li>Address</li>
                    <li>Soft copy of photograph of suspect in .jpeg, .jpg, .png format (not more than 5 MB).</li>
                    <li>Any other document through which suspect can be identified.</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default UserLogin
