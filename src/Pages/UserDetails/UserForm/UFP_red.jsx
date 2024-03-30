import React from 'react'
import "./UFP_red.css"
import { NavLink } from "react-router-dom";
import { CiFileOn } from "react-icons/ci";
import { LuFileOutput } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const UFP_red = () => {
  return (
    <div className="UFP_container">
      <NavLink to="/draftcomplaint" className="UFP_complaint_bar">
      <CiFileOn className='ufp_icons'/>
        <p className="UFP_text">Draft Complaint</p>
      </NavLink>
      <NavLink to="/incidentdetails" className="UFP_complaint_bar">
      <CiFileOn className='ufp_icons'/>
        <p className="UFP_text">Report Cyber Crime</p>
      </NavLink>
      <NavLink to="/checkstatus" className="UFP_complaint_bar">
      <ImCross className='ufp_icon_status'/>
        <p className="UFP_text">Check Status</p>
      </NavLink>
      <NavLink to="/complaintwithdrw" className="UFP_complaint_bar">
      <LuFileOutput className='ufp_icons'/>
        <p className="UFP_text">Complaint Withdraw </p>
      </NavLink>
      <NavLink to="/updatephone" className="UFP_complaint_bar">
      <IoCall className='ufp_icon_phn'/>
        <p className="UFP_text">Update Mobile Number</p>
      </NavLink>
      <NavLink to="/userd" className="UFP_complaint_bar">
      <FaUser className='ufp_icon_user'/>
        <p className="UFP_text">User Profile</p>
      </NavLink>
    </div>
  )
}

export default UFP_red