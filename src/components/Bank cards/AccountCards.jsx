import React from "react";
import "./cards.css";
import { Card, Container, Row, Col, Stack } from "react-bootstrap";
import { BsCashCoin } from "react-icons/bs";
import { TbBuildingBank } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";

const AccountCards = () => {
  return (
    <div className="cards_bg">
      <Stack gap={2} className="col-md-5 mx-auto">
        <div>
          <h6>Why Emanpay?</h6>
        </div>
        <div>
          <h1 style={{color: "white"}}>The only riba-free Banking app you’ll ever need</h1>
        </div>
        <div>
          <p>
          Our online banking platform is user-friendly and easy to navigate.
          </p>
        </div>
      </Stack>
      <Container className="mt-8">
        <Row className="justify-content-center">
          <Col style={{ width: '25%'}}>
            <Card className="mb-4 account-card align-items-center text-center">
            <div className="card_icon">
            <BsCashCoin />
            </div>
              <Card.Body>
                <Card.Title>Checkings account</Card.Title>
                <Card.Text>
                  Facilisis id diam eget quam. Nisi vestibulum accumsan lectus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ width: '25%'}}>
            <Card className="mb-4 account-card align-items-center text-center">
            <div className="card_icon">
            <TbBuildingBank />
            </div>
              <Card.Body>
                <Card.Title>Savings account</Card.Title>
                <Card.Text>
                  Erat mattis fringilla vivamus pharetra massa nun risus enim.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ width: '25%'}}>
            <Card className="mb-4 account-card align-items-center text-center">
            <div className="card_icon">
            <FaRegHandshake />
            </div>
              <Card.Body>
                <Card.Title>Free interest loans</Card.Title>
                <Card.Text>
                  Faucibus convallis non lorem bibendum at tincidunt.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ width: '25%'}}>
            <Card className="mb-4 account-card align-items-center text-center">
            <div className="card_icon">
            <BsCreditCard  />
            </div>
              <Card.Body>
                <Card.Title>Flexible credit cards</Card.Title>
                <Card.Text>
                  Elit augue pulvinar elementum nullam arcu olutpat in a turpis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AccountCards;
