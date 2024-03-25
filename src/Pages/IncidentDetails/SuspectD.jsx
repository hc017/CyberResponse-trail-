import React from "react";
import "./Suspect.css";
import { Link } from "react-router-dom";
import Em from "../../components/Emergency/Em"
import UFP_red from '../UserDetails/UserForm/UFP_red'
import IDX from "./IDX";

const SuspectD = () => {
  const handleChooseFile = () => {
    // Implement file selection logic here
    // This function will be called when the "Choose" input is clicked
  };

  return (
    <div className="SD_component">
      <div className="SD_innercomponent">
      <Em/>
        <div className="UD_up_bar"></div>
        <UFP_red />
        <div className="UD_up_bar"></div>
        <IDX/>
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
            <input type="radio" className="ss_radio1" name="address" value="Yes" />
            <p className="sus_text3">
              I would like the information about suspected criminal provided by
              me be shared with all agencies and organization involved in
              prevention of cybercrime.
            </p>
          </div>
          <div className="UD_up_bar"></div>
          <p className="sus_text3">
            * Please do not share suspect mobile number in other field.
          </p>
          <div className="suspect_block">
            <input
              type="text"
              className="SS_vi_input1"
              placeholder="Suspect Name"
            />
            <input
              type="text"
              className="SS_vi_input2"
              placeholder="--Select--"
            />
            <input
              type="Number"
              className="SS_vi_input3"
              placeholder="ID Number"
            />
            <Link className="SS_button">Add</Link>
          </div>
          <div className="div_block"></div>
          <div className="suspect_bock2">
            <p className="sus_up_text">
              Please upload any photograph of suspect: <br /> (Upload
              JPG/JPEG/PNG/PDF file of max 5 MB.)
            </p>
            <input
              type="file"
              className="SS_vi_input3"
              onClick={handleChooseFile}
              style={{ display: "none" }}
            />
            <input
              type="text"
              className="SS_vi_input3"
              placeholder="No File Chosen"
              onClick={() => document.querySelector('.SS_vi_input3[type="file"]').click()}
              readOnly
            />
            <Link className="SS_button">Upload</Link>
          </div>
          <div className="div_block2">
            {/* Table for displaying uploaded files */}
            <table>
              {/* Add table rows and cells here */}
            </table>
          </div>
          <div className="sus_final_agree">
            <p className="sus_up_text">
              Do you want to share the address of the suspect?
            </p>
            <input type="radio" className="ss_radio" name="address" value="Yes" />
            <label className="ss_radio_name">Yes</label>
            <input type="radio" className="ss_radio" name="address" value="No" />
            <label className="ss_radio_name">No</label>
          </div>
          <div className="div_block3"></div>
          <div className="ss_btns">
            <Link className="ss_save_btn1">Back</Link>
            <Link className="ss_save_btn2">Save and Submit</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuspectD;
