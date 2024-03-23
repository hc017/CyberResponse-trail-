import React from 'react'
import "./UP_bar.css"
import { Link } from 'react-router-dom'

const UP_bar = () => {
  return (
    <div className='UP_container'>
        <p className="ud_text">User Details</p>
        <p className="ud_mail">abc@gmail.com</p>
        <Link className='log_btn'>
        <p className='log_2'>Logout</p>
        </Link>
    </div>
  )
}

export default UP_bar