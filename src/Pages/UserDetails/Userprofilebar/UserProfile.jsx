import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { useAuth } from "../../../FirebaseCongfig/AuthContext";
import Em from "../../../components/Emergency/Em";
import UFP_red from "../UserForm/UFP_red";
import UP_bar from "./UP_bar";
import "./UserProfile.css";

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [permanentAddress, setPermanentAddress] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const db = getDatabase();
      const userRef = ref(db, `users/${currentUser.uid}/userdetails`);
      const addRef = ref(
        db,
        `users/${currentUser.uid}/userdetails/permanentAddress`
      );

      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userDetailsData = snapshot.val();
            setUserDetails(userDetailsData);
          } else {
            console.log("No user details found for the current user");
          }
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });

      get(addRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const addDetailsData = snapshot.val();
            setPermanentAddress(addDetailsData); // Update permanentAddress state
          } else {
            console.log("No address details found for the current user");
          }
        })
        .catch((error) => {
          console.error("Error fetching address details:", error);
        });
    }
  }, [currentUser]);

  return (
    <div className="UserP_component">
      <div className="UserD_innercomponent">
        <Em />
        <div className="UD_up_bar"></div>
        <UP_bar />
        <div className="UD_up_bar"></div>
        <UFP_red />
        <div className="UD_up_bar"></div>
        <div className="UD_up_bar"></div>
        <div className="innerform">
          <div className="CW_susdetail_bar">
            <p className="CW_sus_text">User Profile</p>
          </div>
          <div className="innerComp2">
  {userDetails ? (
    <table className="user-details">
      <tbody>
        <tr>
          <td className="label">Name:</td>
          <td className="value">{userDetails.RegName}</td>
        </tr>
        <tr>
          <td className="label">Email:</td>
          <td className="value">{currentUser.email}</td>
        </tr>
        <tr>
          <td className="label">Phone Number:</td>
          <td className="value">{userDetails.RegMobile}</td>
        </tr>
        <tr>
          <td className="label">Gender:</td>
          <td className="value">{userDetails.RegGender}</td>
        </tr>
        <tr>
          <td className="label">DOB:</td>
          <td className="value">{userDetails.ReDob}</td>
        </tr>
        {permanentAddress ? (
          <>
            <tr>
              <td className="label">Nearest Police Station:</td>
              <td className="value">{permanentAddress.policeStation}</td>
            </tr>
            <tr>
              <td className="label">State:</td>
              <td className="value">{permanentAddress.state}</td>
            </tr>
            <tr>
              <td className="label">District:</td>
              <td className="value">{permanentAddress.district}</td>
            </tr>
            <tr>
              <td className="label">Country:</td>
              <td className="value">{permanentAddress.country}</td>
            </tr>
          </>
        ) : (
          <tr>
            <td colSpan="2">Permanent address not available</td>
          </tr>
        )}
      </tbody>
    </table>
  ) : (
    <p>Loading user details...</p>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default UserProfile;

/* // import React from 'react'
// import './UserProfile.css'
// import { useAuth } from "../../../FirebaseCongfig/AuthContext";

// const UserProfile = () => {
//     const { currentUser, logout } = useAuth();

//     return (
//         <div>
//             <div className="profile_box">
//                 <div className="edit_name">
//                     <div className="profile_buttons">
//                         <div className="profile_tag">
//                             <p className='pf_name'>Profile</p>
//                             <p className='personal_pf'>Settings for your personal profile</p>
//                         </div>

//                         <div className="pf_button">
//                             <button className='edit-pf'>Edit</button>
//                             <button className='save-pf'>Save Changes</button>
//                             <button className='cancel-pf'>Cancel</button>
//                         </div>
//                     </div>
//                     <div className="hz_line"></div>

//                     <div className="pf_details">
//                         <p className='pf_name'>User Name</p>
//                         <p className='my_name'>My Name</p>
//                     </div>

//                     <div className="pf_edit_form">
//                         <label className='fullname'>Full Name</label>
//                         <input type="text" id='fullname' />

//                         <label className='pf_email'>Email ID</label>
//                         <input type="text" id='pf_email' /> 

//                         <label className='pf_phone'>Mobile Number</label>
//                         <input type="text" id='pf_phone' />

//                     </div>
//                 </div>

//                 <div className="edit_other">
//                     <div className="pf_edit_form">
//                         <label className='fullname'>Date Of Birth </label>
//                         <input type="text" id='fullname' />

//                         <label className='pf_email'>Gender</label>
//                         <input type="text" id='pf_email' />

//                         <label className='pf_phone'>Father/Mother/Spouse Relationship</label>
//                         <input type="text" id='pf_phone' />

//                     </div>
//                 </div>

//                 <div className="edit_address">
//                     <div className="pf_edit_form">
//                         <label className='fullname'> Street Name/Colony </label>
//                         <input type="text" id='fullname' />

//                         <label className='pf_email'>City</label>
//                         <input type="text" id='pf_email' />

//                         <label className='pf_phone'>State</label>
//                         <input type="text" id='pf_phone' />

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UserProfile */
