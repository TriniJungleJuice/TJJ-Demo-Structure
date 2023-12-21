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
          <Row style={{ backgroundColor: "#0000ff",marginTop:10 }}>
            <Col xs={6} md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
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
