import React, { useState, useEffect } from "react";
import "./Complaint_details.css";
import Em from "../../components/Emergency/Em";
import UFP_red from "../UserDetails/UserForm/UFP_red";
import IDX from "./IDX";
import UP_bar from "../UserDetails/Userprofilebar/UP_bar";
import { useAuth } from "../../FirebaseCongfig/AuthContext"; // Import the useAuth hook
import { getDatabase, ref, child, get } from "firebase/database";

const Complaint_details = () => {
  const { currentUser } = useAuth(); // Get currentUser from the authentication context
  const [incidentDetails, setIncidentDetails] = useState(null);
  const db = getDatabase();

  useEffect(() => {
    if (currentUser) {
      const incidentRef = ref(db, `users/${currentUser.uid}/incidentdetails`);
      get(incidentRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const incidentDetailsArray = [];
            snapshot.forEach((childSnapshot) => {
              const incidentDetails = childSnapshot.val();
              incidentDetailsArray.push(incidentDetails);
            });
            setIncidentDetails(incidentDetailsArray);
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
      <UP_bar />
      <div className="UD_up_bar"></div>
      <UFP_red />
      <div className="UD_up_bar"></div>
      <IDX />
      <div className="CSD_innerComp2">
        <div className="complaintdetails_bar">
          <p className="comp_text">Complaint Details</p>
        </div>
        {incidentDetails && incidentDetails.map((incident, index) => (
          <div key={index} className="incident-details">
            <p>Incident {index + 1}</p>
            <p>Complaint Category: {incident.complaintCategory}</p>
            <p>Sub Category: {incident.subCategory}</p>
            <p>Other: {incident.other}</p>
            <p>Date and Time: {incident.DateTime}</p>
            <p>Place: {incident.Place}</p>
            <p>Email: {incident.Email}</p>
            <p>Description: {incident.Description}</p>
            <p>Delay in Reporting: {incident.delayReporting}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default Complaint_details;
