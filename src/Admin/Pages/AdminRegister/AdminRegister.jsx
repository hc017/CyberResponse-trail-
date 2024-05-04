import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminRegister.css";
import { auth } from "../../../FirebaseCongfig/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const AdminRegister = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [adminID, setAdminID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const db = getDatabase();

  const handleRegister = (e) => {
    e.preventDefault();

    // Ensure the email ends with "@csadmin.com"
    if (!adminID.endsWith("@csadmin.com")) {
      alert("Admin ID must end with @csadmin.com");
      return;
    }

    // Ensure password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create a new Firebase user with the given email and password
    createUserWithEmailAndPassword(auth, adminID, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Write admin details to Firebase Realtime Database
        set(ref(db, `admins/${user.uid}`), {
          name,
          phoneNumber,
          email,
          adminID,
          userId: user.uid,
        })
          .then(() => {
            // If successful, navigate to the admin dashboard
            alert("Admin registered successfully!");
            navigate("/adminDashboard");
          })
          .catch((error) => {
            console.error("Error writing to database:", error.message);
            alert("Error in registration");
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        alert("Error creating admin account");
      });
  };

  const handleCancel = () => {
    setName("");
    setPhoneNumber("");
    setAdminID("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div className="adminregisterpage">
      <div className="adminregistercontainer">
        <h2 className="AdH2">Admin Registration</h2>
        <form onSubmit={handleRegister}>
          <div className="namePh">
            <div className="ADformgroup">
              <label className="ADlabel">Name:</label>
              <input
                className="ADInput"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="ADformgroup" id="phone">
              <label className="ADlabel">Phone Number:</label>
              <input
                className="ADInput"
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="ADformgroup">
            <label className="ADlabel">Email:</label>
            <input
              className="ADInput"
              type="email"
              placeholder="Enter Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="ADformgroup">
            <label className="ADlabel">Assigin Login Id:</label>
            <input
              className="ADInput"
              type="email"
              placeholder="Assign admin email (@csadmin.com)"
              value={adminID}
              onChange={(e) => setAdminID(e.target.value)}
              required
            />
          </div>
          <div className="ADformgroup">
            <label className="ADlabel">Password:</label>
            <input
              className="ADInput"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="ADformgroup">
            <label className="ADlabel">Confirm Password:</label>
            <input
              className="ADInput"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="ADformbuttons">
            <button className="Adbtn" type="submit">
              Register
            </button>
            <button className="Adbtn" type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
