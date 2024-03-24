import React from "react";
import "./UserDetails.css";
import Em from "../../components/Emergency/Em";
import UP_bar from "./Userprofilebar/UP_bar";
import UserForm from "./UserForm/UserForm";

const UserDetails = () => {
  return (
    <div className="UD_component">
      <div className="UD_innercomponent">
        <Em />
        <div className="UD_up_bar"></div>
        <UP_bar />
        <div className="UD_up_bar"></div>
        <UserForm />
      </div>
    </div>
  );
};

export default UserDetails;
