import React, { useEffect, useState } from 'react'
import './UserRegister.css'
import { Link } from 'react-router-dom'
import logo from './arrow.svg'
import captchaimg from './captcha-bg.png'
import '@fortawesome/fontawesome-free/css/all.css';
import initializeCaptcha from './CaptchaScript';

const UserRegister = () => {
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
                                <div>
                                    <label className="state">State:</label>
                                    <input type="text" id="state" placeholder='Enter your state' required />
                                </div>
                                <div>
                                    <label className="loginid">Login ID:</label>
                                    <input type="text" placeholder="Enter your login ID" id="loginid" required />
                                </div>
                                <div>
                                    <label className="mobileno">Mobile No:</label>
                                    <input type="tel" id="extensionNo" value="+91" disabled />
                                    <input type="tel" placeholder="Enter your mobile number" id="mobileno" required />
                                </div>
                                <div>
                                    <label className="getotp">OTP:</label>
                                    <input type="text" placeholder="Enter OTP" id="getotp" required />
                                    <button type="button" className='getotp-button' >Get OTP</button>
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
                                        <input type="text" placeholder='Enter the captcha' id="write-captcha" required />
                                        <button class="check-btn">Check</button>
                                    </div>
                                    <div className="status-text" />
                                </div>

                                <div className='login-existinguser'>
                                    <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }} >Existing User? Click here to login</Link>
                                </div>
                                <div>
                                    <Link to="/userdetails" type="button" className='confirm-register-button'>Register</Link>
                                    <button type="button" className='cancel-button'>Cancel</button>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="middle-line">
                        <div className="register-verticle-line"> </div>
                    </div>

                    <div className="right-instructions">
                        <p className="register-CHECK-LIST-FOR-COMPLAINANT"> CHECK LIST FOR COMPLAINT </p>
                        <p className='register-infotext'> Please keep this information ready before filing your complaint: </p>
                        <div className="register-mandatory-info">
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

export default UserRegister
