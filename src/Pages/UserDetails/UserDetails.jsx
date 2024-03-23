import React from "react";
import "./UserDetails.css";
import Em from "../../components/Emergency/Em";
import UP_bar from "./Userprofilebar/UP_bar";

const UserDetails = () => {
  return (
    <div className="UD_component">
      <div className="UD_innercomponent">
        <Em />
        <UP_bar />
      </div>
    </div>
  );
};

export default UserDetails;
