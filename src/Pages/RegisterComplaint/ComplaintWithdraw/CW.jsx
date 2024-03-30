import React, { useState } from "react";
import "./CW.css";
import Em from "../../../components/Emergency/Em";
import UFP_red from "../../UserDetails/UserForm/UFP_red";
import UP_bar from "../../UserDetails/Userprofilebar/UP_bar";

const CW = () => {
  const [statusData, setStatusData] = useState([]);

  // Function to fetch status data when Search button is clicked
  const handleSearch = () => {
    // Implement your API call or data fetching logic here
    // Replace the dummy data below with your fetched data
    const dummyData = [
      {
        id: 1,
        requestDate: "2024-03-27",
        status: "Pending",
        subject: "Subject 1",
        lastUpdate: "2024-03-27 10:00:00",
      },
      {
        id: 2,
        requestDate: "2024-03-28",
        status: "Completed",
        subject: "Subject 2",
        lastUpdate: "2024-03-28 12:00:00",
      },
      {
        id: 3,
        requestDate: "2024-03-29",
        status: "Pending",
        subject: "Subject 3",
        lastUpdate: "2024-03-29 08:00:00",
      },
      // Add more data as needed
    ];
    setStatusData(dummyData);
  };

  const handleAction = (id) => {
    // Implement your action logic here based on the provided ID
    console.log(`Action clicked for ID: ${id}`);
  };

  return (
    <div className="CW_component">
      <div className="CW_innercomponent">
        <Em />
        <div className="UD_up_bar"></div>
        <UP_bar />
        <div className="UD_up_bar"></div>
        <UFP_red />
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
                <th>Subject</th>
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
                  <td>{status.subject}</td>
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
