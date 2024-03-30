import React from "react";
import "./UP_bar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../FirebaseCongfig/AuthContext"; // Import the useAuth hook
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const UP_bar = () => {
  const { currentUser, logout } = useAuth(); // Get currentUser and logout function from the authentication context

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="UP_container">
      <div className="ud_text">
      <FaUser className='ufp_icons_user'/>
        <p className="ud_text_in">User Details</p>
      </div>
      <div className="ud_mail">
      <IoIosMail className='ufp_icons_mail'/>
        {currentUser && <p className="ud_mail_text">{currentUser.email}</p>} {/* Display current user's email */}
      </div>
      <div className="log_btn">
        <Link to="/" className="log_3" onClick={handleLogout}> {/* Add onClick event to trigger logout */}
          <p className="log_2">Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default UP_bar;
