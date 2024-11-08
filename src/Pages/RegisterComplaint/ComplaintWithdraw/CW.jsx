import React, { useState } from "react";
import "./CW.css";
import Em from "../../../components/Emergency/Em";
import UFPRed from "../../UserDetails/UserForm/UFP_red";
import UPBar from "../../UserDetails/Userprofilebar/UP_bar";

const CW = () => {
  const [statusData, setStatusData] = useState([
    {
      id: 1,
      requestDate: "2024-05-05",
      status: "Open",
      case: "Email Phishing",
      lastUpdate: "2024-05-06 10:00:00",
    },
    {
      id: 2,
      requestDate: "2024-05-04",
      status: "Under Investigation",
      case: "Unauthorized Access",
      lastUpdate: "2024-05-06 12:00:00",
    },
    {
      id: 3,
      requestDate: "2024-05-02",
      status: "Closed",
      case: "Social Security Fraud",
      lastUpdate: "2024-05-03 08:00:00",
    },
    // Additional dummy data for cybercrime incidents
    {
      id: 4,
      requestDate: "2024-05-03",
      status: "Resolved",
      case: "Malicious Software",
      lastUpdate: "2024-05-04 09:30:00",
    },
    {
      id: 5,
      requestDate: "2024-05-01",
      status: "Under Investigation",
      case: "Trojan Horse",
      lastUpdate: "2024-05-03 11:45:00",
    },
  ]);

  const handleAction = (id) => {
    // Implement your action logic here based on the provided ID
    console.log(`Action clicked for ID: ${id}`);
  };

  return (
    <div className="CW_component">
      <div className="CW_innercomponent">
        <Em />
        <div className="UD_up_bar"></div>
        <UPBar />
        <div className="UD_up_bar"></div>
        <UFPRed />
        <div className="UD_up_bar"></div>
        <div className="UD_up_bar"></div>
        <div className="CW_innerform">
          <div className="CW_susdetail_bar">
            <p className="CW_sus_text">Complaint Withdraw</p>
          </div>
          <div className="CW_table">
            <table className="CW_status_table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Request Date</th>
                  <th>Case</th>
                  <th>Status</th>
                  <th>Last Update</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {statusData.map((status) => (
                  <tr key={status.id}>
                    <td>{status.id}</td>
                    <td>{status.requestDate}</td>
                    <td>{status.case}</td>
                    <td>{status.status}</td>
                    <td>{status.lastUpdate}</td>
                    <td>
                      <button
                        className="CW_actbtn"
                        onClick={() => handleAction(status.id)}
                      >
                        Withdraw
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CW;
