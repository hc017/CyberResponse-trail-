import React from "react";
import "./UserForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserForm = () => {
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleGetOtpClick = () => {
    setShowOtpInput(true);
  };

  const handleVerifyClick = () => {
    // Implement OTP verification logic here
  };
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [policeStation, setPoliceStation] = useState("");

  // Dummy data for dropdowns (replace with actual data source)
  const countries = [
    { id: 1, name: "Country 1" },
    { id: 2, name: "Country 2" },
    { id: 3, name: "Country 3" },
    // Add more countries as needed
  ];
  
  const states = [
    { id: 1, name: "State 1", countryId: 1 },
    { id: 2, name: "State 2", countryId: 1 },
    { id: 3, name: "State 3", countryId: 2 },
    // Add more states as needed
  ];
  
  const districts = [
    { id: 1, name: "District 1", stateId: 1 },
    { id: 2, name: "District 2", stateId: 1 },
    { id: 3, name: "District 3", stateId: 2 },
    // Add more districts as needed
  ];
  
  const policeStations = [
    { id: 1, name: "Police Station 1", districtId: 1 },
    { id: 2, name: "Police Station 2", districtId: 1 },
    { id: 3, name: "Police Station 3", districtId: 2 },
    // Add more police stations as needed
  ];



  return (
    <div className="UserF_component">
      <div className="UserF_inner_compnent">
        <div className="userform">
          <form>
            <div className="vertical_input">
              <p className="vi_text">Login ID :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter your login ID"
              />
            </div>
            <div className="vertical_input">
              <p className="vi_text">Title :</p>
              <div className="radio_group">
                <input type="radio" id="mr" name="title" value="Mr." />
                <label htmlFor="mr">Mr.</label>
                <input type="radio" id="mrs" name="title" value="Mrs." />
                <label htmlFor="mrs">Mrs.</label>
                <input type="radio" id="miss" name="title" value="Miss" />
                <label htmlFor="miss">Miss</label>
                <input type="radio" id="dr" name="title" value="Dr." />
                <label htmlFor="dr">Dr.</label>
                <input type="radio" id="prof" name="title" value="Prof." />
                <label htmlFor="prof">Prof.</label>
                <input type="radio" id="other" name="title" value="Other" />
                <label htmlFor="other">Other</label>
              </div>
            </div>
            <div className="vertical_input">
              <p className="vi_text">Name :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter your name"
              />
            </div>
            <div className="vertical_input">
              <p className="vi_text">Mobile :</p>
              <input
                type="number"
                className="vi_input"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="vertical_input">
              <p className="vi_text">Date of Birth :</p>
              <input type="date" className="vi_input" />
            </div>
            <div className="vertical_input">
              <p className="vi_text">Gender :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter your gender"
              />
            </div>
            <div className="vertical_input">
              <p className="vi_text">Email ID :</p>
              <div className="emailotp">
                <input
                  type="text"
                  className="vi_input_email"
                  placeholder="Enter your email ID"
                />
                {!showOtpInput && (
                  <button className="otpbutton" onClick={handleGetOtpClick}>
                    Get OTP
                  </button>
                )}
              </div>
              {showOtpInput && (
                <div className="emailotp">
                  <input
                    type="text"
                    className="vi_input_otp"
                    placeholder="Enter OTP"
                  />
                  <button className="verify_button" onClick={handleVerifyClick}>
                    Verify
                  </button>
                </div>
              )}
            </div>
            <div className="vertical_input">
              <p className="vi_text">Father/Mother/Spouse :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter your family member's relationship"
              />
            </div>
          </form>
          <div className="permanentAddcomponent">
            <div className="permanentAddinnercomponent">
              <p className="pb">Permanent Address</p>
              <div className="PA">
                <div className="PA_left">
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">House No. :</p>
                    <input
                      type="text"
                      className="PA_vi_input"
                      placeholder="Enter your House No."
                    />
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">Street Name :</p>
                    <input
                      type="text"
                      className="PA_vi_input"
                      placeholder="Enter your Street Name"
                    />
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">Colony :</p>
                    <input
                      type="text"
                      className="PA_vi_input"
                      placeholder="Enter your Colony"
                    />
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">Town/City :</p>
                    <input
                      type="text"
                      className="PA_vi_input"
                      placeholder="Enter your Town/City"
                    />
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">Teheshil :</p>
                    <input
                      type="text"
                      className="PA_vi_input"
                      placeholder="Enter your Teheshil"
                    />
                  </div>
                </div>
                <div className="PA_right">
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">Country:</p>
                    <select
                      className="PA_vi_input"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">State:</p>
                    <select
                      className="PA_vi_input"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">Select State</option>
                      {states
                        .filter((s) => s.countryId === parseInt(country))
                        .map((state) => (
                          <option key={state.id} value={state.id}>
                            {state.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">District:</p>
                    <select
                      className="PA_vi_input"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                    >
                      <option value="">Select District</option>
                      {districts
                        .filter((d) => d.stateId === parseInt(state))
                        .map((district) => (
                          <option key={district.id} value={district.id}>
                            {district.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">Police Station:</p>
                    <select
                      className="PA_vi_input"
                      value={policeStation}
                      onChange={(e) => setPoliceStation(e.target.value)}
                    >
                      <option value="">Select Police Station</option>
                      {policeStations
                        .filter((p) => p.districtId === parseInt(district))
                        .map((policeStation) => (
                          <option
                            key={policeStation.id}
                            value={policeStation.id}
                          >
                            {policeStation.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">PinCode :</p>
                    <input
                      type="text"
                      className="PA_vi_input"
                      placeholder="Enter your Pincode"
                    />
                  </div>
                </div>
              </div>
              <p className="text_h1">(AlphaNumeric and Symbols like @ , . / () _ - : ; are allowed. Do not use any special characters.)</p>
              <Link to="/incidentdetails" className="save_btn">
                Save and Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
