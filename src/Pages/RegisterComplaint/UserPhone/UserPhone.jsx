import React from "react";
import "./UserPhone.css";
import Em from "../../../components/Emergency/Em";
import UFP_red from "../../UserDetails/UserForm/UFP_red";
import UP_bar from "../../UserDetails/Userprofilebar/UP_bar";
import DCL from "./DCLogo.png"; // Importing as default export
import { useAuth } from "../../../FirebaseCongfig/AuthContext";

const UserPhone = () => {
  const { currentUser } = useAuth();

  return (
    <div className="UserD_component">
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
          
        </div>
      </div>
    </div>
  );
};

export default UserPhone;
