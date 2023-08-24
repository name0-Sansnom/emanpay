import React from "react";
import "./topbar.css";
// import { Button, Stack, Container, Row, Col } from "react-bootstrap";
// import Socialmedia from "../Socialmedia";
import Logo from "../../assets/logo.png";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";

function TopBar() {
  return (
    // <div className="register">
    //   {/* <Stack direction="horizontal" className="flex-grow-1"></Stack> */}

    //   <Row>
    //     <Col>
    //       <img src={Logo} alt="logo" />
    //     </Col>
    //     <Col xs={8}>
    //       {/* <div className="social_button"> */}
    //       <div>
    //         <Socialmedia />
    //         <Button as="a" variant="primary">
    //           Pre-register
    //         </Button>
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
    <div>
      <header class="Header_root">
        <div class="Header_content">
          <a aria-current="page" class="Header_link" href="/">
            <img src={Logo} height="36" class="Header_logo" alt="logo" />
          </a>
          <div class="Header_buttons">
            <button class="Header_basicButton">
              <p class="header_text">Pre-register</p>
            </button>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <button class="Header_iconButton">
                <img src={Twitter} alt="" />
              </button>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <button class="Header_iconButton">
                <img src={Instagram} alt="" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button class="Header_iconButton">
                <img src={Linkedin} alt="" />
              </button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default TopBar;
