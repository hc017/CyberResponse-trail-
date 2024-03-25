import React from "react";
import "./UserFormPanel.css";
import { NavLink } from "react-router-dom";

const UserFormPanel = () => {
  return (
    <div className="UF_container">
      <NavLink className="UF_complaint_bar">
        <p className="UF_text">Draft Complaint</p>
      </NavLink>
      <NavLink className="UF_complaint_bar">
        <p className="UF_text">Report Cyber Crime</p>
      </NavLink>
      <NavLink className="UF_complaint_bar">
        <p className="UF_text">Check Status</p>
      </NavLink>
      <NavLink className="UF_complaint_bar">
        <p className="UF_text">Complaint Withdraw</p>
      </NavLink>
      <NavLink className="UF_complaint_bar">
        <p className="UF_text">Update Mobile Number</p>
      </NavLink>
      <NavLink className="UF_complaint_bar">
        <p className="UF_text">User Profile</p>
      </NavLink>
    </div>
  );
};

export default UserFormPanel;
