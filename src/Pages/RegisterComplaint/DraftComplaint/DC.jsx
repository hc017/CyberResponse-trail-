// import React, { useEffect, useState } from 'react'
// import "./DC.css"
// import Em from "../../../components/Emergency/Em";
// import UFP_red from "../../UserDetails/UserForm/UFP_red";
// import UP_bar from '../../UserDetails/Userprofilebar/UP_bar';
// import { useNavigate } from 'react-router-dom';

// const DC = () => {
//   const navigate = useNavigate(); 
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     // Fetch data from Firebase or any other source
//     const data = [
//       {
//         userId: "nfn-Nx9J3EBjxfVvjP7u1U8sxh",
//         dateTime: "2024-05-07 10:30",
//         place: "Instagram",
//         complaintCategory: "Non-Financial Fraud",
//         subCategory: "Sexual Harassment"
//       },
//       {
//         userId: "fn-Nx4GGeYVH-H6lZjhX8pbksm",
//         dateTime: "2024-05-08 11:45",
//         place: "",
//         complaintCategory: "Financial Fraud",
//         subCategory: "Bank Scams"
//       },
//       {
//         userId: "nfn-Nx4GiqE8Dui67rcto7rsmw",
//         dateTime: "2024-04-22 01:53",
//         place: "Pune",
//         complaintCategory: "Non-Financial Fraud",
//         subCategory: "Ransomware"
//       }
//     ];
//     setComplaints(data);
//   }, []);

//   const gotoComplaintPage=() =>{
//     navigate('/complaintdetails')
//   }

//   return (
//     <div className="DC_component">
//       <div className="DC_innercomponent">
//         <Em />
//         <div className="UD_up_bar"></div>
//         <UP_bar />
//         <div className="UD_up_bar"></div>
//         <UFP_red />
//         <div className="UD_up_bar"></div>

//         <div className="draft_table">
//           <div className="table-container">
//             <table className="datatable">
//               <thead>
//                 <tr>
//                   <th>User ID</th>
//                   <th>Date & Time</th>
//                   <th>Place</th>
//                   <th>Complaint Category</th>
//                   <th>Sub Category</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {complaints.map((complaint, index) => (
//                   <tr key={index}>
//                     <td>{complaint.userId}</td>
//                     <td>{complaint.dateTime}</td>
//                     <td>{complaint.place}</td>
//                     <td>{complaint.complaintCategory}</td>
//                     <td>{complaint.subCategory}</td>
//                     <td>
//                       <button className='open_button' onClick={() => gotoComplaintPage()}>
//                         Open
//                         <div class="arrow-wrapper">
//                           <div class="arrow"></div>
//                         </div>
//                       </button>

//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DC;

import React, { useEffect, useState } from 'react'
import "./DC.css"
import Em from "../../../components/Emergency/Em";
import UFPRed from "../../UserDetails/UserForm/UFP_red";
import UPBar from '../../UserDetails/Userprofilebar/UP_bar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../FirebaseCongfig/AuthContext"; // Import the useAuth hook
import { getDatabase, ref, get } from "firebase/database";

const DC = () => {
  const navigate = useNavigate(); 
  const { currentUser } = useAuth();
  const [incidentDetails, setIncidentDetails] = useState(null);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const db = getDatabase();
    if (currentUser) {
      const incidentID = localStorage.getItem("incidentID"); // Get incident ID from local storage
      const incidentRef = ref(db, `users/${currentUser.uid}/incidentdetails/${incidentID}`);
      get(incidentRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setIncidentDetails(snapshot.val());
            setUserID(currentUser.uid);
          } else {
            console.log("No incident details found for the current user");
          }
        })
        .catch((error) => {
          console.error("Error fetching incident details:", error);
        });
    }
  }, [currentUser]);

  const gotoComplaintPage=() =>{
    navigate('/complaintdetails')
  }

  return (
    <div className="DC_component">
      <div className="DC_innercomponent">
        <Em />
        <div className="UD_up_bar"></div>
        <UPBar />
        <div className="UD_up_bar"></div>
        <UFPRed />
        <div className="UD_up_bar"></div>

        <div className="draft_table">
          <div className="table-container">
            <table className="datatable">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Date & Time</th>
                  <th>Place</th>
                  <th>Complaint Category</th>
                  <th>Sub Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {incidentDetails && (
                  <tr>
                    <td>{userID}</td>
                    <td>{incidentDetails.dateTime}</td>
                    <td>{incidentDetails.place}</td>
                    <td>{incidentDetails.complaintCategory}</td>
                    <td>{incidentDetails.subCategory}</td>
                    <td>
                      <button className='open_button' onClick={gotoComplaintPage}>
                        Open
                        <div class="arrow-wrapper">
                          <div class="arrow"></div>
                        </div>
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DC;
