import React from "react";
import "./contacts.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Col, Row, Card} from "react-bootstrap";
import { PiHandHeartFill} from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3431gz4",
      "template_xyvkyia",
      form.current,
      "qX35jjGj3bnr2kJs5"
    );

    e.target.reset();
  };

  return (
    <Container className="my-5">
      <div className="contact_top">
        <div className="team_text">
        <h1>Is it for Muslims only?</h1>
        <p>
          It’s for everyone who shares common values of interest-free lifestyle
        </p>
        </div>
        <Row className="justify-content-center">
          <Col style={{ width: '25%'}}>
            <Card className="mb-4 account-card align-items-center text-center">
            <div className="card_icon">
            <BsCreditCard/>
            </div>
              <Card.Body>
                <Card.Title>Credit Free Lifestyle</Card.Title>
                <Card.Text>
                  Facilisis id diam eget quam. Nisi vestibulum accumsan lectus.
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
                <Card.Title>Support Community in Good</Card.Title>
                <Card.Text>
                  Erat mattis fringilla vivamus pharetra massa nun risus enim.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ width: '25%'}}>
            <Card className="mb-4 account-card align-items-center text-center">
            <div className="card_icon">
            <PiHandHeartFill />
            </div>
              <Card.Body>
                <Card.Title>Love of Charity</Card.Title>
                <Card.Text>
                  Faucibus convallis non lorem bibendum at tincidunt.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <section id="contact" className="mt-5">
        <h5>Get in touch</h5>
        <h2>Contact me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact-card">
              <HiOutlineMailOpen className="contact-card-icon" />
              <h4>Email</h4>
              <h5>Abc123@gmail.com</h5>
              <a
                href="mailto:upchh@example.com"
                target={"_blank"}
                className="btn btn-primary"
                rel="noreferrer"
              >
                Send a Message
              </a>
            </article>
            <article className="contact-card">
              <BsWhatsapp className="contact-card-icon" />
              <h4>Whatsapp</h4>
              <h5>+23396782949</h5>
              <a
                href="https://api.whatsapp.com/send?phone+233561751341"
                target={"_blank"}
                className="btn btn-primary"
                rel="noreferrer"
              >
                Send a Message
              </a>
            </article>
            <article className="contact-card">
              <BsInstagram className="contact-card-icon" />
              <h4>Instagram</h4>
              <h5>Talha_ss</h5>
              <a
                href="mailto:upchh@example.com"
                target={"_blank"}
                rel="noreferrer"
                className="btn btn-primary"
              >
                Follow me
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
