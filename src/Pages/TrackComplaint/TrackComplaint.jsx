import React from "react";
import "./TrackComplaint.css";
import Em from "../../components/Emergency/Em";
import { Link } from "react-router-dom";


const TrackComplaint = () => {
  return (
    <div className="TC_component">
      <div className="TC_innercomplaint">
        <Em />
        <div className="UD_up_bar"></div>
        <div className="TC_pagetrack">
        <Link to="/" className="TC_page_track">Home</Link>
        <Link to="/trackcomplaint" className="TC_page_track">Track A Complaint</Link>
        </div>
        <div className="UD_up_bar"></div>
        
      
      
      </div>
    </div>
  );
};

export default TrackComplaint;
