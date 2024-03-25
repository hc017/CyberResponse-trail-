import React from 'react'
import "./UP.css"
import Em from "../../../components/Emergency/Em";
import UFP_red from "../../UserDetails/UserForm/UFP_red";

const UP = () => {
  return (
    <div className="UP_component">
    <div className="UP_innercomponent">
      <Em />
      <div className="UD_up_bar"></div>
      <UFP_red />
    </div>
  </div>
  )
}

export default UP