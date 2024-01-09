import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../src/styles.css";
import VideoBlock from "./VideoBlock";
import MainCarousel from "../components/Carousels/MainCarousel";
import Footer from "../components/footer/Footer";
import Slides from "../components/Carousels/Slides";
import NavContainer from "../components/NavContainer/NavContainer";

function EventListPageNew() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "#000000",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <NavContainer>
          <MainCarousel />
          <div className="container mt-5 mb-4">
            <h2 className="block-title">Events near you</h2>
            <Row>
              <Col xs={12} sm={6} md={4} lg={3}>
                <VideoBlock
                  imgSrc={
                    "https://www.trinijunglejuice.com/events/2024/rise-and-toast-jan14-2024.jpg"
                  }
                  title={"Machel Montano hosts RISE + TOAST MLK Weekend"}
                  date={"Sunday, January 14th, 2024"}
                />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <VideoBlock
                  imgSrc={
                    "https://www.trinijunglejuice.com/events/2024/c2k24/mental-vvip-pace-feb7-2024.jpg"
                  }
                  title={"Mental VVIP Pace"}
                  date={"Wednesday, February 07th, 2024"}
                />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <VideoBlock
                  imgSrc={
                    "https://4f14f3f2b2e5fd1c43c0-19fdc616b209d38d8f477bc6e666e66f.ssl.cf1.rackcdn.com/events/chillout-tuesday-hidden-treasures-2024-272721-c75lh2nriT.jpg"
                  }
                  title={"Chillout Tuesday Hidden Treasures"}
                  date={"Tuesday, February 06th, 2024"}
                />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
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
          <div className="container mt-5 mb-4">
            <h2 className="block-title">Popular Events</h2>
            <Slides />
          </div>
          <Footer />
        </NavContainer>
      </div>
    </>
  );
}

export default EventListPageNew;
