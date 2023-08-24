import React from "react";
import "./header.css";
import { CImage } from "@coreui/bootstrap-react";
import TopBar from "../topnav/TopBar";
import { Stack, Button, Form, InputGroup } from "react-bootstrap";
import HeroImage from "../../assets/HeroImage.webp";
import { BsTwitter } from "react-icons/bs";


function Header() {
  return (
    <div className="hero">
      <TopBar />

     <div className="overlay">
     <Stack gap={3} className="col-md-5 mx-auto pt-5">
        <div>
          <h1> Digital banking turned into ‘ibada for Muslims</h1>
        </div>
        <div>
          <p>
            Emanpay is a financial app that turns financial life for Muslims
            from skating on thin ice into a way of ‘ibada. Clear of
            interest-based capital and doubtful practices, it helps to receive
            reward from managing and spending money.
          </p>
        </div>
        <div>
          <Stack direction="horizontal" gap={3}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Join our community <BsTwitter />
              </Button>
            </InputGroup>
          </Stack>
        </div>
        {/* <div className="hero_image">
          <img src={HeroImage} alt="" />
        </div> */}
      </Stack>

      <div className="clearfix">
        <CImage fluid align="center" rounded src={HeroImage} className="hero_image" />
      </div>
     </div>
    </div>
  );
}

export default Header;
