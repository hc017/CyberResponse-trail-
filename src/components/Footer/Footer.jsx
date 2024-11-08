import React from "react";
import "./Footer.css"; 
import Logo from "./Logo.png";


const Footer = () => {
  return (
    <>
    <footer class="footer">
      <div class="footer__addr">
      <div className="image-remofgvsfvebg-preview-1">
              <img src={Logo} alt="Description of the logo" />
            </div>
        <h1 class="footer__logo">CyberSoochna</h1>
        <address>
          A Resilient Framework for collecting and responding to digital crimes and frauds
          {/* <br /> */}
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Media</h2>

          <ul class="nav__ul">
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" >Instagram</a>
            </li>

            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" >Youtube</a>
            </li>

            <li>
              <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" >Twitter</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">About</h2>

          <ul class="nav__ul">
            <li>
              <a href="https://github.com/hc017/CyberResponse-trail-" target="_blank" rel="noopener noreferrer" >Disclaimer</a>
            </li>

            <li>
              <a href="https://github.com/hc017/CyberResponse-trail-" target="_blank" rel="noopener noreferrer" >Community</a>
            </li>

            <li>
              <a href="https://github.com/hc017/CyberResponse-trail-" target="_blank" rel="noopener noreferrer" >FAQ</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">Legal</h2>

          <ul class="nav__ul">
            <li>
              <a href="https://github.com/hc017/CyberResponse-trail-" target="_blank" rel="noopener noreferrer" >Privacy Policy</a>
            </li>

            <li>
              <a href="https://github.com/hc017/CyberResponse-trail-" target="_blank" rel="noopener noreferrer" >Terms of Use</a>
            </li>

            <li>
              <a href="https://github.com/hc017/CyberResponse-trail-" target="_blank" rel="noopener noreferrer" >Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <p>&copy; 2024 Something. All rights reserved.</p>

      </div>
    </footer>
    </>
  );
};

export default Footer;