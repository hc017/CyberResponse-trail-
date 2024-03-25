import React from "react";
import "./CheckStatus.css";
import Em from "../../../components/Emergency/Em";
import UFP_red from "../../UserDetails/UserForm/UFP_red";

const CheckStatus = () => {
  return (
    <div className="CS_component">
      <div className="CS_innercomponent">
        <Em />
        <div className="UD_up_bar"></div>
        <UFP_red />
      </div>
    </div>
  );
};

export default CheckStatus;
