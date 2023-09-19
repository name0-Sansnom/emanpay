import React from "react";
import "./footer.css";
// import Socialmedia from "../Socialmedia";
import Logo from "../../assets/logo.png";
// import { } from "react-bootstrap";
const Footer = () => {
  return (
       <div style={{background: '#134341'}}>
         <div className="footer">
          <div className="footer_left">
            <img src={Logo} alt="" />
            
          </div>
          <div className="footer_right">
            <a href="active">
              <p className="footer_text">Home</p>
            </a>

            <a href="google.com">
              <p className="footer_text">Privacy Notice</p>
            </a>
          </div>
        </div>
        <p className="last_text">©2023 Emanpay Ltd. All rights reserved.</p>
       </div>
    
  );
};

export default Footer;
