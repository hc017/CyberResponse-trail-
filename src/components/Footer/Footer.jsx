import React from 'react';
import './Footer.css'; // Assuming you name the CSS file as Footer.css
import Logo from './Logo.png';
import ICC from './ICC.png'; // Import the image file// Import the image file
import CyberDost from './CyberDost.png'; // Import the image file
import Instagram from './Instagram.png';
import Facebook from './Facebook.png';
import LinkedIn from './LinkedIn.png';
import Twitter from './Twitter.png';
import Emblem from './emblem.png';
const Footer = () => {
  return (
    <div className="Group-36">
      <div className="Rectangle-29">
        <img src={Logo} alt="logo" className="image-remofgvsfvebg-preview-1" />
        <div>
        <img src={Emblem} alt="Image 9" className="emblem" />
        </div>
        <div>
        <img src={ICC} alt="Image 8" className="icc" />
        </div>
        <div>
        <img src={CyberDost} alt="Image 10" className="CyberDost" />
        </div>
        <div className="httpscybercrimegovin">https://cybercrime.gov.in</div>
        <div className="httpswwwmeitygovincyber-surakshit-bharat-brochure">https://www.meity.gov.in/cyber-surakshit-bharat-brochure</div>
        <div className="httpswwwcert-inorgin">https://www.cert-in.org.in</div>
        <div className="httpswwwmhagovinen">https://www.mha.gov.in</div>
        <div className="httpswwwmygovin">https://www.mygov.in</div>
        <img src={Instagram} alt="instagram" className="Frame-7" />
        <img src={Facebook} alt="facebook" className="Frame-8" />
        <img src={Twitter} alt="twitter" className="Frame-9" />
        <img src={LinkedIn} alt="linkedin" className="Frame-10" />
        <div>
        <div className="CyberComponent">Cyber Soochna</div>
        <div className="A-resilient-Framework-for-collecting-and-responding-t-o-digital-crimes-and-frauds">A resilient Framework for collecting and responding to digital crimes and frauds</div>
        <div className="Rising-Threat-National-Concern-Action-Needed">Rising Threat National Concern Action Needed</div>
        </div>
        <div>
        <div className="Line-1"></div>
        </div>
        <div>
        <div>
        <div className="Legal-Information">Legal Information</div>
        </div>
        <div>
        <div className="Accessibility">Accessibility</div>
        </div>

        <div>
        <div className="Cookie-Management">Cookie Management</div>
        </div>
        </div>
        <div>
      <div>
        <div className="Line-2"></div>
        </div>
        <div>
        <div className="Line-3"></div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;

