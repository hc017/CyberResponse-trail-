import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf"; // Import jsPDF
import "./Complaint_details.css";
import Em from "../../components/Emergency/Em";
import UFP_red from "../UserDetails/UserForm/UFP_red";
import IDX from "./IDX";
import UP_bar from "../UserDetails/Userprofilebar/UP_bar";
import { useAuth } from "../../FirebaseCongfig/AuthContext"; // Import the useAuth hook
import { getDatabase, ref, get } from "firebase/database";

const Complaint_details = () => {
  const { currentUser } = useAuth(); // Get currentUser from the authentication context
  const [incidentDetails, setIncidentDetails] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    if (currentUser) {
      const incidentRef = ref(db, `users/${currentUser.uid}/incidentdetails`);
      get(incidentRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const incidentDetailsArray = [];
            snapshot.forEach((childSnapshot) => {
              const incident = childSnapshot.val();
              incidentDetailsArray.push(incident);
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

  // Function to generate and download a PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add a title
    doc.setFontSize(18);
    doc.text("Complaint Details", 20, 30);

    // Add details for each incident
    incidentDetails.forEach((incident, index) => {
      const startY = 40 + index * 50; // Space between incidents
      doc.setFontSize(14);
      doc.text(`Incident ${index + 1}`, 20, startY);
      doc.setFontSize(12);
      doc.text(`Complaint Category: ${incident.complaintCategory}`, 20, startY + 10);
      doc.text(`Sub Category: ${incident.subCategory}`, 20, startY + 20);
      doc.text(`Date and Time: ${incident.DateTime}`, 20, startY + 30);
      doc.text(`Place: ${incident.Place}`, 20, startY + 40);
    });

    // Download the PDF
    doc.save("complaint_details.pdf");
  };

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
          {incidentDetails.length === 0 ? (
            <p>No incident details found.</p>
          ) : (
            incidentDetails.map((incident, index) => (
              <div key={index} className="incident-details">
                <p>Incident {index + 1}</p>
                <p>Complaint Category: {incident.complaintCategory}</p>
                <p>Sub Category: {incident.subCategory}</p>
                <p>Date and Time: {incident.DateTime}</p>
                <p>Place: {incident.Place}</p>
              </div>
            ))
          )}

          {/* Button to download PDF */}
          <button onClick={downloadPDF}>Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default Complaint_details;
