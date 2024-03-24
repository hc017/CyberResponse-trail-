import React from 'react'
import "./UFP_red.css"

const UFP_red = () => {
  return (
    <div className="UFP_container">
      <button className="UFP_complaint_bar">
        <p className="UFP_text">Draft Complaint</p>
      </button>
      <button className="UFP_complaint_bar">
        <p className="UFP_text">Report Cyber Crime</p>
      </button>
      <button className="UFP_complaint_bar">
        <p className="UFP_text">Check Status</p>
      </button>
      <button className="UFP_complaint_bar">
        <p className="UFP_text">Complaint Withdraw</p>
      </button>
      <button className="UFP_complaint_bar">
        <p className="UFP_text">Update Mobile Number</p>
      </button>
      <button className="UFP_complaint_bar">
        <p className="UFP_text">User Profile</p>
      </button>
    </div>
  )
}

export default UFP_red