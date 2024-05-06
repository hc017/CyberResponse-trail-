import React, { useState } from 'react';
import './ContactUs.css';
import EnterContact from './EnterContact';
import ContactImage from './contact-removebg-preview.png';

const ContactUs = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="ContactUs-Page">
      <div className="Contact-Content">
        <div className="FirstPartAbout">
          <div className="Contact-Wastage"> 
            <div className="Content-Wastage">
              <div className="Contact-Title">
                <p>Want To  Know More?<br />
                  Reach Out To Us !</p>
              </div>
              <div className="Button-Div">
                <button className="fancy" onClick={() => setShowContact(true)}>
                  <span className="top-key" />
                  <span className="text">Contact Us</span>
                  <span className="bottom-key-1" />
                  <span className="bottom-key-2" />
                </button>
                {showContact && <EnterContact onClose={() => setShowContact(false)} />}
              </div>
              <div className="Contact-Line"></div>

              <div className="Contact-Info-Container">
                <div className="PlantText">
                  <p>Get in touch with us - Your cyber safety is our priority.</p>
                </div>
              </div>

            </div>
            <div className="Contact-Image-Container">
              <div className="reflection-content-Contact">
                <img src={ContactImage} alt="Green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
