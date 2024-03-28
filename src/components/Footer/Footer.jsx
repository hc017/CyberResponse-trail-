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
        <div className="BigAllBox">
          <div className="BoxBox">
            <div className="image-remofgvsfvebg-preview-1">
              <img src={Logo} alt="Description of the image" />
            </div>
            <div className="CyberComponent">CyberSoochna</div>
            <div className="ResilienceBlock">
              <div className="A-resilient-Framework-for-collecting-and-responding-t-o-digital-crimes-and-frauds">
                A resilient Framework for collecting and <br/> responding to digital crimes and frauds
              </div>
              <div className="threat"></div>
              <div className="Rising-Threat-National-Concern-Action-Needed">
                Rising Threat
              </div>
              <div className="Rising-Threat-National-Concern-Action-Needed">
                National Concern
              </div>
              <div className="Rising-Threat-National-Concern-Action-Needed">
                Action Needed
              </div>
            </div>
          </div>
          <div className="LogoBoxes">
            <div className="boxmargin">
              <button className="emblem">
                <img src={Emblem} alt="emblem" />
              </button>
              <div className="marginal"></div>
              <button className="icc">
                <img src={ICC} alt="emblem" />
              </button>
              <div className="marginal"></div>
              <button className="emblem">
                <img src={CyberDost} alt="emblem" />
              </button>
            </div>
          </div>

          <div className="LinkBoxes">
            <div className="marginalityBox">
              <button className="TNC">
                Terms and Conditions
              </button>
              <div className="hello"></div>
              <button className="TNC">
                Terms and Conditions
              </button>
              <div className="hello"></div>
              <button className="TNC">
                Terms and Conditions
              </button>
              <div className="hello"></div>
              <button className="TNC">
                Terms and Conditions
              </button>
              <div className="hello"></div>
              <button className="TNC">
                Terms and Conditions
              </button>
              <div className="marginal"></div>
              <div className="IFTLicon">
                <button className="instafb">
                  <img src={Instagram} alt="emblem" />
                </button>
                <button className="instafb">
                  <img src={Facebook} alt="emblem" />
                </button>
                <button className="instafb">
                  <img src={Twitter} alt="emblem" />
                </button>
                <button className="instafb">
                  <img src={LinkedIn} alt="emblem" />
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="Line-1"></div>
        <div className="hellolegal">
          <div className="LegalInfo"> Legal Information</div>
          {/* <div className="Line-2"></div> */}
          <div className="LegalInfo"> Accessibility</div>
          <div className="LegalInfo"> Cookie Management</div>
        </div>

      </div>
    </div>
  );
};

export default Footer;

