import React from "react";
import "./UserDetails.css";
import Em from "../../components/Emergency/Em";
import UPBar from "./Userprofilebar/UP_bar";
// import UserFormPanel from "./UserForm/UserFormPanel";
// import UserFormPanel2 from "./UserForm/UserFormPanel2";
import UserForm from "./UserForm/UserForm";
// import UFP_red from "./UserForm/UserForm";

const UserDetails = () => {
  return (
    <div className="UD_component">
      <div className="UD_innercomponent">
        <Em />
        <div className="UD_up_bar"></div>
        <UPBar />
        {/* <div className="UD_up_bar"></div>
        <UserFormPanel2 /> */}
        <div className="UD_up_bar"></div>
        <UserForm />
      </div>
    </div>
  );
};

export default UserDetails;
