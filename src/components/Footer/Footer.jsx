import React from "react";
import "./Footer.css"; // Assuming you name the CSS file as Footer.css
import Logo from "./Logo.png";
import ICC from "./ICC.png"; // Import the image file// Import the image file
import CyberDost from "./CyberDost.png"; // Import the image file
import Instagram from "./Instagram.png";
import Facebook from "./Facebook.png";
import LinkedIn from "./LinkedIn.png";
import Twitter from "./Twitter.png";
import Emblem from "./emblem.png";
const Footer = () => {
  return (
    <div className="Group-36">
      <div className="Rectangle-29">
        <div className="colums">
          <div className="vert-1">
            <div className="vert1_logo">
              <img
                src={Logo}
                alt="logo"
                className="image-remofgvsfvebg-preview-1"
              />
            </div>
            <div className="foot_title">
              <div className="CyberComponent">Cyber Soochna</div>
            </div>
            <p className="A-resilient-Framework-for-collecting-and-responding-t-o-digital-crimes-and-frauds">
              A resilient Framework for collecting and responding <br />
              to digital crimes and frauds
            </p>
            <p className="Rising-Threat-National-Concern-Action-Needed">
              Rising Threat <br /> National Concern <br /> Action Needed
            </p>
          </div>
          <div className="vert-2">
            <div className="F_img_1">
              <img src={Emblem} alt="Image 9" className="emblem" />
            </div>
            <div className="F_img_1">
              <img src={ICC} alt="Image 8" className="icc" />
            </div>
            <div className="F_img_1">
              <img src={CyberDost} alt="Image 10" className="CyberDost" />
            </div>
          </div>
          <div className="vert-3">
            <div className="left_up">
              <div className="subtext">https://cybercrime.gov.in</div>
              <div className="subtext">
                https://www.meity.gov.in/cyber-surakshit-bharat-brochure
              </div>
              <div className="subtext">https://www.cert-in.org.in</div>
              <div className="subtext">https://www.mha.gov.in</div>
              <div className="subtext">https://www.mygov.in</div>
            </div>
            <div className="Footer_icons">
              <img src={Instagram} alt="instagram" className="Frame5" />
              <img src={Facebook} alt="facebook" className="Frame5" />
              <img src={Twitter} alt="twitter" className="Frame5" />
              <img src={LinkedIn} alt="linkedin" className="Frame5" />
            </div>
          </div>
        </div>
        <div className="ho">
          <p className="ho_text">Legal Information</p>
          <p className="ho_text">|</p>
          <p className="ho_text">Accessibility </p>
          <p className="ho_text">|</p>
          <p className="ho_text">Cookie Management</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
