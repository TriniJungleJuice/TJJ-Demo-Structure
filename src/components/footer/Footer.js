import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div
      style={{
        height: "35vh",
        backgroundColor: "#212121",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
      }}
    >
      <Row>
        <div
          style={{
            display: "flex",
            height: "15%",
            color: "blue",
            // backgroundColor: "yellow",
            alignItems: "center",
          }}
        >
          <marquee style={{ color: "red" }}>
            Disclaimer Notice: TriniJungleJuice.com is not responsible for the
            cancellation, change of date or venue of events. Always check with
            the event promoter(s) for accuracy of the information provided
            herein. We are not responsible for typos, accuracy, and/or other
            errors and omissions in the information provided by other parties.
            TriniJungleJuice.com is not affiliated with any promotions or
            promoters, unless specifically stated.
          </marquee>
        </div>
        <div style={{ display: "flex", height: "70%", flexDirection: "row" }}>
          <Container>
            <Row>
              <Col xs={12} md={4} lg={4}>
                <Image src={require("../../assets/tjj-logo.png")} width={'100%'} />
              </Col>
              <Col xs={12} md={2} lg={2}>
              <div
                  style={{
                    display: "flex",
                    color: "white",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a href="#">Store</a>
                  <a href="#">Carnival</a>
                  <a href="#">Events</a>
                  <a href="#">Photos</a>
                </div>
              </Col>
              <Col xs={12} md={2} lg={2}>
              <div
                  style={{
                    display: "flex",
                    color: "white",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                <a href="#">Videos</a>
                <a href="#">Music</a>
                <a href="#">News</a>
                <a href="#">Contact</a>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <div
                  style={{
                    display: "flex",
                    color: "white",
                    height: '100%',
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  221B, Baker Street, 90265
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          style={{
            display: "flex",
            height: "15%",
            color: "gray",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {"\u00A9"} 2023 Copyright: Trini Jungle Juice | Made by Renderbit
          Technologies
        </div>
      </Row>
    </div>
  );
}
