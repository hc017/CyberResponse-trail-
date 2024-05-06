import React, { useState, useEffect } from "react";
import { getDatabase, ref, get, update } from "firebase/database";
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

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    // Update Firebase database
    update(ref(getDatabase(), `users/${currentUser.uid}/userdetails`), {
      [name]: value,
    }).catch((error) => {
      console.error("Error updating user details:", error);
    });
  };

  const handlePermanentAddressChange = (e) => {
    const { name, value } = e.target;
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));

    // Update Firebase database
    update(
      ref(getDatabase(), `users/${currentUser.uid}/userdetails/permanentAddress`),
      {
        [name]: value,
      }
    ).catch((error) => {
      console.error("Error updating permanent address:", error);
    });
  };

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
              <form className="user-details">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label>Name:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={userDetails.RegName}
                          name="RegName"
                          onChange={handleUserDetailsChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Email:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={currentUser.email}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Phone Number:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={userDetails.RegMobile}
                          name="RegMobile"
                          onChange={handleUserDetailsChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Gender:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={userDetails.RegGender}
                          name="RegGender"
                          onChange={handleUserDetailsChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>DOB:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={userDetails.ReDob}
                          name="ReDob"
                          onChange={handleUserDetailsChange}
                        />
                      </td>
                    </tr>
                    {permanentAddress ? (
                      <>
                        <tr>
                          <td>
                            <label>Nearest Police Station:</label>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={permanentAddress.policeStation}
                              name="policeStation"
                              // onChange={handlePermanentAddressChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label>State:</label>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={permanentAddress.state}
                              name="state"
                              onChange={handlePermanentAddressChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label>District:</label>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={permanentAddress.district}
                              name="district"
                              onChange={handlePermanentAddressChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label>Country:</label>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={permanentAddress.country}
                              name="country"
                              onChange={handlePermanentAddressChange}
                            />
                          </td>
                        </tr>
                      </>
                    ) : (
                      <tr>
                        <td colSpan="2">Permanent address not available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </form>
            ) : (
              <p>Loading user details...</p>
            )}
            <button className="save_btn" onClick={() => alert("Data changed")}>Save Data</button>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default UserProfile;
