import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Image } from "react-bootstrap";
import VideoBlock from "./VideoBlock";
import "../../src/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendar,
  faDollar,
  faClock,
  faGuitar
} from "@fortawesome/free-solid-svg-icons";
import NavContainer from "../components/NavContainer/NavContainer";

export default function EventDemoNew() {

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        backgroundColor: "#212121",
        flexDirection: "column",
      }}
    >
      <NavContainer>
      <div
        id="content"
        style={{
          display: "flex",
          background: "#000000",
          padding: 10,
          paddingTop: 30,
        }}
      >
        <Container fluid="md">
          <Row>
            <Col xs={12} md={3}>
              <Image
                variant="top"
                src="https://www.trinijunglejuice.com/events/2024/rise-and-toast-jan14-2024.jpg"
                style={{
                  height: 400,
                  width: "100%",
                }}
              />
            </Col>
            <Col xs={12} md={9}>
              <Card.Text style={{ color: "#ffffff" }}>
                <Row style={{ fontWeight: "700", fontSize: 32 }}>
                  <Col xs={9} md={9}>
                    Rise and Toast MLK Weekend 2024 hosted by Machel Montano
                  </Col>
                  <Col
                    xs={3}
                    md={3}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div className="btns hvr-sweep-to-right">Buy Tickets</div>
                  </Col>
                </Row>
                <Row style={{ fontWeight: "500", color: "red", marginTop: 15 }}>
                  <Col>Machel Montano hosts RISE + TOAST MLK Weekend</Col>
                </Row>
                <Row style={{ color: "#9E9E9E", marginTop: 15 }}>
                  <Col xs={3} md={3}>
                    <FontAwesomeIcon icon={faLocationDot} /> Miami, FL
                  </Col>
                  <Col xs={7} md={7}>
                    <FontAwesomeIcon icon={faCalendar} /> Sunday January 14th,
                    2024 (12pm - 9pm)
                  </Col>
                  <Col xs={2} md={2}>
                    <FontAwesomeIcon icon={faDollar} /> EC$240
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Col>
                </Row>
                <hr className="hr" />
                <Row style={{ paddingTop: 10 }}>
                  <Col xs={12} md={4}>
                    <h4 style={{ color: "red" }}>Timings</h4>
                    Rise: Brunching - 12pm - 4pm
                    <br />
                    Toast: Social 4pm - 9pm
                  </Col>
                  <Col xs={12} md={4}>
                    <h4 style={{ color: "red" }}><FontAwesomeIcon icon={faGuitar} style={{ marginRight: '15px' }}/> Artist</h4>
                    Music by @doctoresan @silentaddy @deiondadj @greg_runway
                    @shadowfyah
                    <br />
                    Special guest @rickyplatinum
                    <br />
                  </Col>
                  <Col xs={12} md={4}>
                    <h4 style={{ color: "red" }}>More</h4>
                    Exquisite Cuisine by: @kookinwithkryssi
                    <br />
                    For Cabana and sections: Text (754) 204-3753
                    <br />
                    <br />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span style={{ color: "red" }}>#Event #SouthAmerica</span>
                  </Col>
                </Row>
              </Card.Text>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "#E0E0E0", marginTop: 20 }} hidden>
            Disclaimer Notice: TriniJungleJuice.com is not responsible for the
            cancellation, change of date or venue of events. Always check with
            the event promoter(s) for accuracy of the information provided
            herein. We are not responsible for typos, accuracy, and/or other
            errors and omissions in the information provided by other parties.
            TriniJungleJuice.com is not affiliated with any promotions or
            promoters, unless specifically stated.
          </Row>
          <Row>
            <div className="container mt-5 mb-4">
              <h2 className="block-title">Related Events</h2>
              <Row>
                <Col xs={6} md={3} xl={3}>
                  <VideoBlock
                    imgSrc={
                      "https://www.trinijunglejuice.com/events/2024/rise-and-toast-jan14-2024.jpg"
                    }
                    title={"Machel Montano hosts RISE + TOAST MLK Weekend"}
                    date={"Sunday, January 14th, 2024"}
                  />
                </Col>
                <Col xs={6} md={3} xl={3}>
                  <VideoBlock
                    imgSrc={
                      "https://www.trinijunglejuice.com/events/2024/c2k24/mental-vvip-pace-feb7-2024.jpg"
                    }
                    title={"Mental VVIP Pace"}
                    date={"Wednesday, February 07th, 2024"}
                  />
                </Col>
                <Col xs={6} md={3} xl={3}>
                  <VideoBlock
                    imgSrc={
                      "https://4f14f3f2b2e5fd1c43c0-19fdc616b209d38d8f477bc6e666e66f.ssl.cf1.rackcdn.com/events/chillout-tuesday-hidden-treasures-2024-272721-c75lh2nriT.jpg"
                    }
                    title={"Chillout Tuesday Hidden Treasures"}
                    date={"Tuesday, February 06th, 2024"}
                  />
                </Col>
                <Col xs={6} md={3} xl={3}>
                  <VideoBlock
                    imgSrc={
                      "https://www.trinijunglejuice.com/events/2024/c2k24/renaissance-jan27-2024.jpg"
                    }
                    title={"Renaissance Fete 2024"}
                    date={"Saturday, January 27th, 2024"}
                  />
                </Col>
              </Row>
            </div>
          </Row>
          <Row>
          <div className="container mt-5 mb-4">
              <h2 className="block-title">Video</h2>
            <iframe
              src="https://www.youtube.com/embed/AeqZjPkLiEg"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              height={500}
              width={"100%"}
            />
            </div>
          </Row>
        </Container>
      </div>
   </NavContainer>
    </div>
  );
}
