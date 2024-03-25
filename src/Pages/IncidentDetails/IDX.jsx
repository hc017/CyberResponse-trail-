import React from "react";
import { NavLink,Link } from "react-router-dom";
import "./ID.css"

const IDX = () => {
  return (
    <div className="ID_form_component">
      <div className="ID_form_bar">
        <NavLink to="/incidentdetails" className="form_comp" activeClassName="active-link">Incident Details</NavLink>
        <NavLink to="/suspectdetails" className="form_comp" activeClassName="active-link">
          Suspect Details
        </NavLink>
        <NavLink to="/complaintdetails" className="form_comp" activeClassName="active-link">Complaint Details</NavLink>
        <NavLink to="/submit" className="form_comp" activeClassName="active-link">Preview & Submit</NavLink>
      </div>
    </div>
  );
};

export default IDX;
