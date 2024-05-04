import React, { useEffect, useState } from "react";
import "./UserRegister.css";
import { Link, useHistory } from "react-router-dom";
import logo from "./arrow.svg";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../FirebaseCongfig/FirebaseConfig";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const UserRegister = () => {
  const [userRegister, setuserRegister] = useState(true);
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CFpassword, setCFPassword] = useState("");
  const [Rmobile, setRMobile] = useState("");
  const [Rotp, setROtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const db = getDatabase();

  const handleRegister = () => {
    console.log(email, state, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user creatted");

        set(ref(db, `users/${userCredential.user.uid}/register`), {
          state: state,
          email: email,
          password: password,
          mobile: Rmobile,
          id: userCredential.user.uid,
        });
        // Redirect to another page after successful registration
        window.alert("Data added successfully!");
        navigate("/", { userId: user.uid, email: email }); // Replace '/next-page' with your desired route
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("Error in registration");
        // ..
      });
  };

  const countries = [
    "India",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    // Add more countries as needed
  ];
  const handleCancel = () => {
    // Clear the form fields by resetting the state variables
    setState("");
    setEmail("");
    setPassword("");
    setCFPassword("");
    setRMobile("");
    setROtp("");
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
                <div className="R_Vi_container">
                  <div className="ldiv">
                    <label className="R_VI_text">Country:</label>
                  </div>
                  <div className="VIdiv">
                    <select
                      className="R_vi_input"
                      value={state}
                      onChange={(e) => setState(e.target.value)} // Update state when a new country is selected
                    >
                      <option value="">Select your Country</option>
                      {/* Map through the countries array to generate options */}
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="R_Vi_container">
                  <div className="ldiv">
                    <label className="R_VI_text">Login ID:</label>
                  </div>
                  <div className="VIdiv">
                    <input
                      type="email"
                      placeholder="Enter your email ID"
                      className="R_vi_input"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="R_Vi_container">
                  <div className="ldiv">
                    <label className="R_VI_text">Password:</label>
                  </div>
                  <div className="VIdiv">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="R_vi_input"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="R_Vi_container">
                  <div className="ldiv">
                    <label className="R_VI_text">Confirm Password:</label>
                  </div>
                  <div className="VIdiv">
                    <input
                      type="password"
                      placeholder="Confirm ypur password"
                      className="R_vi_input"
                      required
                      value={CFpassword}
                      onChange={(e) => setCFPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="R_Vi_container">
                  <div className="ldiv">
                    <label className="R_VI_text">Mobile No:</label>
                  </div>
                  <div className="VIdiv">
                    <input
                      type="tel"
                      country={"in"}
                      className="R_vi_input"
                      placeholder="Enter Your Mobile Number"
                      value={Rmobile}
                      onChange={(e) => setRMobile(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="R_Vi_container">
                  <div className="ldiv">
                    <label className="R_VI_text" id="VIT_otp">
                      OTP:
                    </label>
                  </div>
                  <div className="VIdiv">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      className="R_vi_input"
                      id="VIT_input"
                      value={Rotp}
                      onChange={(e) => setROtp(e.target.value)}
                      required
                    />
                  </div>

                  <button type="button" className="R_BTN" id="#VIT_btn">
                    Get OTP
                  </button>
                  <button type="button" className="R_BTN" id="#VIT_btn">
                    Verify OTP
                  </button>
                </div>

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
                    REGISTER
                  </Link>
                  <button
                    type="button"
                    className="reg-cancel-button"
                    onClick={handleCancel}
                  >
                    CANCEL
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
