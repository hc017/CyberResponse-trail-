import React from 'react';
import './LearnMore.css'
import { useNavigate } from 'react-router';

const LearnMore = () => {
  const navigate = useNavigate();
  const toStayInformed = () => {
    navigate('/stayinformed')
  }
  return (
    <div>
      <button className='Learnbutton' onClick={toStayInformed}> Learn More</button>
    </div>
  )
}

export default LearnMore