import React from "react";
import { Link } from "react-router-dom";

const IDX = () => {
  return (
    <div className="ID_form_component">
      <div className="ID_form_bar">
        <Link to="/incidentdetails" className="form_comp">Incident Details</Link>
        <Link to="/suspectdetails" className="form_comp">
          Suspect Details
        </Link>
        <Link to="/complaintdetails" className="form_comp">Complaint Details</Link>
        <Link to="/submit" className="form_comp">Preview & Submit</Link>
      </div>
    </div>
  );
};

export default IDX;
