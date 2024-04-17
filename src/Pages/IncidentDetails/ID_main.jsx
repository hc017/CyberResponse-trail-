import React from "react";
import "./ID_main.css";
import Em from "../../components/Emergency/Em";
import UFP_red from "../UserDetails/UserForm/UFP_red";
import IDX from "./IDX";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UP_bar from "../UserDetails/Userprofilebar/UP_bar";
import { useAuth } from "../../FirebaseCongfig/AuthContext";// Import the useAuth hook
import { getDatabase, ref, push, set, dbRef } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";

const ID_main = () => {
  const [count, setCount] = useState(1500);
  const location = useLocation();
  const [complaintCategory, setComplaintCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [ICdob, setICdob] = useState("");
  const [ICplace, setICPlace] = useState("");
  const [ICemail, setICEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [other, setOther] = useState("");
  const { currentUser } = useAuth(); // Get currentUser from the authentication context
  const db = getDatabase();
  const storage = getStorage();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChooseFile = (e) => {
    // Update selected file state when a file is chosen
    setSelectedFile(e.target.files[0]);
  };
  useEffect(() => {
    // Redirect unauthenticated users to login page or handle them accordingly
    if (!currentUser) {
      console.log("User not authenticated. Redirecting to login page...");
      // Navigate to login page or show a message
    } else {
      // User is authenticated, proceed with rendering the form
      console.log("User authenticated:", currentUser);
      setEmail(currentUser.email); // Set email directly from currentUser
    }
  }, [currentUser]);

  const handleSaveAndSubmit = async () => {
    //   // Upload file to Firebase Storage
    //   let fileUrl = "";
    //   if (selectedFile) {
    //     const fileRef = storageRef(storage, `users/${currentUser.uid}/incidentdetails/storage${selectedFile.name}`);
    //     await uploadBytes(fileRef, selectedFile);
    //     fileUrl = await ref.getDownloadURL(fileRef);
    //   }

    // Prepare data to store in Realtime Database
    const data = {
      complaintCategory: complaintCategory,
      subCategory: subCategory,
      other: other,
      DateofBirth: ICdob,
      Place: ICplace,
      Email: ICemail,
      // Add other form fields as needed
    };

    try {
      // Generate a unique ID for the incident
      const newIncidentRef = push(ref(db, `users/${currentUser.uid}/incidentdetails`));

      // Store form data in Realtime Database with the unique ID
      await set(newIncidentRef, data);
      console.log("Data saved successfully!");
      window.alert("Data added successfully!");
      navigate("/suspectdetails");
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };



  const complaintCategories = [
    { name: "Category A", subcategories: ["Subcategory A1", "Subcategory A2"] },
    { name: "Category B", subcategories: ["Subcategory B1", "Subcategory B2"] },
    { name: "Category C", subcategories: ["Subcategory C1", "Subcategory C2"] }
  ];

  const otherOptions = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="ISD_component">
      <div className="ISD_innercomponent">
        <Em />
        <div className="UD_up_bar"></div>
        <UP_bar />
        <div className="UD_up_bar"></div>
        <UFP_red />
        <div className="UD_up_bar"></div>
        <IDX />
        <div className="ISD_innerComp2">
          <div className="ISD_susdetail_bar">
            <p className="ISD_sus_text">Complaint/ Incident Details</p>
          </div>
          <div className="ISD_formComp_1">
            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Complaint Category :</p>
              <select
                className="ISD_vi_input"
                value={complaintCategory}
                onChange={(e) => {
                  setComplaintCategory(e.target.value);
                  setSubCategory("");
                }}
              >
                <option value="">Select Category</option>
                {complaintCategories.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            {complaintCategory === "Category A" && (
              <div className="ISD_vertical_input">
                <p className="ISD_vi_text">Sub Category :</p>
                <select
                  className="ISD_vi_input"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                >
                  <option value="">Select Subcategory</option>
                  {complaintCategories
                    .find((cat) => cat.name === "Category A")
                    .subcategories.map((sub, index) => (
                      <option key={index} value={sub}>
                        {sub}
                      </option>
                    ))}
                </select>
              </div>
            )}
            <div className="ISD_block"></div>
          </div>

          <div className="ISDL_formComp_1">
            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Other :</p>
              <select
                className="ISD_vi_input"
                value={other}
                onChange={(e) => setOther(e.target.value)}
              >
                <option value="">Select Option</option>
                {otherOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="ISD_block"></div>
          <div className="ISDL2_formComp_1">
            <div className="ISD_vertical_input">
              <p id="ISDT" className="ISD_vi_text">
                Appropriate date and time for incident/ receiving/
                viewing of content :
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
                Delay in reporting? :
              </p>
              <div className="radio_isd"></div>
              <input type="radio" placeholder="yes" className="radio_isd_btn" />
              <label className="radio_text_isd" htmlFor="yes">
                Yes
              </label>
              <input type="radio" placeholder="no" className="radio_isd_btn" />
              <label className="radio_text_isd" htmlFor="no">
                No
              </label>
            </div>
            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Where did the incident occur? :</p>
              <input type="text" className="ISD_vi_input" placeholder="Place"
                value={ICplace}
                onChange={(e) => setICPlace(e.target.value)} />
            </div>
            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Email ID: :</p>
              <input
                type="email"
                className="ISD_vi_input"
                placeholder="Enter your E-mail ID"
                value={ICemail}
                onChange={(e) => setICEmail(e.target.value)} />

            </div>
            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Supporting Evidence (upload Image/ Media/ Pdf):</p>
              <input
                type="file"
                className="ISD_vi_input-file"
                onChange={handleChooseFile}
              />
              <input
                type="text"
                className="ISD_vi_input-text"
                placeholder="No file Chosen"
                readOnly
                value={selectedFile ? selectedFile.name : ""}
              />
              <Link className="SS_button">Upload</Link>
            </div>
            <div className="ISD_block"></div>
            <div className="ISD_vertical_input" id="ISD_VI">
              <p className="ISD_vi_text">Please provide any additional <br /> information about the incident: :</p>
              <input
                type="email"
                className="ISD_vi_input"
                id="ISDVII"
                placeholder="Enter your E-mail ID"
              />

              <Link className="ss_save_btn2" id="ss_b" onClick={handleSaveAndSubmit}>Save and Submit</Link>

            </div>
            <p className="ISD_lasttext">Maximum of 1500 characters: {count} characters left</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ID_main;
