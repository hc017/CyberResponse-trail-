
import React, { useState, useEffect } from "react";
import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { jsPDF } from "jspdf";
import "./Complaint_details.css";
import Em from "../../components/Emergency/Em";
import UFP_red from "../UserDetails/UserForm/UFP_red";
import IDX from "./IDX";
import UP_bar from "../UserDetails/Userprofilebar/UP_bar";
import { useAuth } from "../../FirebaseCongfig/AuthContext";
import { getDatabase, ref, get } from "firebase/database";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const ComplaintPDF = ({ incidents }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {incidents.map((incident, index) => (
        <View key={index} style={styles.section}>
          <Text>Incident {index + 1}</Text>
          <Text>Complaint Category: {incident.complaintCategory}</Text>
          <Text>Sub Category: {incident.subCategory}</Text>
          <Text>Date and Time: {incident.DateTime}</Text>
          <Text>Place: {incident.Place}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

const Complaint_details = () => {
  const { currentUser } = useAuth();
  const [incidentDetails, setIncidentDetails] = useState([]);
  const [showPDF, setShowPDF] = useState(false);
  const db = getDatabase();

  useEffect(() => {
    const incidentID = localStorage.getItem("incidentID"); // Get incident ID from local storage
    if (currentUser && incidentID) {
      const incidentRef = ref(db, `users/${currentUser.uid}/incidentdetails/${incidentID}`); // Fetch only the incident details with the specific incident ID
      get(incidentRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setIncidentDetails([snapshot.val()]); // Update state with the fetched incident details
          } else {
            console.log("No incident details found for the current user");
            setIncidentDetails([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching incident details:", error);
        });
    }
  }, [currentUser, db]);

  const togglePDFPreview = () => {
    setShowPDF(!showPDF);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Complaint Details", 20, 30);
    incidentDetails.forEach((incident, index) => {
      const startY = 40 + index * 50;
      doc.setFontSize(14);
      doc.text(`Incident ${index + 1}`, 20, startY);
      doc.setFontSize(12);
      doc.text(`Complaint Category: ${incident.categories}`, 20, startY + 10);
      doc.text(`Sub Category: ${incident.subcategories}`, 20, startY + 20);
      doc.text(`Date and Time: ${incident.DateTime}`, 20, startY + 30);
      doc.text(`Place: ${incident.Place}`, 20, startY + 40);
    });
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
          <div>
            <button onClick={togglePDFPreview}>
              {showPDF ? "Hide PDF Preview" : "Show PDF Preview"}
            </button>
            {showPDF && (
              <div>
                <PDFViewer style={{ width: "100%", height: "500px" }}>
                  <ComplaintPDF incidents={incidentDetails} />
                </PDFViewer>
                <button onClick={downloadPDF}>Download PDF</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint_details;
