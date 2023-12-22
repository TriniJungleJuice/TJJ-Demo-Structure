import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Data = [
  {
    id: 1,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1701355751_01347_skn-sugarmas-2023-sm.jpg",
    date: "Thursday, December 26th, 2023",
    title: "SugarMas 52 - St. Kitts & Nevis Carnival 2023",
    venues: "Various Venues: Basseterre, St. Kitts and Nevis",
  },
  {
    id: 2,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1701359664_05789_usvi-st-croix-crucian-christmas-festival-2023-sm.jpg",
    date: "Thursday, December 26th, 2023",
    title: "USVI St. Croix Crucian Christmas Festival 2023-2024",
    venues: "Various Venues: St. Croix, Virgin Islands (U.S.)",
  },
  {
    id: 7,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1699195469_01269_soca-baby-boatride-trinidad-2024-sm.jpg",
    date: "Thursday, December 26th, 2023",
    title: "Soca Baby Boat Cruise 2024",
    venues: "Harbour Master. Cocorite, Trinidad and Tobago",
  },
  {
    id: 3,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1699194775_04579_fwts-rediscover-jan20-2024-175.jpg",
    date: "Friday, December 27th, 2023",
    title: "Fete With The Saints 2024 'Rediscover'",
    venues: "St. Mary's College Grounds. Port of Spain, Trinidad and Tobago",
  },
  {
    id: 5,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1699993076_23579_toothpicks-jan27-2024-sm.jpg",
    date: "Friday, December 27th, 2023",
    title: "Toothpicks: Brunch on the Sea",
    venues: "Rock Back on the Bay. Chaguaramas, Trinidad and Tobago",
  },
  {
    id: 4,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1702923093_02467_cwts-jan26-2024-sm.jpg",
    date: "Saturday, December 28th, 2023",
    title: "Cruise With The Saints 2024 'Discover'",
    venues: "Harbour Master. Cocorite, Trinidad and Tobago",
  },
  {
    id: 8,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1701355751_01347_skn-sugarmas-2023-sm.jpg",
    date: "Saturday, December 28th, 2023",
    title: "SugarMas 52 - St. Kitts & Nevis Carnival 2023",
    venues: "Various Venues: Basseterre, St. Kitts and Nevis",
  },
  {
    id: 9,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1701359664_05789_usvi-st-croix-crucian-christmas-festival-2023-sm.jpg",
    date: "Saturday, December 28th, 2023",
    title: "USVI St. Croix Crucian Christmas Festival 2023-2024",
    venues: "Various Venues: St. Croix, Virgin Islands (U.S.)",
  },
  {
    id: 10,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1699194775_04579_fwts-rediscover-jan20-2024-175.jpg",
    date: "Saturday, December 28th, 2023",
    title: "Fete With The Saints 2024 'Rediscover'",
    venues: "St. Mary's College Grounds. Port of Spain, Trinidad and Tobago",
  },
  {
    id: 11,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1702923093_02467_cwts-jan26-2024-sm.jpg",
    date: "Sunday, December 29th, 2023",
    title: "Cruise With The Saints 2024 'Discover'",
    venues: "Harbour Master. Cocorite, Trinidad and Tobago",
  },
  {
    id: 12,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1699993076_23579_toothpicks-jan27-2024-sm.jpg",
    date: "Sunday, December 29th, 2023",
    title: "Toothpicks: Brunch on the Sea",
    venues: "Rock Back on the Bay. Chaguaramas, Trinidad and Tobago",
  },

  {
    id: 6,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1701269776_01479_teddyson-john-stripped-jan31-2024-sm.jpg",
    date: "Sunday, December 29th, 2023",
    title: "Stripped - A Teddyson John Experience 'Carnival Magic'",
    venues:
      "National Academy for the Performing Arts (NAPA). Port of Spain, Trinidad and Tobago",
  },
  {
    id: 13,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1701269776_01479_teddyson-john-stripped-jan31-2024-sm.jpg",
    date: "Monday, December 30th, 2023",
    title: "Stripped - A Teddyson John Experience 'Carnival Magic'",
    venues:
      "National Academy for the Performing Arts (NAPA). Port of Spain, Trinidad and Tobago",
  },
  {
    id: 14,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1699195469_01269_soca-baby-boatride-trinidad-2024-sm.jpg",
    date: "Monday, December 30th, 2023",
    title: "Soca Baby Boat Cruise 2024",
    venues: "Harbour Master. Cocorite, Trinidad and Tobago",
  },
  {
    id: 15,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1701355751_01347_skn-sugarmas-2023-sm.jpg",
    date: "onday, December 31st, 2023",
    title: "SugarMas 52 - St. Kitts & Nevis Carnival 2023",
    venues: "Various Venues: Basseterre, St. Kitts and Nevis",
  },
  {
    id: 16,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1701359664_05789_usvi-st-croix-crucian-christmas-festival-2023-sm.jpg",
    date: "Monday, December 31st, 2023",
    title: "USVI St. Croix Crucian Christmas Festival 2023-2024",
    venues: "Various Venues: St. Croix, Virgin Islands (U.S.)",
  },
  {
    id: 17,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1699194775_04579_fwts-rediscover-jan20-2024-175.jpg",
    date: "Thursday, December 26th, 2023",
    title: "Fete With The Saints 2024 'Rediscover'",
    venues: "St. Mary's College Grounds. Port of Spain, Trinidad and Tobago",
  },
  {
    id: 18,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1702923093_02467_cwts-jan26-2024-sm.jpg",
    date: "Tuesday, January 1st, 2024",
    title: "Cruise With The Saints 2024 'Discover'",
    venues: "Harbour Master. Cocorite, Trinidad and Tobago",
  },
  {
    id: 19,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1699993076_23579_toothpicks-jan27-2024-sm.jpg",
    date: "Tuesday, January 1st, 2024",
    title: "Toothpicks: Brunch on the Sea",
    venues: "Rock Back on the Bay. Chaguaramas, Trinidad and Tobago",
  },
  {
    id: 20,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1701269776_01479_teddyson-john-stripped-jan31-2024-sm.jpg",
    date: "Tuesday, January 1st, 2024",
    title: "Stripped - A Teddyson John Experience 'Carnival Magic'",
    venues:
      "National Academy for the Performing Arts (NAPA). Port of Spain, Trinidad and Tobago",
  },
  {
    id: 21,
    imageLink:
      "https://www.trinijunglejuice.com/tjjevents/events/images/feature/2023/1699195469_01269_soca-baby-boatride-trinidad-2024-sm.jpg",
    date: "Tuesday, January 1st, 2024",
    title: "Soca Baby Boat Cruise 2024",
    venues: "Harbour Master. Cocorite, Trinidad and Tobago",
  },
];

function EventListPage() {
  const [opened, setOpened] = useState([]);
  const [show, setShow] = React.useState(false);

  const handleClick = (index) => {
    if (opened.includes(index)) {
      for (let i = 0; i < opened.length; i++) {
        if (opened[i] == index) {
          opened.splice(i, 1);
          setShow(!show);
        }
      }
    } else {
      setOpened((prev) => [...prev, index]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        backgroundColor: "#000000",
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
        style={{
          display: "flex",
          backgroundColor: "#000000",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Container fluid="md">
          <Row>
            <Col xs={9} md={8}>
              <Row>
                {Data.map((item) => {
                  return (
                    <Col
                      key={item.id}
                      xs={6}
                      md={4}
                      style={{ marginBottom: 10 }}
                    >
                      <Card
                        style={{
                          backgroundColor: "#212121",
                          minHeight: 420,
                          position: "relative",
                        }}
                      >
                        <div style={{ height: 200, position: "relative" }}>
                          <Card.Img
                            variant="top"
                            src={item.imageLink}
                            style={{ height: 200 }}
                          />
                          <div
                            style={{
                              backgroundColor: "#282828",
                              color: "#FBFCFA",
                              position: "absolute",
                              bottom: 0,
                              width: "100%",
                              textAlign: "center",
                            }}
                          >
                            {item.date}
                          </div>
                        </div>
                        <Card.Body>
                          <Card.Title
                            style={{ color: "#FBFCFA", fontWeight: "700" }}
                          >
                            {item.title.substring(0, 40)}...
                          </Card.Title>
                          <Card.Text
                            style={{ color: "#FBFCFA", fontWeight: "400" }}
                          >
                            @ {item.venues.substring(0, 40)}...
                          </Card.Text>
                          <Button
                            style={{
                              backgroundColor: "red",
                              borderColor: "red",
                              position: "absolute",
                              bottom: 15,
                              right: 15,
                            }}
                          >
                            View
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col xs={3} md={4}>
              <Card
                style={{
                  backgroundColor: "#212121",
                }}
                onClick={() => handleClick(1)}
              >
                <Card.Body style={{ color: "#FBFCFA" }}>
                  <Row>
                    <Col xs={3} md={1}>
                      <Card.Img
                        style={{ width: "1rem" }}
                        src="https://www.pngkit.com/png/full/273-2739733_white-drop-down-arrow.png"
                      />
                    </Col>
                    <Col xs={6} md={7}>
                      Date
                    </Col>
                    <Col xs={3} md={3}>
                      Clear
                    </Col>
                  </Row>
                  {opened.includes(1) ? (
                    <>
                      <div
                        style={{
                          marginTop: 10,
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "red",
                            color: "red",
                            marginLeft: "0.5px",
                          }}
                        >
                          Today
                        </Button>
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "red",
                            color: "red",
                            marginLeft: "10px",
                          }}
                        >
                          Tomorrow
                        </Button>
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "red",
                            color: "red",
                            marginLeft: "10px",
                          }}
                        >
                          This Weekend
                        </Button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Card.Body>
              </Card>
              <Card
                style={{
                  backgroundColor: "#212121",
                  marginTop: 10,
                }}
                onClick={() => handleClick(2)}
              >
                <Card.Body style={{ color: "#FBFCFA" }}>
                  <Row>
                    <Col xs={3} md={1}>
                      <Card.Img
                        style={{ width: "1rem" }}
                        src="https://www.pngkit.com/png/full/273-2739733_white-drop-down-arrow.png"
                      />
                    </Col>
                    <Col xs={6} md={7}>
                      Price
                    </Col>
                    <Col xs={3} md={3}>
                      Clear
                    </Col>
                  </Row>
                  {opened.includes(2) ? (
                    <>
                      <div
                        style={{
                          marginTop: 10,
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "red",
                            color: "red",
                            marginLeft: "0.5px",
                          }}
                        >
                          Free
                        </Button>
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "red",
                            color: "red",
                            marginLeft: "10px",
                          }}
                        >
                          0-500
                        </Button>
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "red",
                            color: "red",
                            marginLeft: "10px",
                          }}
                        >
                          501-2000
                        </Button>
                      </div>
                      <div style={{ marginTop: 10 }}>
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "red",
                            color: "red",
                            marginLeft: "0.5px",
                          }}
                        >
                          Above 2000
                        </Button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Card.Body>
              </Card>
              <Card
                style={{
                  backgroundColor: "#212121",
                  marginTop: 10,
                }}
                onClick={() => handleClick(3)}
              >
                <Card.Body style={{ color: "#FBFCFA" }}>
                  <Row>
                    <Col xs={3} md={1}>
                      <Card.Img
                        style={{ width: "1rem" }}
                        src="https://www.pngkit.com/png/full/273-2739733_white-drop-down-arrow.png"
                      />
                    </Col>
                    <Col xs={6} md={7}>
                      Place
                    </Col>
                    <Col xs={3} md={3}>
                      Clear
                    </Col>
                  </Row>
                  {opened.includes(3) ? (
                    <>
                      <Row
                        style={{
                          marginTop: 10,
                          color: "red",
                          marginLeft: "0.5px",
                        }}
                      >
                        Caribbean Islands
                      </Row>
                      <Row
                        style={{
                          marginTop: 10,
                          color: "red",
                          marginLeft: "0.5px",
                        }}
                      >
                        North America
                      </Row>
                      <Row
                        style={{
                          marginTop: 10,
                          color: "red",
                          marginLeft: "0.5px",
                        }}
                      >
                        Europe
                      </Row>
                      <Row
                        style={{
                          marginTop: 10,
                          color: "red",
                          marginLeft: "0.5px",
                        }}
                      >
                        Dubai
                      </Row>
                      <Row
                        style={{
                          marginTop: 10,
                          color: "red",
                          marginLeft: "0.5px",
                        }}
                      >
                        Mexico
                      </Row>
                    </>
                  ) : (
                    <></>
                  )}
                </Card.Body>
              </Card>
            </Col>
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

export default EventListPage;
