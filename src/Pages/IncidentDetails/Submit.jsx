import React, { useState, useEffect } from "react";
import "./Submit.css";
import Em from "../../components/Emergency/Em";
import UFPred from "../UserDetails/UserForm/UFP_red";
import IDX from "./IDX";
import UPbar from "../UserDetails/Userprofilebar/UP_bar";
import { useAuth } from "../../FirebaseCongfig/AuthContext"; // Import the useAuth hook
import { getDatabase, ref, get } from "firebase/database";

const Submit = () => {
  const { currentUser } = useAuth(); // Get currentUser from the authentication context
  const [incidentDetails, setIncidentDetails] = useState(null);
  const db = getDatabase();

  useEffect(() => {
    const incidentID = localStorage.getItem("incidentID"); // Get incident ID from local storage

    if (currentUser && incidentID) {
      const incidentRef = ref(db, `users/${currentUser.uid}/incidentdetails/${incidentID}`);
      get(incidentRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setIncidentDetails(snapshot.val());
          } else {
            console.log("No incident details found for the current user");
          }
        })
        .catch((error) => {
          console.error("Error fetching incident details:", error);
        });
    }
  }, [currentUser, db]);

  return (
    <div className="CD_component">
      <div className="CD_innercomponent">
      <Em />
        <div className="UD_up_bar"></div>
        <UPbar />
        <div className="UD_up_bar"></div>
        <UFPred />
        <div className="UD_up_bar"></div>
        <IDX />
      <div className="CSD_innerComp2">
        <div className="complaintdetails_bar">
          <p className="comp_text">Complaint Details</p>
        </div>
        {incidentDetails && (
          <div className="incident-details">
            <p>Incident</p>
            <p>Complaint Category: {incidentDetails.complaintCategory}</p>
            <p>Sub Category: {incidentDetails.subCategory}</p>
            <p>Other: {incidentDetails.other}</p>
            <p>Date and Time: {incidentDetails.DateTime}</p>
            <p>Place: {incidentDetails.Place}</p>
            <p>Email: {incidentDetails.Email}</p>
            <p>Description: {incidentDetails.Description}</p>
            <p>Delay in Reporting: {incidentDetails.delayReporting}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default Submit;
