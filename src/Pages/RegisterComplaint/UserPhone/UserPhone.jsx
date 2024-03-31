import React from 'react'
import "./UserPhone.css"
import Em from "../../../components/Emergency/Em";
import UFP_red from "../../UserDetails/UserForm/UFP_red";
import UP_bar from '../../UserDetails/Userprofilebar/UP_bar';
import DCL from './DCLogo.png'; // Importing as default export

const UserPhone = () => {
  return (
    <div className="UserD_component">
    <div className="UserD_innercomponent">
      <Em />
      <div className="UD_up_bar"></div>
        <UP_bar />
      <div className="UD_up_bar"></div>
      <UFP_red />
      <div className="DC_innerform">
      <img className='img_dc' src={DCL} alt="DC Logo" />
      <h1 className='dc_text'>PAGE UNDER DEVELOPEMENT</h1>


      </div>
    </div>
  </div>
  )
}

export default UserPhone