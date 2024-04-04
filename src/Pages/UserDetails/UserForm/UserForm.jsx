
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
  const [title, setTitle] = useState("");
  const [famMemName, setFamMemName] = useState("");

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
        RegLogI: RegLogI,
        title: title,
        RegName: RegName,
        RegMobile: RegMobile,
        ReDob: ReDob,
        RegGender: RegGender,
        RegEmail: RegEmail,
        RegRelation: RegRelation,
        famMemName: famMemName,
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

  const titleOptions = [
    { id: 1, name: "Mr." },
    { id: 2, name: "Mrs." },
    { id: 3, name: "Miss" },
  ];

  const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Transgender" },
    { id: 4, name: "Prefer not to say" }
  ];

  const relations = [
    { id: 1, name: "Father" },
    { id: 2, name: "Mother" },
    { id: 3, name: "Spouse" },
  ];

  const countries = [
    { id: 1, name: "India" },
    // Add more countries as needed
  ];

  const states = [
    { id: 1, name: "Maharashtra", countryName: "India" },
    // Add more states as needed
  ];

  const districts = [
    { id: 1, name: "Ahmednagar", stateName: "Maharashtra" },
    { id: 2, name: "Akola", stateName: "Maharashtra" },
    { id: 3, name: "Amravati", stateName: "Maharashtra" },
    { id: 4, name: "Aurangabad", stateName: "Maharashtra" },
    { id: 5, name: "Beed", stateName: "Maharashtra" },
    { id: 6, name: "Bhandara", stateName: "Maharashtra" },
    { id: 7, name: "Buldhana", stateName: "Maharashtra" },
    { id: 8, name: "Chandrapur", stateName: "Maharashtra" },
    { id: 9, name: "Dhule", stateName: "Maharashtra" },
    { id: 10, name: "Gadchiroli", stateName: "Maharashtra" },
    { id: 11, name: "Gondia", stateName: "Maharashtra" },
    { id: 12, name: "Hingoli", stateName: "Maharashtra" },
    { id: 13, name: "Jalgaon", stateName: "Maharashtra" },
    { id: 14, name: "Jalna", stateName: "Maharashtra" },
    { id: 15, name: "Kolhapur", stateName: "Maharashtra" },
    { id: 16, name: "Latur", stateName: "Maharashtra" },
    { id: 17, name: "Mumbai City", stateName: "Maharashtra" },
    { id: 18, name: "Mumbai Suburban", stateName: "Maharashtra" },
    { id: 19, name: "Nagpur", stateName: "Maharashtra" },
    { id: 20, name: "Nanded", stateName: "Maharashtra" },
    { id: 21, name: "Nandurbar", stateName: "Maharashtra" },
    { id: 22, name: "Nashik", stateName: "Maharashtra" },
    { id: 23, name: "Osmanabad", stateName: "Maharashtra" },
    { id: 24, name: "Palghar", stateName: "Maharashtra" },
    { id: 25, name: "Parbhani", stateName: "Maharashtra" },
    { id: 26, name: "Pune", stateName: "Maharashtra" },
    { id: 27, name: "Raigad", stateName: "Maharashtra" },
    { id: 28, name: "Ratnagiri", stateName: "Maharashtra" },
    { id: 29, name: "Sangli", stateName: "Maharashtra" },
    { id: 30, name: "Satara", stateName: "Maharashtra" },
    { id: 31, name: "Sindhudurg", stateName: "Maharashtra" },
    { id: 32, name: "Solapur", stateName: "Maharashtra" },
    { id: 33, name: "Thane", stateName: "Maharashtra" },
    { id: 34, name: "Wardha", stateName: "Maharashtra" },
    { id: 35, name: "Washim", stateName: "Maharashtra" },
    { id: 36, name: "Yavatmal", stateName: "Maharashtra" },
    // Add more districts as needed
  ];

  const policeStations = [
    // Ahmednagar
    { id: 1, name: "Ahmednagar City", districtName: "Ahmednagar" },
    { id: 2, name: "Ahmednagar Camp", districtName: "Ahmednagar" },
    { id: 3, name: "Jamkhed", districtName: "Ahmednagar" },
    // Akola
    { id: 4, name: "Akola City", districtName: "Akola" },
    { id: 5, name: "Barshitakli", districtName: "Akola" },
    { id: 6, name: "Akot", districtName: "Akola" },
    // Amravati
    { id: 7, name: "Amravati City", districtName: "Amravati" },
    { id: 8, name: "Amravati Camp", districtName: "Amravati" },
    { id: 9, name: "Daryapur", districtName: "Amravati" },
    // Aurangabad
    { id: 10, name: "Aurangabad City", districtName: "Aurangabad" },
    { id: 11, name: "Aurangabad Camp", districtName: "Aurangabad" },
    { id: 12, name: "Chikhalthana", districtName: "Aurangabad" },
    // Add more police stations as needed
    { id: 13, name: "Shivajinagar Police Station", districtName: "Pune" },
    { id: 14, name: "Bhavani Peth Police Station", districtName: "Pune" },
    { id: 15, name: "Wakad Police Station", districtName: "Pune" },
    { id: 15, name: "Hinjewadi Police Station", districtName: "Pune" },
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
              <div className="title_dropdown">
                <select
                  name="title"
                  className="select_title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                >
                  <option value="">Select Title</option>
                  {titleOptions.map((title) => (
                    <option key={title.id} value={title.name}>
                      {title.name}
                    </option>
                  ))}
                </select>
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
              <div className="two_fields">
                <input
                  type="text"
                  className="vi_input"
                  id="num_extension"
                  value="+91"
                  readOnly
                />
                <input
                  type="tel"
                  className="vi_input"
                  id="mob_num"
                  placeholder="Enter your mobile number"
                  value={RegMobile}
                  onChange={(e) => setRegMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="vertical_input">
              <p className="vi_text">Date of Birth :</p>
              <input type="date" className="vi_input" value={ReDob}
                onChange={(e) => setRegDob(e.target.value)} />
            </div>
            <div className="vertical_input">
              <p className="vi_text">Gender :</p>
              <select
                className="vi_input"
                value={RegGender}
                onChange={(e) => setRegGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                {genders.map((RegGender) => (
                  <option key={RegGender.id} value={RegGender.name}>
                    {RegGender.name}
                  </option>
                ))}
              </select>

            </div>
            <div className="vertical_input">
              <p className="vi_text">Email ID :</p>
              <div className="emailotp" id="entermail">
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
                <div className="emailotp" id="enterotp">
                  <input
                    type="text"
                    className="vi_input_otp" id="vi_enterotp"
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
              <div className="two_fields">
                <select
                  className="vi_input" id="vi_relation"
                  value={RegRelation}
                  onChange={(e) => setRegRelation(e.target.value)}
                >
                  <option value="">Select Relation</option>
                  {relations.map((RegRelation) => (
                    <option key={RegRelation.id} value={RegRelation.name}>
                      {RegRelation.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="vi_input" id="vi_memName"
                  placeholder="Enter Father/Mother/Spouse name"
                  value={famMemName}
                  onChange={(e) => setFamMemName(e.target.value)}
                />
              </div>
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
                        <option key={country.id} value={country.name}>
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
                        .filter((s) => s.countryName === country)
                        .map((state) => (
                          <option key={state.id} value={state.name}>
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
                        .filter((d) => d.stateName === state)
                        .map((district) => (
                          <option key={district.id} value={district.name}>
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
                        .filter((p) => p.districtName === district)
                        .map((policeStation) => (
                          <option
                            key={policeStation.id}
                            value={policeStation.name}
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
