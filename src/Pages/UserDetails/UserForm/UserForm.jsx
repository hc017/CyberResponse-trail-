
import "./UserForm.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import { useAuth } from "../../../FirebaseCongfig/AuthContext";// Import the useAuth hook from the AuthProvider
import UP_bar from "../Userprofilebar/UP_bar";

const UserForm = () => {
  const [showOtpInput, setShowOtpInput] = useState(false);
  const location = useLocation();
  const [RegLogI, setRegLogI] = useState("");
  const [RegName, setRegName] = useState("");
  const [RegMobile, setRegMobile] = useState("");
  const [ReDob, setRegDob] = useState("");
  const [RegGender, setRegGender] = useState("");
  const [RegEmail, setRegEmail] = useState("");
  const [RegRelation, setRegRelation] = useState("");
  const [RegHouseNo, setRegHouseNo] = useState("");
  const [RegStreetName, setRegStreetName] = useState("");
  const [RegColony, setRegColony] = useState("");
  const [RegTownCity, setRegTownCity] = useState("");
  const [RegTeheshil, setRegTeheshil] = useState("");
  const [RegPinCode, setRegPinCode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const navigate = useNavigate();
  const db = getDatabase();
  const [email, setEmail] = useState(""); 
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      // Redirect unauthenticated users to login page or display a message
      console.log("User not authenticated. Redirecting to login page...");
    } else {
      // User is authenticated, proceed with rendering the form
      console.log("User authenticated:", currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    // Retrieve user data from location state
    if (location.state) {
      setEmail(location.state.email);
    }
  }, [location.state]); 

  const handleSaveAndSubmit = async () => {
     // Upload additional data to Realtime Database
     if (currentUser && currentUser.email !== RegLogI) {
      console.error("Error: Provided email does not match the current user's email");
      return; // Exit the function if the emails don't match
    }
     try {
      await set(ref(db, `users/${currentUser.uid}/userdetails`), {
        RegLogI:RegLogI,
        RegName:RegName,
        RegMobile:RegMobile,
        ReDob:ReDob,
        RegGender:RegGender,
        RegEmail:RegEmail,
        RegRelation:RegRelation,
        // Add other fields as needed
      });
      await set(ref(db, `users/${currentUser.uid}/userdetails/permanentAddress`), {
        country: country,
        state: state,
        district: district,
        policeStation: policeStation,
      });

      console.log("Data saved successfully!");
      window.alert("Data added successfully!");
      navigate("/incidentdetails"); // Redirect to the next page after successful submission
    } catch (error) {
      console.error("Error adding data: ", error);
    }
 
  };





  const handleGetOtpClick = () => {
    setShowOtpInput(true);
  };

  const handleVerifyClick = () => {
    // Implement OTP verification logic here
  };
  const countries = [
    { id: 1, name: "India" },
    // Add more countries as needed
  ];
  
  const states = [
    { id: 1, name: "Maharashtra", countryId: 1 },
    // Add more states as needed
  ];
  
  const districts = [
    { id: 1, name: "Ahmednagar", stateId: 1 },
    { id: 2, name: "Akola", stateId: 1 },
    { id: 3, name: "Amravati", stateId: 1 },
    { id: 4, name: "Aurangabad", stateId: 1 },
    { id: 5, name: "Beed", stateId: 1 },
    { id: 6, name: "Bhandara", stateId: 1 },
    { id: 7, name: "Buldhana", stateId: 1 },
    { id: 8, name: "Chandrapur", stateId: 1 },
    { id: 9, name: "Dhule", stateId: 1 },
    { id: 10, name: "Gadchiroli", stateId: 1 },
    { id: 11, name: "Gondia", stateId: 1 },
    { id: 12, name: "Hingoli", stateId: 1 },
    { id: 13, name: "Jalgaon", stateId: 1 },
    { id: 14, name: "Jalna", stateId: 1 },
    { id: 15, name: "Kolhapur", stateId: 1 },
    { id: 16, name: "Latur", stateId: 1 },
    { id: 17, name: "Mumbai City", stateId: 1 },
    { id: 18, name: "Mumbai Suburban", stateId: 1 },
    { id: 19, name: "Nagpur", stateId: 1 },
    { id: 20, name: "Nanded", stateId: 1 },
    { id: 21, name: "Nandurbar", stateId: 1 },
    { id: 22, name: "Nashik", stateId: 1 },
    { id: 23, name: "Osmanabad", stateId: 1 },
    { id: 24, name: "Palghar", stateId: 1 },
    { id: 25, name: "Parbhani", stateId: 1 },
    { id: 26, name: "Pune", stateId: 1 },
    { id: 27, name: "Raigad", stateId: 1 },
    { id: 28, name: "Ratnagiri", stateId: 1 },
    { id: 29, name: "Sangli", stateId: 1 },
    { id: 30, name: "Satara", stateId: 1 },
    { id: 31, name: "Sindhudurg", stateId: 1 },
    { id: 32, name: "Solapur", stateId: 1 },
    { id: 33, name: "Thane", stateId: 1 },
    { id: 34, name: "Wardha", stateId: 1 },
    { id: 35, name: "Washim", stateId: 1 },
    { id: 36, name: "Yavatmal", stateId: 1 },
    // Add more districts as needed
  ];
  
  const policeStations = [
    // Ahmednagar
    { id: 1, name: "Ahmednagar City", districtId: 1 },
    { id: 2, name: "Ahmednagar Camp", districtId: 1 },
    { id: 3, name: "Jamkhed", districtId: 1 },
    // Akola
    { id: 4, name: "Akola City", districtId: 2 },
    { id: 5, name: "Barshitakli", districtId: 2 },
    { id: 6, name: "Akot", districtId: 2 },
    // Amravati
    { id: 7, name: "Amravati City", districtId: 3 },
    { id: 8, name: "Amravati Camp", districtId: 3 },
    { id: 9, name: "Daryapur", districtId: 3 },
    // Aurangabad
    { id: 10, name: "Aurangabad City", districtId: 4 },
    { id: 11, name: "Aurangabad Camp", districtId: 4 },
    { id: 12, name: "Chikhalthana", districtId: 4 },
    // Add more police stations as needed
    { id: 13, name: "Shivajinagar Police Station", districtId: 26 },
    { id: 14, name: "Bhavani Peth Police Station", districtId: 26 },
    { id: 15, name: "Wakad Police Station", districtId: 26 },
    { id: 15, name: "Hinjewadi Police Station", districtId: 26 },
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
                value={RegLogI}
                onChange={(e) => setRegLogI(e.target.value)} 
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
                value={RegName}
                onChange={(e) => setRegName(e.target.value)} // Use the provided value directly
              />
            </div>
            <div className="vertical_input">
              <p className="vi_text">Mobile :</p>
              <input
                type="number"
                className="vi_input"
                placeholder="Enter your mobile number"
                value={RegMobile}
                onChange={(e) => setRegMobile(e.target.value)} 
              />
            </div>
            <div className="vertical_input">
              <p className="vi_text">Date of Birth :</p>
              <input type="date" className="vi_input"   value={ReDob}
                onChange={(e) => setRegDob(e.target.value)}  />
            </div>
            <div className="vertical_input">
              <p className="vi_text">Gender :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter your gender"
                value={RegGender}
                onChange={(e) => setRegGender(e.target.value)} 
              />
            </div>
            <div className="vertical_input">
              <p className="vi_text">Email ID :</p>
              <div className="emailotp">
                <input
                  type="text"
                  className="vi_input_email"
                  placeholder="Enter your email ID"
                  value={RegEmail}
                  onChange={(e) => setRegEmail(e.target.value)} 
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
                value={RegRelation}
                onChange={(e) => setRegRelation(e.target.value)} 
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
                      value={RegHouseNo}
                      onChange={(e) => setRegHouseNo(e.target.value)} 
                    />
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">Street Name :</p>
                    <input
                      type="text"
                      className="PA_vi_input"
                      placeholder="Enter your Street Name"
                      value={RegStreetName}
                      onChange={(e) => setRegStreetName(e.target.value)} 
                    />
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">Colony :</p>
                    <input
                      type="text"
                      className="PA_vi_input"
                      placeholder="Enter your Colony"
                      value={RegColony}
                      onChange={(e) => setRegColony(e.target.value)} 
                    />
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">Town/City :</p>
                    <input
                      type="text"
                      className="PA_vi_input"
                      placeholder="Enter your Town/City"
                      value={RegTownCity}
                      onChange={(e) => setRegTownCity(e.target.value)} 
                    />
                  </div>
                  <div className="PA_vertical_input">
                    <p className="PA_vi_text">Teheshil :</p>
                    <input
                      type="text"
                      className="PA_vi_input"
                      placeholder="Enter your Teheshil"
                      value={RegTeheshil}
                      onChange={(e) => setRegTeheshil(e.target.value)} 
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
                      value={RegPinCode}
                      onChange={(e) => setRegPinCode(e.target.value)} 
                    />
                  </div>
                </div>
              </div>
              <p className="text_h1">(AlphaNumeric and Symbols like @ , . / () _ - : ; are allowed. Do not use any special characters.)</p>
              <Link className="save_btn" onClick={handleSaveAndSubmit}>
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
