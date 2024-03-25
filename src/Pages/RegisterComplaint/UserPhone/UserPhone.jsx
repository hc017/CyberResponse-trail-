import React from 'react'
import "./UserPhone.css"
import Em from "../../../components/Emergency/Em";
import UFP_red from "../../UserDetails/UserForm/UFP_red";

const UserPhone = () => {
  return (
    <div className="UserD_component">
    <div className="UserD_innercomponent">
      <Em />
      <div className="UD_up_bar"></div>
      <UFP_red />
    </div>
  </div>
  )
}

export default UserPhone