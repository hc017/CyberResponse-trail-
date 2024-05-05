import React, { useState } from 'react';
import './IncidentDetails.css';

const IncidentDetails = ({ incident, onUpdateStatus }) => {
  const [status, setStatus] = useState(incident.status);

  const handleUpdateStatus = () => {
    onUpdateStatus(status);
  };

  return (
    <div className="incident-details">
      <h3>Incident Details</h3>
      <p>ID: {incident.id}</p>
      <p>Title: {incident.title}</p>
      <p>Status: {incident.status}</p>

      <div className="status-update">
        <label htmlFor="status">Update Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
        <button onClick={handleUpdateStatus}>Update</button>
      </div>
    </div>
  );
};

export default IncidentDetails;
