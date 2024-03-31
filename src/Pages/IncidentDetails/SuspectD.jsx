import React, { useState } from "react";
import "./Suspect.css";
import { Link } from "react-router-dom";
import Em from "../../components/Emergency/Em";
import UFP_red from "../UserDetails/UserForm/UFP_red";
import IDX from "./IDX";
import { useParams } from "react-router-dom";
import UP_bar from "../UserDetails/Userprofilebar/UP_bar";
import { useAuth } from "../../FirebaseCongfig/AuthContext"; // Import the useAuth hook
import { getDatabase, ref, push, set } from "firebase/database";

const SuspectD = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [suspectName, setSuspectName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [fileChosen, setFileChosen] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [suspectData, setSuspectData] = useState([]);
  const { incidentId } = useParams();
  const { currentUser } = useAuth(); // Get currentUser from the authentication context
  const db = getDatabase(); // Get a reference to the Realtime Database
  

  const handleAddSuspect = async () => {
    const newSuspect = {
      name: suspectName,
      option: selectedOption,
      id: idNumber,
      
    };
    setSuspectData([...suspectData, newSuspect]);
    setShowTable(true);
    // Clear form fields
    setSuspectName("");
    setSelectedOption("");
    setIdNumber("");
  
  
    // Prepare data to store in Realtime Database
    const data = {
      name: suspectName,
      option: selectedOption,
      id: idNumber,

    };
  
    try {
      // Generate a unique ID for the suspect
      const newSuspectRef = push(ref(db, `users/${currentUser.uid}/incidentdetails/${incidentId}/suspects`));
    
      // Store suspect data in Realtime Database with the unique ID
      await set(newSuspectRef, data);
      console.log("Suspect data saved successfully!");
      window.alert("Suspect added successfully!");

    } catch (error) {
      console.error("Error adding suspect data: ", error);
    }
  };
  const handleDelete = (index) => {
    const updatedSuspectData = [...suspectData];
    updatedSuspectData.splice(index, 1);
    setSuspectData(updatedSuspectData);
  };

  const handleClearTable = () => {
    setSuspectData([]);
    setShowTable(false);
  };

  return (
    <div className="SD_component">
      <div className="SD_innercomponent">
        <Em />
        <div className="UD_up_bar"></div>
        <UP_bar />
        <div className="UD_up_bar"></div>
        <UFP_red />
        <div className="UD_up_bar"></div>
        <IDX />
        <div className="SD_innerComp2">
          <div className="susdetail_bar">
            <p className="sus_text">Suspect Details</p>
          </div>
          <div className="UD_up_bar"></div>
          <div className="susdetail_bar">
            <p className="sus_text2">
              Please share the details of the suspect. Any information provided
              will be kept confidential and may help during the investigation.
            </p>
          </div>
          <div className="sus_agree">
            <div className="sus_checkbox"></div>
            <input
              type="checkbox"
              className="ss_radio1"
              name="address"
              value="Yes"
              checked={isCheckboxChecked}
              onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
            />
            <p className="sus_text3">
              I would like the information about suspected criminal provided by
              me to be shared with all agencies and organizations involved in
              prevention of cybercrime.
            </p>
          </div>
          {isCheckboxChecked && (
            <div>
              <div className="UD_up_bar"></div>
              <p className="sus_text3">
                * Please do not share the suspect's mobile number in other fields.
              </p>
              <div className="suspect_block">
                <input
                  type="text"
                  className="SS_vi_input1"
                  placeholder="Suspect Name"
                  value={suspectName}
                  onChange={(e) => setSuspectName(e.target.value)}
                />
                 <select
                  className="SS_vi_input2"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="">--Select--</option>
                  <option value="Option1">Option 1</option>
                  <option value="Option2">Option 2</option>
                  <option value="Option3">Option 3</option>
                </select>
                <input
                  type="Number"
                  className="SS_vi_input3"
                  placeholder="ID Number"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                />
                <button onClick={handleAddSuspect} className="SS_button">Add</button>
              </div>
              {showTable && (
                <div className="div_block2">
                  <table>
                    <thead>
                      <tr>
                        <th>Suspect Name</th>
                        <th>Selected Option</th>
                        <th>ID Number</th>
                        <th>File Chosen</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {suspectData.map((suspect, index) => (
                        <tr key={index}>
                          <td>{suspect.name}</td>
                          <td>{suspect.option}</td>
                          <td>{suspect.id}</td>
                          <td>{suspect.file}</td>
                          <td>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="div_block"></div>
              <div className="suspect_bock2">
                <p className="sus_up_text">
                  Please upload any photograph of the suspect: <br /> (Upload
                  JPG/JPEG/PNG/PDF file of max 5 MB.)
                </p>
                <input
                  type="file"
                  className="SS_vi_input3"
                 
                  style={{ display: "none" }}
                />
                <input
                  type="text"
                  className="SS_vi_input3"
                  placeholder="No File Chosen"
                  value={fileChosen}
                  onClick={() =>
                    document
                      .querySelector('.SS_vi_input3[type="file"]')
                      .click()
                  }
                  readOnly
                />
                <button onClick={handleClearTable} className="SS_button">Clear</button>
              </div>
            </div>
          )}
          <div className="div_block3"></div>
          <div className="ss_btns">
            <Link className="ss_save_btn1">Back</Link>
            <Link  className="ss_save_btn2">
              Save and Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuspectD;
