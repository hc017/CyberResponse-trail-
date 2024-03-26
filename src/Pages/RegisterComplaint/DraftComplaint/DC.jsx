import React from 'react'
import "./DC.css"
import Em from "../../../components/Emergency/Em";
import UFP_red from "../../UserDetails/UserForm/UFP_red";

const DC = () => {
  return (
    <div className="DC_component">
    <div className="DC_innercomponent">
      <Em />
      <div className="UD_up_bar"></div>
      <UFP_red />
    </div>
  </div>
  )
}

export default DC