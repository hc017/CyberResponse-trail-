// Login.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import logo from './arrow.svg'

const Login = () => {
    const [loginId, setLoginId] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [otp, setOtp] = useState('');
    const [captcha, setCaptcha] = useState('');
    // const [userCaptcha, setUserCaptcha] = useState('');

    // const generateCaptcha = () => {
    //     const captchaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     let captcha = '';
    //     for (let i = 0; i < 6; i++) {
    //         captcha += captchaChars.charAt(Math.floor(Math.random() * captchaChars.length));
    //     }
    //     setCaptcha(captcha);
    // };

    // // Generate initial captcha on component mount
    // useEffect(() => {
    //     generateCaptcha();
    // }, []);

    const handleGetOTP = () => {
        // Logic to get OTP
    };

    const handleLogin = () => {
        // Logic to handle login
        // if (userCaptcha === captcha) {
        //     // Proceed with login logic
        //     console.log('Login successful');
        // } else {
        //     // Display error message for wrong captcha
        //     console.log('Wrong captcha entered');
        // }
    };

    const handleCancel = () => {
        // Logic to handle cancel
    };

    return (
        <div className='Login-page'>

            <Link to="/home" className="Home"> Home </Link>
            <img src={logo} alt="Logo" className='arrow-img' />
            <span style={{ color: "#a4e1f4", fontSize: '24px', fontWeight: 'bold' }}> Register a Complaint </span>

            <div class="login-Rectangle">

                <div className="login-Vertical-line"></div>

                <div className="left-part">
                    <span class="Login-to-Complaint"> Login to Complaint </span>
                    <div class="login-horizontal-line"></div>
                    
                    <div className='login-form-align'>
                        <form>
                            <div>
                                <label className="loginId">Login ID:</label>
                                <input type="text" id="loginId" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
                            </div>
                            <div>
                                <label className="mobileNo">Mobile No:</label>
                                <input type="tel" id="extension" />
                                <input type="tel" id="mobileNo" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
                            </div>
                            <div>
                                <label className="otp">OTP:</label>
                                <input type="text" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} />
                                <button type="button" className='otp-button' onClick={handleGetOTP}>Get OTP</button>
                            </div>

                            <div>
                                <label className="captcha">Enter Captcha:</label>
                                <input type="text" id="captcha" value={captcha} onChange={(e) => setCaptcha(e.target.value)} />
                            </div>

                            {/* <div>
                            <label id='captcha-container'> Captcha: </label>
                            <span id="captcha-text">{captcha}</span>
                            <button type="button" className="refresh-button" onClick={generateCaptcha}>Refresh</button>
                        </div> */}
                            {/* <div>
                            <label className="captcha">Enter Captcha:</label>

                            <input type="text" id="captcha" value={userCaptcha} onChange={(e) => setUserCaptcha(e.target.value)} />
                        </div> */}

                            <div className='newuser-register'>
                                <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }} >New User? Click to Register</Link>
                            </div>
                            <div>
                                <button type="button" className='login-button' onClick={handleLogin}>Login</button>
                                <button type="button" className='cancel-button' onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="right-part">
                <span class="login-CHECK-LIST-FOR-COMPLAINANT"> CHECK LIST FOR COMPLAINANT </span>
                <span class="login-infotext"> Please keep this information ready before filing your complaint: </span>
                    <div className="login-Mandatory-info">
                        <span className="text-style-1">Mandatory Information</span>
                        <ol className='info-ol'>
                            <li>Incident Date and Time.</li>
                            <li>Incident details (minimum 200 characters) without any special characters (#$@^*`"~|!).</li>
                            <li>Soft copy of any national Id (Voter Id, Driving license, Passport, PAN Card, Aadhar Card) of complainant in .jpeg, .jpg, .png format (file size should not more than 5 MB).</li>
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
                        <span className="Optional-Desirable-Information">Optional/Desirable Information:</span>
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

    );
}

export default Login
