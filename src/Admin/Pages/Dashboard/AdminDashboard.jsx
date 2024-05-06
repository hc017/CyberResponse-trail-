import React, { useState } from "react";
import IncidentTable from "./DashboadComponents/IncidentTable";
import IncidentDetails from "./DashboadComponents/IncidentDetails";
import "./AdminDashboard.css";
import adlogo from "./Logo.png";
import {useNavigate} from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  // List of all incidents
  const allIncidents = [
    {
      id: 1,
      datetime: "2024-05-05 14:30:00",
      complaintCategory: "Phishing",
      subCategory: "Email Phishing",
      others: "Phishing attempt via email",
      place: "Corporate Office",
      status: "Open",
    },
    {
      id: 2,
      datetime: "2024-05-04 10:00:00",
      complaintCategory: "Hacking",
      subCategory: "Unauthorized Access",
      others: "Unauthorized access to server",
      place: "Data Center",
      status: "Under Investigation",
    },
    {
      id: 3,
      datetime: "2024-05-02 18:00:00",
      complaintCategory: "Identity Theft",
      subCategory: "Social Security Fraud",
      others: "Fraudulent use of Social Security number",
      place: "Remote",
      status: "Closed",
    },
    {
      id: 4,
      datetime: "2024-05-03 09:30:00",
      complaintCategory: "Ransomware",
      subCategory: "Malicious Software",
      others: "Ransomware attack on database",
      place: "Main Office",
      status: "Resolved",
    },
    {
      id: 5,
      datetime: "2024-05-01 12:00:00",
      complaintCategory: "Malware",
      subCategory: "Trojan Horse",
      others: "Trojan Horse detected on network",
      place: "Office Network",
      status: "Under Investigation",
    },
  ];

  // List of incidents assigned to the admin
  const [assignedIncidents, setAssignedIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [activeTab, setActiveTab] = useState("all"); // Track active tab

  const handleSelectIncident = (incident) => {
    setSelectedIncident(incident);
  };

  const handleRequestIncident = (incident) => {
    if (!assignedIncidents.some((i) => i.id === incident.id)) {
      setAssignedIncidents([...assignedIncidents, incident]);
    }
  };

  const gotohome = () =>{
    navigate('/');
  }

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <img className="adlogo" src={adlogo} alt="" />
        <h2>Admin Dashboard</h2>
        <div className="tab" onClick={() => setActiveTab("all")}>
          All Incidents
        </div>
        <div className="tab" onClick={() => setActiveTab("assigned")}>
          Assigned Incidents
        </div>
        <div className="tab" id="namead">
          <h3>hc@csadmin.com</h3>
        </div>
        <div  >
          <button id="btnad" onClick={gotohome}>Logout</button>
        </div>

      </div>

      <div className="content">
        {activeTab === "all" ? (
          <IncidentTable
            incidents={allIncidents}
            onSelectIncident={handleSelectIncident}
            onRequestIncident={handleRequestIncident} // New prop for request button
          />
        ) : (
          <IncidentTable
            incidents={assignedIncidents}
            onSelectIncident={handleSelectIncident}
          />
        )}

        {selectedIncident && (
          <IncidentDetails
            incident={selectedIncident}
            onUpdateStatus={(status) => {
              setSelectedIncident({ ...selectedIncident, status });
            }}
          />
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
