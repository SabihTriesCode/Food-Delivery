import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            We bring delicious food straight to your doorstep. Discover a
            variety of freshly prepared meals, made with quality ingredients and
            delivered quickly whenever you're craving something special.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 (555) 123-4567</li>
            <li>company@tomato.com</li>
          </ul>
        </div>
        
      </div>
      <hr />
      <p className="footer-copyright">© 2026 Tomato. All rights reserved.</p>
    </div>
  );
};

export default Footer;
