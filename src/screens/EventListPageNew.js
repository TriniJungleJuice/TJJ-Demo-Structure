import React, { useState } from "react";
import {Col, Row } from "react-bootstrap";
import "../../src/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import VideoBlock from "./VideoBlock";
import MainCarousel from "../components/Carousels/MainCarousel";
import Navbars from "../components/mainNavbar/Navbars";
import Footer from "../components/footer/Footer";
import Slides from "../components/Carousels/Slides";

function EventListPageNew() {
  const [classes,setClasses]=useState("add-drawer")

  const handleClick=()=>{
      if(classes==="add-drawer")
      {
          setClasses("add-drawer add");
      }

      else{
          setClasses("add-drawer");
      }
  }

  return (
    <>
    <div
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "#000000",
        flexDirection: "column",
        position:"relative",
      }}
    >
      <Navbars handleClick={()=>handleClick()}/>
      <div style={{
        overflowY:classes==="add-drawer add"?"hidden":"auto",
        opacity:classes==="add-drawer add"?"0.2":"1",
        transition:"all .3s ease .2s",
        height:classes==="add-drawer add"?"88vh":"auto",
      }}>
      <MainCarousel />
      <div className="container mt-5 mb-4">
          <h2 className="block-title">Events near you</h2>
        <Row>
          <Col xs={2} md={3} xl={3}>
            <VideoBlock
              imgSrc={
                "https://www.trinijunglejuice.com/events/2024/rise-and-toast-jan14-2024.jpg"
              }
              title={"Machel Montano hosts RISE + TOAST MLK Weekend"}
              date={"Sunday, January 14th, 2024"}
            />
          </Col>
          <Col xs={2} md={3} xl={3}>
            <VideoBlock
              imgSrc={
                "https://www.trinijunglejuice.com/events/2024/c2k24/mental-vvip-pace-feb7-2024.jpg"
              }
              title={"Mental VVIP Pace"}
              date={"Wednesday, February 07th, 2024"}
            />
          </Col>
          <Col xs={2} md={3} xl={3}>
            <VideoBlock
              imgSrc={
                "https://4f14f3f2b2e5fd1c43c0-19fdc616b209d38d8f477bc6e666e66f.ssl.cf1.rackcdn.com/events/chillout-tuesday-hidden-treasures-2024-272721-c75lh2nriT.jpg"
              }
              title={"Chillout Tuesday Hidden Treasures"}
              date={"Tuesday, February 06th, 2024"}
            />
          </Col>
          <Col xs={2} md={3} xl={3}>
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
        <Slides/>
      </div>
      <Footer />
    </div>
    </div>
    <div className={classes}/>
    </>
  );
}

export default EventListPageNew;
