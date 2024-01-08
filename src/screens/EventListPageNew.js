import React, { useEffect, useState } from "react";
import {Button, Card, Col, Form, Row } from "react-bootstrap";
import "../../src/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import VideoBlock from "./VideoBlock";
import MainCarousel from "../components/Carousels/MainCarousel";
import Navbars from "../components/mainNavbar/Navbars";
import Footer from "../components/footer/Footer";
import Slides from "../components/Carousels/Slides";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import { cities } from "../Json_Data/EventListPageData";

function EventListPageNew() {
  const [classes,setClasses]=useState("add-drawer")
  const [isNavExpanded, setIsNavExpanded] = useState(false)  
  const [opened, setOpened] = useState([]);
  const [show, setShow] = React.useState(false);
  const [calendarValue, onChangeCalendarValue] = useState(new Date());

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


  const handleAddClass=()=>{
      if(classes==="add-drawer")
      {
          setClasses("add-drawer add");
      }
      else{
          setClasses("add-drawer");
      }
  }

  useEffect(()=>{
if(isNavExpanded){
  setClasses("add-drawer")
}
  },[isNavExpanded])

  const handleNavExpanded=(val)=>{
    setIsNavExpanded(val)
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
      <Navbars handleClick={()=>handleAddClass()} handleNavExpanded={(val)=>handleNavExpanded(val)}/>
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
        <Slides/>
      </div>
      <Footer />
    </div>
    </div>
    <div className={classes}>
    { classes==="add-drawer add" &&
      <>
    <Card
                style={{
                  backgroundColor: "#212121",
                  borderRadius:0
                }}
              >
                <Card.Body style={{ color: "#FBFCFA" }}>
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    onClick={() => handleClick(1)}
                  >
                    <div style={{ width: "10%" }}>
                      {
                        opened.includes(1)?
                        <IoIosArrowUp style={{cursor:"pointer"}} size={20}/>
                        :
                        <IoIosArrowDown style={{cursor:"pointer"}} size={20}/>
                      }
                    </div>
                    <div style={{ width: "78%" }}>Date</div>
                    <div style={{ width: "12%" }}>Clear</div>
                  </div>
                  {opened.includes(1) ? (
                    <>
                      <div
                        style={{
                          marginTop: 10,
                        }}
                      >
                        <DatePicker
                          showIcon
                          selected={calendarValue}
                          onChange={(date) => onChangeCalendarValue(date)}
                          icon={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 48 48"
                            >
                              <mask id="ipSApplication0">
                                <g
                                  fill="none"
                                  stroke="#fff"
                                  strokeLinejoin="round"
                                  strokeWidth="4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    d="M40.04 22v20h-32V22"
                                  ></path>
                                  <path
                                    fill="#fff"
                                    d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                                  ></path>
                                </g>
                              </mask>
                              <path
                                fill="red"
                                d="M0 0h48v48H0z"
                                mask="url(#ipSApplication0)"
                              ></path>
                            </svg>
                          }
                        />
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
                  borderRadius:0
                }}
              >
                <Card.Body style={{ color: "#FBFCFA" }}>
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    onClick={() => handleClick(2)}
                  >
                    <div style={{ width: "10%" }}>
                    {
                        opened.includes(2)?
                        <IoIosArrowUp style={{cursor:"pointer"}} size={20}/>
                        :
                        <IoIosArrowDown style={{cursor:"pointer"}} size={20}/>
                      }
                    </div>
                    <div style={{ width: "78%" }}>Price</div>
                    <div style={{ width: "12%" }}>Clear</div>
                  </div>
                  {opened.includes(2) ? (
                    <>
                      <div
                        style={{
                          marginTop: 10,
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            marginRight: 10,
                            width: "10%",
                            color: "red",
                            fontWeight: "500",
                          }}
                        >
                          Free
                        </div>
                        <Form.Range
                          style={{
                            width: "50%",
                            display: "flex",
                            alignItems: "center",
                          }}
                          min={0}
                          max={2000}
                          step={100}
                          onChange={(e) => console.log(e.target.value)}
                        />
                        <div
                          style={{
                            marginLeft: 10,
                            width: "30%",
                            color: "red",
                            fontWeight: "500",
                          }}
                        >
                          Above 2000
                        </div>
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
                  borderRadius:0
                }}
              >
                <Card.Body style={{ color: "#FBFCFA" }}>
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    onClick={() => handleClick(3)}
                  >
                    <div style={{ width: "10%" }}>
                    {
                        opened.includes(3)?
                        <IoIosArrowUp style={{cursor:"pointer"}} size={20}/>
                        :
                        <IoIosArrowDown style={{cursor:"pointer"}} size={20}/>
                      }
                    </div>
                    <div style={{ width: "78%" }}>Place</div>
                    <div style={{ width: "12%" }}>Clear</div>
                  </div>
                  {opened.includes(3) ? (
                    <>
                      <div
                        style={{
                          marginTop: 10,
                          display: "flex",
                          flexDirection: "column",
                          paddingLeft: "0.5px",
                          height:"43vh",
                          overflowY:"scroll"
                        }}
                      >
                        {cities.map((item) => {
                          return (
                            <>
                              <div
                                style={{
                                  color: "#fff",
                                  fontWeight: "700",
                                  fontSize: "22px",
                                }}
                              >
                                {item.country}
                              </div>
                              <div
                                style={{
                                  marginTop: 10,
                                }}
                              >
                                {item.cities.map((d) => {
                                  return (
                                    <Button
                                      style={{
                                        backgroundColor: "transparent",
                                        borderColor: "red",
                                        color: "red",
                                        marginLeft: "10px",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      {d.name}
                                    </Button>
                                  );
                                })}
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Card.Body>
              </Card>
              </>
    }
    </div>
    </>
  );
}

export default EventListPageNew;
