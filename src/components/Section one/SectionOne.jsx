import React from "react";
import "./sectionone.css";
import { Card, Container, Row, Col, Stack } from "react-bootstrap";
import { CImage } from "@coreui/bootstrap-react";
// import { IoShieldCheckmarkSharp } from "react-icons/io";
import { BsCreditCard } from "react-icons/bs";
import { BsShieldFillCheck } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import { PiHandTapBold } from "react-icons/pi";
import { BiHome } from "react-icons/bi";
import { RiSignalTowerFill } from "react-icons/ri";
import { MdOutlineSendToMobile } from "react-icons/md";
import { BsCurrencyExchange} from "react-icons/bs";
import { TbWorldShare } from "react-icons/tb";
import { BsShieldLock } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { FcHome } from "react-icons/fc";
import Virtual from "../../assets/virtual.svg";
import Pay from "../../assets/physical.svg";
import Send from "../../assets/remittance.svg";
import Support from "../../assets/support.svg";

const SectionOne = () => {
  return (
    <Container className="intro">
      <div className="text-center my-5">
        <h1>A riba-free financial app, every step of the way</h1>
        <p>
          Muslim financial values aren’t just about Arabic words. It’s about the
          meaning of money, which is amana entrusted to us to be used fairly.
        </p>
      </div>

      <Row xs={1} md={2} className="mt-5  my-5 p-5 intro_title rounded-pill">
        <Col>
          <Stack gap={3}>
            <h1>Avoid doubtful, feel safe</h1>
            <p>
              <span>
                <BsShieldFillCheck />
              </span>
              Learn more about doubtful Islamic Finance practices in our FAQ
            </p>
          </Stack>
        </Col>
        <Col>
          <Row>
            <Stack gap={2} className="col-md-5 mx-auto">
              <h4>NO</h4>
              <h4>riba</h4>
            </Stack>
            <Stack gap={2} className="col-md-5 mx-auto">
              <h4>NO</h4>
              <h4>trics</h4>
            </Stack>
          </Row>
        </Col>
      </Row>

      <Stack gap={2} className="col-md-5 mx-auto">
        <h2 style={{textAlign: 'center'}}>
          Whatever you spend, He will replace it. He is the best of all providers.
        </h2>
        <p>Quran 34:39</p>
      </Stack>

      <Stack gap={2} className="mx-auto intro_title">
        <div>
          <h1 style={{fontSize: '4rem'}}><FcHome /></h1>
        </div>
        <div>
        <h1>Home financing</h1>
        </div>
        <div>
          <h4>
          NO tricky instruments, back to Muslim values of community support
          </h4>
        </div>
      </Stack>

      <div className="details">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                 <Card.Title className="services_card_title">Virtual Card</Card.Title>
                <CImage
                  fluid
                  align="center"
                  rounded
                  src={Virtual}
                  alt=""
                  className="details_img"
                />
                <h1> Shop Online</h1>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <BsCreditCard />
                    </span>
                    Get your virtual Mastercard in seconds
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <AiOutlineShoppingCart />
                    </span>
                    Shop Online accross millions of stores worldwide
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <BiDollarCircle />
                    </span>
                    Enjoy limited-timed cashback offers
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <PiHandTapBold />
                    </span>
                    Pay your bills with a tap of your phone
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
              <Card.Title className="services_card_title">PHYSICAL CARD</Card.Title>
              <CImage
                  fluid
                  align="center"
                  rounded
                  src={Pay}
                  alt=""
                  className="details_img"
                />
                <h1>Pay on the go</h1>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <BiHome />
                    </span>
                    Get your physical Mastercard delivered to your home
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <RiSignalTowerFill />
                    </span>
                    Enjoy conctaless payments anytime, anywhere
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <AiOutlineShoppingCart />
                    </span>
                    Use across 10+ million stores worldwide
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>


      <div className="details">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Body>
              <Card.Title className="services_card_title">MONEY TRANSFER</Card.Title>
                <CImage
                  fluid
                  align="center"
                  rounded
                  src={Send}
                  alt=""
                  className="details_img"
                />
                <h1> Send money without worries</h1>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <MdOutlineSendToMobile />
                    </span>
                    Send money to 30+ countries
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <BsCurrencyExchange />
                    </span>
                    Take advantage of excellent exchange rates without ribah
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <TbWorldShare />
                    </span>
                    Transfer instantly from wherever you are at the comfort of your zone
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
              <Card.Title className="services_card_title">SECURITY</Card.Title>
              <CImage
                  fluid
                  align="center"
                  rounded
                  src={Support}
                  alt=""
                  className="details_img"
                />
                <h1>Support you can trust</h1>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <BsShieldLock />
                    </span>
                    Keep your payments protected with advanced data encryption
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <MdOutlineNotificationsActive />
                    </span>
                    Stay informed of your account usage with push, email andtext notifications
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="bank_details">
                    <span>
                      <MdSupportAgent />
                    </span>
                    Get help whenever you need from our friendly chat support agents
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="text-center">
        <h1>Money turned into true profit</h1>
        <p>Focusing on remembrance</p>
      </div>
    </Container>
  );
};

export default SectionOne;
