import React, { useState } from 'react';
import IncidentTable from './DashboadComponents/IncidentTable';
import IncidentDetails from './DashboadComponents/IncidentDetails';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // List of all incidents
  const allIncidents = [
    { id: 1, title: 'Broken light', status: 'Open' },
    { id: 2, title: 'Leaky faucet', status: 'In Progress' },
    { id: 3, title: 'Missing documents', status: 'Closed' },
  ];

  // List of incidents assigned to the admin
  const [assignedIncidents, setAssignedIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // Track active tab

  const handleSelectIncident = (incident) => {
    setSelectedIncident(incident);
  };

  const handleRequestIncident = (incident) => {
    if (!assignedIncidents.some((i) => i.id === incident.id)) {
      setAssignedIncidents([...assignedIncidents, incident]);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <div className="tab" onClick={() => setActiveTab('all')}>
          All Incidents
        </div>
        <div className="tab" onClick={() => setActiveTab('assigned')}>
          Assigned Incidents
        </div>
      </div>

      <div className="content">
        {activeTab === 'all' ? (
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
