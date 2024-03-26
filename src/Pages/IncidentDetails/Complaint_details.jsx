import React from "react";
import "./Complaint_details.css";
import Em from "../../components/Emergency/Em";
import UFP_red from "../UserDetails/UserForm/UFP_red";
import IDX from "./IDX";

const Complaint_details = () => {
  return (
    <div className="CD_component">
      <div className="CD_innercomponent">
        <Em />
        <div className="UD_up_bar"></div>
        <UFP_red />
        <div className="UD_up_bar"></div>
        <IDX />
        <div className="CSD_innerComp2">
            Heloooooo
        </div>
      </div>
    </div>
  );
};

export default Complaint_details;
