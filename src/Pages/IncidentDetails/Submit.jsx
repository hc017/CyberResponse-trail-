import React from 'react'
import"./Submit.css"
import Em from '../../components/Emergency/Em'
import UFP_red from '../UserDetails/UserForm/UFP_red'
import IDX from './IDX'
import UP_bar from '../UserDetails/Userprofilebar/UP_bar'


const Submit = () => {
  return (
    <div className="SD_component">
    <div className="SD_innercomponent">
      <Em />
      <div className="UD_up_bar"></div>
      <UP_bar />
      <div className="UD_up_bar"></div>
      <UFP_red />
      <div className="UD_up_bar"></div>
      <IDX />
      <div className="SSD_innerComp2">
          Heloooooo
      </div>
    </div>
  </div>
  )
}

export default Submit