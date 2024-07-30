import React from "react";
import "./Footer.css"; 
import Logo from "./Logo.png";


const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__addr">
      <div className="image-remofgvsfvebg-preview-1">
              <img src={Logo} alt="Description of the image" />
            </div>
        <h1 class="footer__logo">CyberSoochna</h1>
        <address>
          A Resilient Framework for collecting and responding to digital crimes and frauds
          <br />
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Media</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Instagram</a>
            </li>

            <li>
              <a href="#">Youtube</a>
            </li>

            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">About</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Disclaimer</a>
            </li>

            <li>
              <a href="#">Community</a>
            </li>

            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">Legal</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <p>&copy; 2024 Something. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;