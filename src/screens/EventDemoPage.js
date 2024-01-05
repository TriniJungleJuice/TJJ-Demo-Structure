import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button, Image } from "react-bootstrap";
import Calendar from "react-calendar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import Navbar from "./Navbar";
import "react-calendar/dist/Calendar.css";
import "../../src/styles.css";

export default function EventDemoPage(props) {
  const [calendarValue, onChangeCalendarValue] = useState(new Date());

  function mainNavbar() {
    return (
      <>
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          style={{
            width: "100%",
            height: "12vh",
            borderBottom: "1px solid rgb(212, 0, 0)",
          }}
          sticky="top"
        >
          <Container style={{ borderBottom: 5, borderColor: "red" }}>
            <Navbar.Brand href="#home">
              <Image
                src="http://www.trinijunglejuice.com/home/menu/images/logo.png"
                width={200}
                height={55.8}
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#store">Store</Nav.Link>
              <Nav.Link href="#carnival">Carnival</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
              <Nav.Link href="#photos">Photos</Nav.Link>
              <Nav.Link href="#videos">Videos</Nav.Link>
              <Nav.Link href="#music">Music</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }

  function footer() {
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
        }}
      >
        <div
          style={{
            display: "flex",
            height: "15%",
            color: "blue",
            // backgroundColor: "yellow",
            alignItems: "center",
          }}
        >
           <marquee style={{ color: 'red' }}>
           Disclaimer Notice: TriniJungleJuice.com is not responsible for the
            cancellation, change of date or venue of events. Always check with
            the event promoter(s) for accuracy of the information provided
            herein. We are not responsible for typos, accuracy, and/or other
            errors and omissions in the information provided by other parties.
            TriniJungleJuice.com is not affiliated with any promotions or
            promoters, unless specifically stated.
            </marquee>
        </div>
        <div style={{ display: 'flex', height: "70%", flexDirection: 'row' }}>
          <div style={{ display: 'flex', width: "33%", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Image
                src={require('../assets/tjj-logo.png')}
                // width={200}
                // height={55.8}
              />
          </div>
          <div style={{ display: 'flex', width: "33%", flexDirection: 'row' }}>
          <div style={{ display: 'flex', width: "50%", flexDirection: 'column', justifyContent:'center',alignItems: 'center' }}>
            <a href="#">Store</a>
            <a href="#">Carnival</a>
            <a href="#">Events</a>
            <a href="#">Photos</a>
          </div>
          <div style={{ display: 'flex', width: "50%", flexDirection: 'column', justifyContent:'center',alignItems: 'center' }}>
          <a href="#">Videos</a>
            <a href="#">Music</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
          </div>
          </div>
          <div style={{ display: 'flex', width: "34%", color: 'white', flexDirection: 'column', justifyContent:'center',alignItems: 'center' }}>
            221B, Baker Street, 90265
          </div>
        </div>
        <div style={{ display: 'flex', height: "15%", color: 'gray', justifyContent: 'center', alignItems: 'center' }}>
          {'\u00A9'} 2023 Copyright: Trini Jungle Juice | Made by Renderbit Technologies
        </div>
      </div>
    );
  }

  function eventCard() {
    return (
      <Card
        style={{
          width: "17.5rem",
          height: "28.5rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          backgroundColor: "#424242",
        }}
      >
        <Card.Img variant="top" src="https://www.trinijunglejuice.com/home/images/carnival/berlin/berlin_carnival-2.jpg" />
        <Card.Body style={{ color: "#ffffff" }}>
          <Card.Title>Christmas Carnival 2023</Card.Title>
          <Card.Text>
            The most happening carnival in town
            <br />
            <br />
            Miami, FL | 25th Dec 2023 (6pm onwards)
          </Card.Text>
          <Button style={{ backgroundColor: "red", borderColor: "red" }}>
            Details
          </Button>
        </Card.Body>
      </Card>
    );
  }

  function eventsCarousel() {
    return (
      <Carousel>
        <Carousel.Item>
          <Row>
            <Col xs={4} md={4}>
              <Image
                src="http://www.trinijunglejuice.com/events/2023/skn-sugarmas-national-events-calendar-2023.jpg"
                text="First slide"
                width={200}
                height={400}
              />
            </Col>
            <Col xs={4} md={4}>
            <Image
                src="http://www.trinijunglejuice.com/events/2023/skn-sugarmas-privates-events-calendar-2023.jpg"
                text="First slide"
                width={200}
                height={400}
              />
            </Col>
            <Col xs={4} md={4}>
            <Image
                src="https://4f14f3f2b2e5fd1c43c0-19fdc616b209d38d8f477bc6e666e66f.ssl.cf1.rackcdn.com/events/gala-vant-midnight-masquerade-272605-pXmvMj6Ngk.jpg"
                text="First slide"
                width={200}
                height={400}
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs={6} md={6}>
              {eventCard()}
            </Col>
            <Col xs={6} md={6}>
              {eventCard()}
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    );
  }

  function eventTabs() {
    return (
      <Tabs
        defaultActiveKey="home"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Dec 2023">
          {eventsCarousel()}
        </Tab>
        <Tab eventKey="profile" title="Jan 2024">
          Upcoming events for January 2024
        </Tab>
        <Tab eventKey="longer-tab" title="Feb 2024">
          Upcoming events for February 2024
        </Tab>
        <Tab eventKey="contact" title="More" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        backgroundColor: "#212121",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        id="content"
        style={{ display: "flex", background: "#000000", padding: 10 }}
      >
        <Container fluid="md">
          <Row>
            <Col xs={12} md={12}>
              <Card style={{ backgroundColor: "#212121" }}>
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
                  <Card.Text style={{ paddingLeft: 10, color: "#ffffff" }}>
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
                        <Button
                          style={{ backgroundColor: "red", borderColor: "red" }}
                        >
                          Book Tickets
                        </Button>
                      </Col>
                    </Row>
                    <hr className="hr" />
                    <Row style={{ paddingTop: 10 }}>
                      [Rise: Brunching - 12pm - 4pm, Toast: Social 4pm - 9pm]
                      <br />
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
                      <span style={{ color: "red", marginLeft: -10 }}>
                        #Event #SouthAmerica
                      </span>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: 10 }}>
            <Col xs={6} md={3}>
              <Card style={{ backgroundColor: "#212121" }}>
                <Card.Body style={{ color: "#ffffff" }}>
                  <Card.Title>Calendar</Card.Title>
                  <Calendar
                    onChange={onChangeCalendarValue}
                    value={calendarValue}
                  />
                  <Card.Text>
                    You can also add this event to your own calendar by clicking
                    on the links below
                  </Card.Text>
                  <h6>Add to calendar</h6>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Image
                      style={{
                        backgroundColor: "white",
                        padding: 5,
                        borderRadius: 30,
                      }}
                      src="https://static-00.iconduck.com/assets.00/google-calendar-icon-512x512-prclo0i6.png"
                      width={40}
                      height={40}
                    />
                    <div
                      style={{
                        display: "flex",
                        marginLeft: 10,
                        width: 40,
                        height: 40,
                        backgroundColor: "white",
                        borderRadius: 30,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="https://static-00.iconduck.com/assets.00/apple-icon-430x512-tmf55ggw.png"
                        width={25}
                        height={30}
                      />
                    </div>
                    <Image
                      src="https://static-00.iconduck.com/assets.00/yahoo-icon-512x512-mvtq0k7x.png"
                      width={40}
                      height={40}
                      style={{
                        marginLeft: 10,
                        backgroundColor: "white",
                        padding: 5,
                        borderRadius: 30,
                      }}
                    />
                    <Image
                      src="https://static-00.iconduck.com/assets.00/file-type-outlook-icon-506x512-xwzjqclz.png"
                      width={40}
                      height={40}
                      style={{
                        marginLeft: 10,
                        backgroundColor: "white",
                        padding: 5,
                        borderRadius: 30,
                      }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={6}>
              <Card style={{ backgroundColor: "#212121", paddingBottom: 20 }}>
                <Card.Body style={{ paddingLeft: 20, color: "#ffffff" }}>
                  <Card.Title>Featured Photos</Card.Title>
                  <Image
                    src="https://www.trinijunglejuice.com/home/images/carnival/berlin/berlin_carnival-10.jpg"
                    width={190}
                    height={190}
                    style={{ margin: 2 }}
                  />
                  <Image
                    src="https://www.trinijunglejuice.com/home/images/carnival/berlin/berlin_carnival-2.jpg"
                    width={190}
                    height={190}
                    style={{ margin: 2 }}
                  />
                  <Image
                    src="https://www.trinijunglejuice.com/home/images/carnival/berlin/berlin_carnival-6.jpg"
                    width={190}
                    height={190}
                    style={{ margin: 2 }}
                  />
                  <Image
                    src="https://www.trinijunglejuice.com/home/images/carnival/berlin/berlin_carnival-5.jpg"
                    width={190}
                    height={190}
                    style={{ margin: 2 }}
                  />
                  <Image
                    src="https://www.trinijunglejuice.com/home/images/carnival/berlin/berlin_carnival-1.jpg"
                    width={190}
                    height={190}
                    style={{ margin: 2 }}
                  />
                  <Image
                    src="https://www.trinijunglejuice.com/home/images/carnival/berlin/berlin_carnival-9.jpg"
                    width={190}
                    height={190}
                    style={{ margin: 2 }}
                  />
                  {/* <Row style={{ paddingTop: 10 }}>{eventTabs()}</Row> */}
                </Card.Body>
                <Card.Body
                  style={{
                    paddingLeft: 20,
                    paddingRight: 30,
                    color: "#ffffff",
                  }}
                >
                  <Card.Title>Featured Events</Card.Title>
                  <Row style={{ paddingTop: 10 }}>{eventTabs()}</Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card style={{ backgroundColor: "#212121" }}>
                <Card.Body style={{ paddingLeft: 10, color: "#ffffff" }}>
                  <Card.Title>Location Details</Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://i.stack.imgur.com/8KmHl.png"
                  />
                  <Card.Text>
                    <br />
                    @theurbanmia
                    <br />
                    1000 NW, 2nd Avenue, Miami, Florida 33136
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginTop: 10, backgroundColor: "#212121" }}>
                <Card.Body style={{ paddingLeft: 10, color: "#ffffff" }}>
                  <Card.Title>Share Event</Card.Title>
                  <Image
                    src="https://static-00.iconduck.com/assets.00/whatsapp-icon-512x511-rczuooxy.png"
                    width={40}
                    height={40}
                  />
                  <Image
                    src="https://static-00.iconduck.com/assets.00/facebook-color-icon-512x512-y7c9r37n.png"
                    width={40}
                    height={40}
                    style={{ marginLeft: 10 }}
                  />
                  <Image
                    src="https://static-00.iconduck.com/assets.00/instagram-icon-512x511-1e54z7gr.png"
                    width={40}
                    height={40}
                    style={{ marginLeft: 10 }}
                  />
                  <Image
                    src="https://static-00.iconduck.com/assets.00/google-icon-512x512-yk2xx8br.png"
                    width={40}
                    height={40}
                    style={{ marginLeft: 10, borderRadius: 30 }}
                  />
                </Card.Body>
              </Card>
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
        </Container>
      </div>
      {footer()}
      {/* <div
        id="footer"
        style={{
          display: "flex",
          background: "#E0E0E0",
          minHeight: "13vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        2023 Trini Jungle Juice | Designed by Renderbit Technologies
      </div> */}
    </div>
  );
}
