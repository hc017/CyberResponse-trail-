import React from 'react';
import './IncidentTable.css';

const IncidentTable = ({ incidents, onSelectIncident, onRequestIncident }) => {
  return (
    <table className="incident-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
          {onRequestIncident && <th>Action</th>} {/* Add action column */}
        </tr>
      </thead>
      <tbody>
        {incidents.map((incident) => (
          <tr key={incident.id} onClick={() => onSelectIncident(incident)}>
            <td>{incident.id}</td>
            <td>{incident.title}</td>
            <td>{incident.status}</td>
            {onRequestIncident && (
              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent selecting the row
                    onRequestIncident(incident); // Handle request
                  }}
                >
                  Request
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IncidentTable;
