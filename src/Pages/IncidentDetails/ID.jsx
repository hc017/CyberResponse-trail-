import React from 'react'
import "./ID.css"
import Em from "../../components/Emergency/Em"
import UFP_red from '../UserDetails/UserForm/UFP_red'



const ID = () => {
  return (
    <div className='ID_component'>
      <div className="ID_innercomponent">
        <Em/>
        <div className="UD_up_bar"></div>
        <UFP_red />
        <div className="ID_form_component">
          
        </div>

      </div>

    </div>
  )
}

export default ID