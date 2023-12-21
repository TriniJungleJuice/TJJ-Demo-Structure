import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export function EventDetailPage(props) {
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
        <Container fluid="md" style={{ backgroundColor: "#000000" }}>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
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
          </Row>
          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row style={{ backgroundColor: "#0000ff" }}>
            <Col xs={6} md={4}>
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
            <Col xs={6} md={4}>
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
            <Col xs={6} md={4}>
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
          </Row>

          {/* Columns are always 50% wide, on mobile and desktop */}
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
