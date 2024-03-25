import React from 'react'
import "./UFP_red.css"
import { NavLink } from "react-router-dom";

const UFP_red = () => {
  return (
    <div className="UFP_container">
      <NavLink to="/draftcomplaint" className="UFP_complaint_bar">
        <p className="UFP_text">Draft Complaint</p>
      </NavLink>
      <NavLink to="/incidentdetails" className="UFP_complaint_bar">
        <p className="UFP_text">Report Cyber Crime</p>
      </NavLink>
      <NavLink to="/checkstatus" className="UFP_complaint_bar">
        <p className="UFP_text">Check Status</p>
      </NavLink>
      <NavLink to="/complaintwithdrw" className="UFP_complaint_bar">
        <p className="UFP_text">Complaint Withdraw </p>
      </NavLink>
      <NavLink to="/updatephone" className="UFP_complaint_bar">
        <p className="UFP_text">Update Mobile Number</p>
      </NavLink>
      <NavLink to="/userd" className="UFP_complaint_bar">
        <p className="UFP_text">User Profile</p>
      </NavLink>
    </div>
  )
}

export default UFP_red