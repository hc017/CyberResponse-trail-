import React from "react";
import "./UserForm.css";

const UserForm = () => {
  return (
    <div className="UF_container">
      <button className="UF_complaint_bar">
        <p className="UF_text">Draft Complaint</p>
      </button>
      <button className="UF_complaint_bar">
        <p className="UF_text">Report Cyber Crime</p>
      </button>
      <button className="UF_complaint_bar">
        <p className="UF_text">Check Status</p>
      </button>
      <button className="UF_complaint_bar">
        <p className="UF_text">Complaint Withdraw</p>
      </button>
      <button className="UF_complaint_bar">
        <p className="UF_text">Update Mobile Number</p>
      </button>
      <button className="UF_complaint_bar">
        <p className="UF_text">User Profile</p>
      </button>
    </div>
  );
};

export default UserForm;
