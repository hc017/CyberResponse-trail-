
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, push, set } from "firebase/database";
import { useAuth } from "../../FirebaseCongfig/AuthContext"; // Import the useAuth hook
import { useNavigate } from "react-router-dom";
import "./ID_main.css";
import Em from "../../components/Emergency/Em";
import UFP_red from "../UserDetails/UserForm/UFP_red";
import { Link} from "react-router-dom";
import UP_bar from "../UserDetails/Userprofilebar/UP_bar";

import IDX from "./IDX";

const ID_main = () => {
  const [complaintCategory, setComplaintCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [ICdob, setICdob] = useState("");
  const [ICplace, setICPlace] = useState("");
  const [ICemail, setICEmail] = useState("");
  const [other, setOther] = useState("");
  const [delayReporting, setDelayReporting] = useState("");
  const maxChars = 1500;
  const [inputValue, setInputValue] = useState("");
  const [charsLeft, setCharsLeft] = useState(maxChars);
  const { currentUser } = useAuth();
  const db = getDatabase();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch categories
    const categoriesRef = ref(getDatabase(), "victim/maincategory/");
    onValue(categoriesRef, (snapshot) => {
      const categoriesData = snapshot.val();
      if (categoriesData) {
        const categoriesArray = Object.values(categoriesData);
        setCategories(categoriesArray);
        
        // Auto-select the dropdown if the input matches any category
        if (categoriesArray.includes(categories)) {
          setComplaintCategory(categories);
        }
      }
    });

    // Fetch subcategories
    const subcategoriesRef = ref(getDatabase(), "victim/subcategory/");
    onValue(subcategoriesRef, (snapshot) => {
      const subcategoriesData = snapshot.val();
      if (subcategoriesData) {
        const subcategoriesArray = Object.values(subcategoriesData);
        setSubcategories(subcategoriesArray);
        
        // Auto-select the dropdown if the input matches any subcategory
        if (subcategoriesArray.includes(subcategories)) {
          setSubCategory(subcategories);
        }
      }
    });
  }, [categories, subcategories]);

  const handleSaveAndSubmit = async () => {
    // Prepare data to store in Realtime Database
    const data = {
      complaintCategory: categories,
      subCategory: subcategories,
      other: other,
      DateTime: ICdob,
      Place: ICplace,
      Email: ICemail,
      Description: inputValue,
      delayReporting: delayReporting,
    };

    try {
      // Generate a unique ID for the incident
      const incidentID = generateIncidentID();
      await set(ref(db, `users/${currentUser.uid}/incidentdetails/${incidentID}`), data);
      await set(ref(db, `incidents/${currentUser.uid}/incidentdetails/${incidentID}`), data);
      console.log("Data saved successfully!");
      window.alert("Data added successfully!");
      navigate("/suspectdetails");
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };

  const generateIncidentID = () => {
    let categoryPrefix = "";
    let subCategoryPrefix = "";

    // Logic to generate ID based on complaintCategory and subCategory

    const incidentRef = ref(db, `users/${currentUser.uid}/incidentdetails`);
    const newIncidentRef = push(incidentRef);
    const newIncidentKey = newIncidentRef.key;
    const incidentsID = `${categoryPrefix}${newIncidentKey}${subCategoryPrefix}`;
    localStorage.setItem("incidentID", incidentsID); // Store incident ID in local storage
    return incidentsID;
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value; // The updated input value
    setInputValue(newValue); // Update the input field value
    setCharsLeft(maxChars - newValue.length); // Update the remaining characters
  };

  return (
    <div className="ISD_component">
      <div className="ISD_innercomponent">
        <Em />
        <UP_bar/>
        <div className="UD_up_bar">
          
        </div>
        <UFP_red />
        <div className="UD_up_bar"></div>
        <IDX />

        <div className="ISD_innerComp2">
          <div className="ISD_susdetail_bar">
            <p className="ISD_sus_text">Complaint/ Incident Details</p>
          </div>

          <div className="ISD_formComp_1">
            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Complaint Category:</p>
              <input
  type="text"
  className="ISD_vi_input"
  value={categories}
  readOnly
/>
            </div>

            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Sub Category:</p>
              <input
  type="text"
  className="ISD_vi_input"
  value={subcategories}
  readOnly
/>
            </div>

            <div className="ISD_block"></div>
          </div>

          <div className="ISDL_formComp_1">
            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Other (if any):</p>
              <input
                type="text"
                className="ISD_vi_input"
                placeholder="Enter your specific complaint category"
                value={other}
                onChange={(e) => setOther(e.target.value)}
              />
            </div>
            <div className="ISD_block"></div>
          </div>

          <div className="ISDL2_formComp_1">
            <div className="ISD_vertical_input">
              <p id="ISDT" className="ISD_vi_text">
                Appropriate date and time for incident/ receiving/ viewing of content:
              </p>
              <input
                type="datetime-local"
                className="ISD_vi_input"
                id="ISDI"
                placeholder="time"
                value={ICdob}
                onChange={(e) => setICdob(e.target.value)}
              />
            </div>

            <div className="ISD_vertical_input">
              <p className="ISD_vi_text" id="ISD_vi_text_id">
                Delay in reporting?:
              </p>
              <div className="radio_id_btn">
                <div className="radio_isd"></div>
                <input
                  type="radio"
                  placeholder="yes"
                  className="radio_isd_btn"
                  checked={delayReporting === "yes"}
                  onChange={() => setDelayReporting("yes")}
                />
                <label className="radio_text_isd" htmlFor="yes">
                  Yes
                </label>
                <input
                  type="radio"
                  placeholder="no"
                  className="radio_isd_btn"
                  checked={delayReporting === "no"}
                  onChange={() => setDelayReporting("no")}
                />
                <label className="radio_text_isd" htmlFor="no">
                  No
                </label>
              </div>
            </div>
            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Where did the incident occur?:</p>
              <input
                type="text"
                className="ISD_vi_input"
                placeholder="Enter the place of incident occured"
                value={ICplace}
                onChange={(e) => setICPlace(e.target.value)}
              />
            </div>
            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Email ID:</p>
              <input
                type="email"
                className="ISD_vi_input"
                placeholder="Enter your E-mail ID"
                value={ICemail}
                onChange={(e) => setICEmail(e.target.value)}
              />
            </div>

            <div className="ISD_vertical_input">
              <p className="ISD_vi_text" id="ISDE">
                Supporting Evidence (upload Image/ Media/ Pdf):
              </p>

              <input type="file" className="input-file" />
              <Link className="SS_button" id="ss_upload">
                Upload
              </Link>
            </div>

            <div className="ISD_block"></div>

            <div className="ISD_vertical_input" id="ISD_VI">
              <p className="ISD_vi_text" id="ISDA">
                Please provide any additional <br /> information about the incident:
              </p>
              <input
                type="text" // Changed to 'text' since it's not for email
                className="ISD_vi_input"
                id="ISDVII"
                placeholder="Enter the information here"
                value={inputValue} // Bound to the state value
                onChange={handleInputChange} // Event handler for input change
              />
              <p className="ISD_lasttext">(Maximum of 1500 characters: {charsLeft} characters left)</p>
            </div>
            <Link className="ss_save_btn2" id="ss_b" onClick={handleSaveAndSubmit}>
              Save and Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ID_main;

