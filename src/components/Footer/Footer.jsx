import React from "react";
import "./footer.css";
// import Socialmedia from "../Socialmedia";
import Logo from "../../assets/logo.png";
import { Container} from "react-bootstrap";
const Footer = () => {
  return (
       <Container className="pt-5">
         <div className="footer">
          <div className="footer_left">
            <img src={Logo} alt="" />
            <p className="left_text">©2023 Emanpay Ltd. All rights reserved.</p>
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
       </Container>
    
  );
};

export default Footer;
