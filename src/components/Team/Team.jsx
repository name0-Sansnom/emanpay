import React from 'react'
import "./../header/header.css"
import './team.css'
import { Card, Container, Row, Col } from "react-bootstrap";
import Team1 from "../../assets/team1.png";
import Team2 from "../../assets/team2.png";
// import Team3 from "../../assets/team3.webp";

const Team = () => {
  return (
    <Container className="mt-8 team_container clearfix">

    <Row className="justify-content-center bank_cards" style={{marginTop: "2em"}}>
    <h4 className='team_text'>Meet our Team</h4>
      <Col>
        <Card className="mt-5 account-card align-items-center text-center">
        <div>
        <img src={Team1} alt="" />
        </div>
          <Card.Body>
            <Card.Title>Arslan Ibrahim</Card.Title>
            <Card.Text>
             Co-founder
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="mt-5 account-card align-items-center text-center">
        <div>
        <img src={Team2} alt="" />
        </div>
          <Card.Body>
            <Card.Title>Khalid Aidash</Card.Title>
            <Card.Text>
               Finance Officer
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="mt-5 account-card align-items-center text-center">
        <div>
        <img src={Team1} alt="" />
        </div>
          <Card.Body>
            <Card.Title>Musa Yahyah</Card.Title>
            <Card.Text>
              Human ressource
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </Row>
      </Container>
  )
}

export default Team