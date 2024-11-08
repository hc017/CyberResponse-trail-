import React from 'react'
import "./ID.css"
// import Em from "../../components/Emergency/Em"
// import UFP_red from '../UserDetails/UserForm/UFP_red'
import { Link } from 'react-router-dom'



const ID = () => {
  return (
    <div className='ID_component'>
      <div className="ID_innercomponent">
      
        <div className="UD_up_bar"></div>
        
        <div className="ID_form_component">
          <div className="ID_form_bar">
            <Link className="form_comp">Incident Details</Link>
            <Link to="/suspectdetails" className="form_comp">Suspect Details</Link>
            <Link className="form_comp">Complaint Details</Link>
            <Link className="form_comp">Preview & Submit</Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ID