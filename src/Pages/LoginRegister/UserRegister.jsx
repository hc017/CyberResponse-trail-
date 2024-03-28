import React, { useEffect, useState } from 'react'
import './UserRegister.css'
import { Link } from 'react-router-dom'
import logo from './arrow.svg'
import captchaimg from './captcha-bg.png'
import '@fortawesome/fontawesome-free/css/all.css';
import initializeCaptcha from './CaptchaScript';
import { StateDropdown } from "react-country-state-dropdown";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../FirebaseCongfig/FirebaseConfig';


const UserRegister = () => {


    const [regphone, setRegPhone] = useState("");
    const [reguser, setRegUser] = useState(null);
    const [regotp, setRegOtp] = useState("");
    const [regcaptchaInput, setRegCaptchaInput] = useState("");
    const [regloginId, setRegLoginId] = useState("");
    const [regstateError, setRegStateError] = useState("");
    const [regloginIdError, setRegLoginIdError] = useState("");
    const [regphoneError, setPhoneRegError] = useState("");
    const [regotpError, setRegOtpError] = useState("");
    const [regcaptchaError, setRegCaptchaError] = useState("");
    const [regstate, setRegState] = useState(null)

    const handleSetState = (e, value) => setRegState(value);

    const sendOTP = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, regphone, recaptcha)
            setRegUser(confirmation);
        }
        catch (err) {
            console.error(err)
        }
    }

    const verifyOTP = async () => {
        try {
            const captcha = document.querySelector(".captcha");
            // Check if captcha input matches
            if (regcaptchaInput.trim() === captcha.innerText.replace(/\s/g, "")) {
                const data = await reguser.confirm(regotp);
                console.log(data);
                // Show success message if OTP is verified
                alert("OTP and Captcha verified successfully!");
            } else {
                console.log("Captcha not matched. Please try again!");
                // Show error message if captcha is not matched
                alert("Captcha not matched. Please try again!");
            }
        } catch (err) {
            console.error(err);
            // Show error message if OTP verification fails
            alert("OTP verification failed. Please try again!");
        }
    };

    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return regex.test(email);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // Reset previous error messages
        setRegLoginIdError("");
        setPhoneRegError("");
        setRegOtpError("");
        setRegCaptchaError("");
        setRegStateError("");

        //Validate state
        if (!regstate) {
            setRegStateError("Please select a state.");
            return;
        }

        // Validate email
        if (regloginId.trim() === "") {
            setRegLoginIdError("Please enter email id.");
            return;
        } else if (!validateEmail(regloginId)) {
            setRegLoginIdError("Invalid email format.");
            return;
        }

        // Validate phone number
        if (regphone.trim() === "") {
            setPhoneRegError("Please enter mobile number.");
            return;
        } else if (regphone.length !== 13) {
            setPhoneRegError("Mobile number should be exactly 10 digits long.");
            return;
        }

        // Validate OTP
        if (regotp.trim() === "") {
            setRegOtpError("Please enter OTP.");
            return;
        } else if (regotp.length !== 6) {
            setRegOtpError("OTP should be exactly 6 digits long.");
            return;
        }

        // Validate Captcha
        if (regcaptchaInput.trim() === "") {
            setRegCaptchaError("Please enter captcha.");
            return;
        } else if (regcaptchaInput.length !== 6) {
            setRegCaptchaError("Captcha should be exactly 6 digits long.");
            return;
        }

        // Continue with login process
        window.location.href = "/login";
    };


    useEffect(() => {
        initializeCaptcha(); // Call the initializeCaptcha function when component mounts
    }, []);

    return (
        <div className='register-page'>
            <div className="inner-register">

                <div className="reg-where-to-location">
                    <Link className='visit-home' to='/' >Home</Link>
                    <img src={logo} alt="arrow" className='arrow-img' />
                    <p className='reg-text'>Register to complaint</p>
                </div>

                <div className="register-rectangle">
                    <div className="left-register">
                        <p class="register-to-Complaint"> Register to Complaint </p>
                        <div class="register-horizontal-line"> </div>

                        <div className='register-form-align'>
                            <form>
                                <div className='select-state'>
                                    <label className="state">State:</label>
                                    <StateDropdown clearable country={"in"} value={regstate} onChange={handleSetState} id="statename" />
                                </div>
                                {regstateError && <span className="error-message-state">{regstateError}</span>}
                                <div>
                                    <label className="reg-loginid">Login ID:</label>
                                    <input type="email" placeholder="Enter your email ID" id="reg-loginid" required value={regloginId}
                                        onChange={(e) => {
                                            setRegLoginId(e.target.value);
                                            setRegLoginIdError("");
                                        }}
                                    />
                                    {regloginIdError && <span className="error-message-email">{regloginIdError}</span>}
                                </div>
                                <div className='reg-mobile'>
                                    <label className="reg-mobileno">Mobile No:</label>
                                    <PhoneInput country={"in"} value={regphone} onChange={(phone) => setRegPhone("+" + phone)} className="reg-extension" required />
                                </div>
                                <div className="error-msg">
                                    {regphoneError && <span className="error-message-phone">{regphoneError}</span>}
                                </div>
                                <div className='reg-fillotp'>
                                    <label className="reg-getotp">OTP:</label>
                                    <input type="text" onChange={(e) => setRegOtp(e.target.value)} placeholder="Enter OTP" id="reg-getotp" required />

                                    <button type="button" className='reg-getotp-button' onClick={sendOTP} >Get OTP</button>
                                    <button type="button" onClick={verifyOTP} className='reg-verifyotp-button' >Verify OTP</button>

                                </div>
                                {regotpError && <span className="error-message-otp">{regotpError}</span>}
                                <div id='recaptcha'>

                                </div>

                                <div className="reg-captcha-wrapper">
                                    <div className="reg-view-captcha">
                                        <label className='reg-captcha-container'> Captcha: </label>
                                        <div className="reg-captcha-area">
                                            <div className="reg-captcha-img">
                                                <img src={captchaimg} alt="Captcha Background" />
                                                <span className="captcha" />
                                            </div>
                                            <button className="reload-btn"><i className="fas fa-redo-alt" /></button>
                                        </div>
                                    </div>

                                    <div className='input-captcha'>
                                        <label classname='reg-write-captcha' >Enter Captcha:</label>
                                        <input type="text" placeholder='Enter the captcha' id="reg-write-captcha" value={regcaptchaInput}
                                            onChange={(e) => setRegCaptchaInput(e.target.value)} required />
                                        {regcaptchaError && <span className="error-message-captcha">{regcaptchaError}</span>}
                                    </div>
                                    <div className="status-text" />
                                </div>

                                <div className='login-existinguser'>
                                    <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }} >Existing User? Click here to login</Link>
                                </div>
                                <div>
                                    <Link onClick={(e) => handleRegister(e)} type="button" className='confirm-register-button'>Register</Link>
                                    <button type="button" className='reg-cancel-button'>Cancel</button>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="reg-middle-line">
                        <div className="register-verticle-line"> </div>
                    </div>

                    <div className="right-instructions">
                        <p className="register-CHECK-LIST-FOR-COMPLAINANT"> CHECK LIST FOR COMPLAINT </p>
                        <p className='register-infotext'> Please keep this information ready before filing your complaint: </p>
                        <div className="register-mandatory-info">
                            <p className="reg-text-style-1">Mandatory Information</p>
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
                            <p className="reg-Optional-Desirable-Information">Optional/Desirable Information:</p>
                            <ol className='reg-info-ol'>
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

export default UserRegister
