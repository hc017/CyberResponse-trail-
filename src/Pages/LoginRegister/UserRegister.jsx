import React, { useEffect, useState } from "react";
import "./UserRegister.css";
import { Link,useHistory  } from "react-router-dom";
import logo from "./arrow.svg";
import captchaimg from "./captcha-bg.png";
import "@fortawesome/fontawesome-free/css/all.css";
import initializeCaptcha from "./CaptchaScript";
import { StateDropdown } from "react-country-state-dropdown";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../FirebaseCongfig/FirebaseConfig";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const UserRegister = () => {
  const [userRegister, setuserRegister] = useState(true);
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const db = getDatabase();



  
  const handleRegister = () => {
    console.log(email, state, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user creatted");

        set(ref(db, `users/${userCredential.user.uid}`), {
          state: state,
          email: email,
          password: password,
          id: userCredential.user.uid,
        });
         // Redirect to another page after successful registration
         navigate('/', { userId: user.uid, email: email }); // Replace '/next-page' with your desired route
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const handleCancel = () => {
    // Clear the form fields by resetting the state variables
    setState('');
    setEmail('');
    setPassword('');
    setCPassword('');
  };

  return (
    <div className="register-page">
      <div className="inner-register">
        <div className="reg-where-to-location">
          <Link className="visit-home" to="/">
            Home
          </Link>
          <img src={logo} alt="arrow" className="arrow-img" />
          <p className="reg-text">Register to complaint</p>
        </div>
        <div className="register-rectangle">
          <div className="left-register">
            <p class="register-to-Complaint"> Register to Complaint </p>
            <div class="register-horizontal-line"> </div>

            <div className="register-form-align">
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission behavior
                  handleRegister(); // Call handleRegister when the form is submitted
                }}
              >
                <div className="select-state">
                  <label className="state">State:</label>
                  <input
                    type="text"
                    placeholder="Enter your State"
                    value={state}
                    onChange={(e) => setState(e.target.value)} // Use the provided value directly
                    id="statename"
                  />
                </div>
                <div>
                  <label className="reg-loginid">Login ID:</label>
                  <input
                    type="email"
                    placeholder="Enter your email ID"
                    id="reg-loginid"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="reg-loginid">Password:</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    id="reg-loginid"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <div className="reg-mobile">
                  <label className="reg-mobileno">Mobile No:</label>
                  <PhoneInput
                    country={"in"}
                    className="reg-extension"
                    required
                  />
                </div>
                <div className="reg-fillotp">
                  <label className="reg-getotp">OTP:</label>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    id="reg-getotp"
                    required
                  />

                  <button
                    type="button"
                    className="reg-getotp-button"
                  >
                    Get OTP
                  </button>
                  <button
                    type="button"
                    
                    className="reg-verifyotp-button"
                  >
                    
                  </button> */}
                {/* </div> */}

                {/* <div id="recaptcha"></div>

                <div className="reg-captcha-wrapper">
                  <div className="reg-view-captcha">
                    <label className="reg-captcha-container"> Captcha: </label>
                    <div className="reg-captcha-area">
                      <div className="reg-captcha-img">
                        <img src={captchaimg} alt="Captcha Background" />
                        <span className="captcha" />
                      </div>
                      <button className="reload-btn">
                        <i className="fas fa-redo-alt" />
                      </button>
                    </div>
                  </div>

                  <div className="input-captcha">
                    <label classname="reg-write-captcha">Enter Captcha:</label>
                    <input
                      type="text"
                      placeholder="Enter the captcha"
                      id="reg-write-captcha"
                      value={regcaptchaInput}
                      onChange={(e) => setRegCaptchaInput(e.target.value)}
                      required
                    />
                    {regcaptchaError && (
                      <span className="error-message-captcha">
                        {regcaptchaError}
                      </span>
                    )}
                  </div>
                  <div className="status-text" />
                </div> */}

                <div className="login-existinguser">
                  <Link
                    to="/login"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Existing User? Click here to login
                  </Link>
                </div>
                <div>
                  <Link
                    type="button"
                    className="confirm-register-button"
                    onClick={handleRegister}
                  >
                    Register
                  </Link>
                  <button type="button" className="reg-cancel-button" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="reg-middle-line">
            <div className="register-verticle-line"> </div>
          </div>

          <div className="right-instructions">
            <p className="register-CHECK-LIST-FOR-COMPLAINANT">
              {" "}
              CHECK LIST FOR COMPLAINT{" "}
            </p>
            <p className="register-infotext">
              {" "}
              Please keep this information ready before filing your complaint:{" "}
            </p>
            <div className="register-mandatory-info">
              <p className="reg-text-style-1">Mandatory Information</p>
              <ol className="info-ol">
                <li>Incident Date and Time.</li>
                <li>
                  Incident details (minimum 200 characters) without any special
                  characters (#$@^*`"~|!).
                </li>
                <li>
                  Soft copy of any national Id (Voter Id, Driving license,
                  Passport, PAN Card, Aadhar Card) of complaint in .jpeg, .jpg,
                  .png format (file size should not more than 5 MB).
                </li>
                <li>
                  In case of financial fraud, please keep following information
                  ready:
                  <ol type="i">
                    <li>Name of the Bank/ Wallet/Merchant</li>
                    <li>12-digit Transaction id/UTR No.</li>
                    <li>Date of transaction</li>
                    <li>Fraud amount</li>
                  </ol>
                </li>
                <li>
                  Soft copy of all the relevant evidences related to the cyber
                  crime (not more than 10 MB each).
                </li>
              </ol>
              <p className="reg-Optional-Desirable-Information">
                Optional/Desirable Information:
              </p>
              <ol className="reg-info-ol">
                <li>
                  Suspected website URLs/ Social Media handles (wherever
                  applicable).
                </li>
                <li>
                  Suspect Details (if available):
                  <ol type="i">
                    <li>Mobile No.</li>
                    <li>Email id</li>
                    <li>Bank Account No</li>
                    <li>Address</li>
                    <li>
                      Soft copy of photograph of suspect in .jpeg, .jpg, .png
                      format (not more than 5 MB).
                    </li>
                    <li>
                      Any other document through which suspect can be
                      identified.
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
