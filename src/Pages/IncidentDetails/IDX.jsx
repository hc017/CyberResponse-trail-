import React from "react";
import { Link } from "react-router-dom";

const IDX = () => {
  return (
    <div className="ID_form_component">
      <div className="ID_form_bar">
        <Link className="form_comp">Incident Details</Link>
        <Link to="/suspectdetails" className="form_comp">
          Suspect Details
        </Link>
        <Link className="form_comp">Complaint Details</Link>
        <Link className="form_comp">Preview & Submit</Link>
      </div>
    </div>
  );
};

export default IDX;
