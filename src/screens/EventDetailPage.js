import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button, Image } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function EventDetailPage(props) {
  const [calendarValue, onChangeCalendarValue] = useState(new Date());

  return (
    // <div style={{ height: 'auto', minHeight: '100vh', backgroundColor: '#000000' }}>
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        backgroundColor: "#212121",
        flexDirection: "column",
      }}
    >
      <div
        id="header"
        style={{
          display: "flex",
          background: "#E0E0E0",
          minHeight: "13vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Header
      </div>
      <div
        id="content"
        style={{ display: "flex", background: "#616161", padding: 10 }}
      >
        <Container fluid="md">
          <Row style={{ backgroundColor: "#ff0000" }}>
            <Col xs={12} md={12} style={{ backgroundColor: "#9E9E9E" }}>
              <Card>
                <div
                  style={{
                    backgroundImage: `url("https://www.trinijunglejuice.com/events/2024/rise-and-toast-jan14-2024.jpg")`,
                    filter: "blur(8px)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height:400,
                  }}
                />
                  <Card.Img
                    variant="top"
                    src="https://www.trinijunglejuice.com/events/2024/rise-and-toast-jan14-2024.jpg"
                    style={{
                      height: 400,
                      width: "auto",
                      display: "flex",
                      alignSelf: "center",
                      position:"absolute"
                    }}
                  />
                <Card.Body>
                  <Card.Text style={{ paddingLeft: 10 }}>
                    <Row>
                      <Col xs={10} md={10}>
                        <Row>Event Title</Row>
                        <Row>Event Subtitle</Row>
                        <Row>Event Time | Event Price</Row>
                      </Col>
                      <Col
                        xs={2}
                        md={2}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Button>Book Tickets</Button>
                      </Col>
                    </Row>
                    <hr />
                    <Row style={{ paddingTop: 10 }}>
                      ...details of the event with the relevant writeup
                      <br />
                      #Event #SouthAmerica
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "#0000ff", marginTop: 10 }}>
            <Col xs={6} md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Calendar</Card.Title>
                  <Calendar
                    onChange={onChangeCalendarValue}
                    value={calendarValue}
                  />
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <h6>Add to calendar</h6>
                  <Image
                    src="https://static-00.iconduck.com/assets.00/google-calendar-icon-512x512-prclo0i6.png"
                    width={40}
                    height={40}
                  />
                  <Image
                    src="https://static-00.iconduck.com/assets.00/apple-icon-430x512-tmf55ggw.png"
                    width={35}
                    height={40}
                    style={{ marginLeft: 10 }}
                  />
                  <Image
                    src="https://static-00.iconduck.com/assets.00/yahoo-icon-512x512-mvtq0k7x.png"
                    width={40}
                    height={40}
                    style={{ marginLeft: 10 }}
                  />
                  <Image
                    src="https://static-00.iconduck.com/assets.00/file-type-outlook-icon-506x512-xwzjqclz.png"
                    width={40}
                    height={40}
                    style={{ marginLeft: 10 }}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://placehold.co/1000x400@2x.png"
                />
                <Card.Body>
                  <Card.Text style={{ paddingLeft: 10 }}>
                    <Row>
                      <Col xs={10} md={10}>
                        <Row>Event Title</Row>
                        <Row>Event Subtitle</Row>
                      </Col>
                      <Col
                        xs={2}
                        md={2}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Button>Book Tickets</Button>
                      </Col>
                    </Row>
                    <hr />
                    <Row style={{ paddingTop: 10 }}>
                      ...details of the event with the relevant writeup
                      <br />
                      #Event #SouthAmerica
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Location Details</Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://placehold.co/300x300@2x.png"
                  />
                  <Card.Text>
                    <br />
                    1000 NW, 2nd Avenue, Miami, Florida 33136
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginTop: 10 }}>
                <Card.Body>
                  <Card.Title>Share Event</Card.Title>
                  <Image
                    src="https://static-00.iconduck.com/assets.00/whatsapp-icon-511x512-57giwkg0.png"
                    width={40}
                    height={40}
                  />
                  <Image
                    src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
                    width={40}
                    height={40}
                    style={{ marginLeft: 10 }}
                  />
                  <Image
                    src="https://static-00.iconduck.com/assets.00/instagram-icon-512x512-85ckvxzj.png"
                    width={40}
                    height={40}
                    style={{ marginLeft: 10 }}
                  />
                  <Image
                    src="https://static-00.iconduck.com/assets.00/google-icon-512x512-yk2xx8br.png"
                    width={40}
                    height={40}
                    style={{ marginLeft: 10 }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "#00ff00" }}>
            <Col xs={6}>xs=6</Col>
            <Col xs={6}>xs=6</Col>
          </Row>
        </Container>
      </div>
      <div
        id="footer"
        style={{
          display: "flex",
          background: "#E0E0E0",
          minHeight: "13vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Footer
      </div>
    </div>
  );
}
