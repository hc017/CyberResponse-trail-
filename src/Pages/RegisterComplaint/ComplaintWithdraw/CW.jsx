import React from 'react'
import "./CW.css"
import Em from "../../../components/Emergency/Em";
import UFP_red from "../../UserDetails/UserForm/UFP_red";


const CW = () => {
  return (
    <div className="CW_component">
    <div className="CW_innercomponent">
      <Em />
      <div className="UD_up_bar"></div>
      <UFP_red />
    </div>
  </div>
  )
}

export default CW