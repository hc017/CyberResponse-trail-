import React from 'react'
import "./Banner2.css"
import { Link } from 'react-router-dom'

const Banner2 = () => {
  return (
    <div className="B2_container">
      <div className="B2_left"></div>
      <div className="B2_right">
        <div className="B2_right_inner">
            <p className="B2_right_subtitile">
            Protecting against cyber threats is paramount in today's interconnected landscape. Our banner badge symbolizes vigilance and resilience in the face of digital dangers. With bold imagery and crisp design, it serves as a beacon of awareness, urging users to stay informed and proactive. Emphasizing the importance of strong passwords, encryption, and updated software, it encapsulates the essence of cyber hygiene. Through this badge, we empower individuals and organizations to fortify their defenses, thwarting malicious actors and preserving digital integrity. Let it stand as a reminder of our collective responsibility to safeguard the digital frontier, ensuring a safer online experience for all.
            </p>
            <Link className='B2_btn'>Learn more</Link>
        </div>
      </div>
      </div>
  )
}

export default Banner2