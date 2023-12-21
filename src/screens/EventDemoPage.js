import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button, Image } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function EventDemoPage(props) {
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
                <Card.Img
                  variant="top"
                  src="https://placehold.co/1000x400@2x.png"
                />
                <Card.Body>
                  <Card.Text style={{ paddingLeft: 10 }}>
                    <Row>
                      <Col xs={10} md={10}>
                        <Row style={{ fontWeight: "700" }}>
                          Rise and Toast MLK Weekend 2024 hosted by Machel
                          Montano
                        </Row>
                        <Row style={{ fontWeight: "500" }}>
                          Machel Montano hosts RISE + TOAST MLK Weekend
                        </Row>
                        <Row>
                          Sunday January 14th, 2024 (12pm - 9pm) | Price: EC$240
                        </Row>
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
                      [Rise: Brunching - 12pm - 4pm, Toast: Social 4pm - 9pm]<br />
                      <br />
                      Music by @doctoresan @silentaddy @deiondadj @greg_runway
                      @shadowfyah
                      <br />
                      Special guest @rickyplatinum
                      <br />
                      Exquisite Cuisine by: @kookinwithkryssi
                      <br />
                      For Cabana and sections: Text (754) 204-3753
                      <br />
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
                      Music by @doctoresan @silentaddy @deiondadj @greg_runway
                      @shadowfyah
                      <br />
                      Special guest @rickyplatinum Exquisite Cuisine by:
                      @kookinwithkryssi
                      <br />
                      For Cabana and sections: Text (754) 204-3753
                      <br />
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
                    @theurbanmia
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
