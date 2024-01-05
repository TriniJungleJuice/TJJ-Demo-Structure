import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "../../src/styles.css";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Slider from "react-slick";
import VideoBlock from "./VideoBlock";

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

const cities = [
  {
    country: "Caribbean Islands",
    cities: [
      {
        name: "Antigua",
      },
      {
        name: "Bahamas",
      },
      {
        name: " Barbados",
      },
      {
        name: " Cayman Islands",
      },
      {
        name: " Dominica",
      },
      {
        name: " Grenada",
      },
      {
        name: " Guadeloupe",
      },
      {
        name: " Guyana",
      },
      {
        name: " Haiti",
      },
      {
        name: " Jamaica",
      },
      {
        name: " Martinique",
      },
      {
        name: " Puerto Rico",
      },
      {
        name: " St. Lucia",
      },
      {
        name: " St. Maarten",
      },
      {
        name: " St. Vincent",
      },
      {
        name: " Trinidad & Tobago",
      },
      {
        name: " Turks & Caicos",
      },
      {
        name: " U.S. Virgin Islands",
      },
    ],
  },
  {
    country: "North America",
    cities: [
      {
        name: " Atlanta",
      },
      {
        name: " Bermuda",
      },
      {
        name: " Houston",
      },
      {
        name: " Miami | Orlando | Tampa",
      },
      {
        name: " New York",
      },
      {
        name: " Other (USA)",
      },
      {
        name: " Toronto",
      },
      {
        name: "Washington DC | DMV",
      },
    ],
  },
  {
    country: "Europe",
    cities: [
      {
        name: "France",
      },
      {
        name: " Germany",
      },
      {
        name: " London",
      },
      {
        name: " Spain",
      },
    ],
  },
  {
    country: "Rest of World",
    cities: [
      {
        name: "Dubai",
      },
      {
        name: "Mexico",
      },
    ],
  },
];

function EventListPageNew() {
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

  const slickSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    height: "100vh",
  };

  function mainCarousel() {
    return (
      <>
        <Slider {...slickSliderSettings}>
          <div>
            <Row
              style={{
                display: "flex",
                minHeight: "100vh",
                alignItems: "center",
              }}
              className="slick-bg bg-1"
            >
              <Col
                className="carousel-slider-box"
                xl={12}
                lg={12}
                md={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100vh",
                  width: "100%",
                }}
              >
                <div style={{ width: "50%", marginLeft: "8%" }}>
                  <h3>
                    <span className="badge bg-warning text-dark">New</span>
                  </h3>
                  <h1 className="head fadeInUp animated">
                    Carribean Event - 2024
                  </h1>
                  <div
                    className="slide-info fadeInUp animated"
                    data-animation-in="fadeInUp"
                    data-delay-in="1"
                  >
                    <span>2024 | </span> <span className="radius">+18</span>{" "}
                    <span>| All day</span>
                  </div>
                  <p
                    data-animation-in="fadeInUp"
                    data-delay-in="1"
                    className="slide-info fadeInUp animated"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <div
                    className="slider-buttons"
                    data-animation-in="fadeInUp"
                    data-delay-in="1"
                  >
                    <div className="btns hvr-sweep-to-right" tabIndex="0">
                      <i className="fa fa-play mr-2"></i>
                      Buy Tickets
                    </div>{" "}
                    <div
                      className="btns hvr-sweep-to-right"
                      tabIndex="0"
                      style={{ marginLeft: 10 }}
                    >
                      <i className="fas fa-plus mr-2"></i>Event Details
                    </div>
                  </div>
                </div>
                <div></div>
              </Col>
            </Row>
          </div>
          <div>
            <Row
              style={{
                display: "flex",
                minHeight: "100vh",
                alignItems: "center",
              }}
              className="slick-bg bg-2"
            >
              <Col xl={6} lg={12} md={12}>
                <h3>
                  <span className="badge bg-warning text-dark">New</span>
                </h3>
                <h1>Iron door</h1>
                <div
                  className="slide-info"
                  data-animation-in="fadeInUp"
                  data-delay-in="1"
                >
                  <span>2021</span> <span className="radius">+18</span>{" "}
                  <span>2h 6m</span>
                </div>
                <p data-animation-in="fadeInUp" data-delay-in="1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <div
                  className="slider-buttons d-flex align-items-center"
                  data-animation-in="fadeInUp"
                  data-delay-in="1"
                >
                  <a
                    className="btn hvr-sweep-to-right"
                    href="watch-movie.html"
                    tabIndex="0"
                  >
                    <i aria-hidden="true" className="fa fa-play mr-2"></i>
                    Play Now
                  </a>{" "}
                  <a
                    className="btn hvr-sweep-to-right ml-3"
                    href="#"
                    tabIndex="0"
                  >
                    <i className="fas fa-plus mr-2"></i>My List
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Slider>
      </>
    );
  }

  function mainCarouselHtml() {
    return (
      <>
        <div className="main-slider" id="main-slider">
          <div className="slider big-slider slider-wrap">
            <div className="slide slick-bg bg-1">
              <div className="container-fluid position-relative h-100">
                <div className="slider-content h-100">
                  <div className="row align-items-center h-100">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                      <h3 data-animation-in="fadeInUp" data-delay-in="1">
                        <span className="badge bg-warning text-dark">New</span>
                      </h3>
                      <h1 data-animation-in="fadeInUp" data-delay-in="1">
                        Iron door
                      </h1>
                      <div
                        className="slide-info"
                        data-animation-in="fadeInUp"
                        data-delay-in="1"
                      >
                        <span>2021</span> <span className="radius">+18</span>{" "}
                        <span>2h 6m</span>
                      </div>
                      <p data-animation-in="fadeInUp" data-delay-in="1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                      <div
                        className="slider-buttons d-flex align-items-center"
                        data-animation-in="fadeInUp"
                        data-delay-in="1"
                      >
                        <a
                          className="btn hvr-sweep-to-right"
                          href="watch-movie.html"
                          tabIndex="0"
                        >
                          <i aria-hidden="true" className="fa fa-play mr-2"></i>
                          Play Now
                        </a>{" "}
                        <a
                          className="btn hvr-sweep-to-right ml-3"
                          href="#"
                          tabIndex="0"
                        >
                          <i className="fas fa-plus mr-2"></i>My List
                        </a>
                      </div>
                    </div>
                    {/* <!-- Col End --> */}
                  </div>
                  {/* <!-- Row End --> */}
                </div>
                {/* <!-- Slider Content End --> */}
              </div>
              {/* <!-- Container End --> */}
            </div>
            {/* <!-- Slide 1 End --> */}
            <div className="slide slick-bg bg-2">
              <div className="container-fluid position-relative h-100">
                <div className="slider-content h-100">
                  <div className="row align-items-center h-100">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                      <h3 data-animation-in="fadeInUp" data-delay-in="1">
                        <span className="badge bg-warning text-dark">New</span>
                      </h3>
                      <h1 data-animation-in="fadeInUp" data-delay-in="1">
                        The Earth
                      </h1>
                      <div
                        className="slide-info"
                        data-animation-in="fadeInUp"
                        data-delay-in="1"
                      >
                        <span>2021</span> <span className="radius">+18</span>{" "}
                        <span>2h 6m</span>
                      </div>
                      <p data-animation-in="fadeInUp" data-delay-in="1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                      <div
                        className="slider-buttons d-flex align-items-center"
                        data-animation-in="fadeInUp"
                        data-delay-in="1"
                      >
                        <a
                          className="btn hvr-sweep-to-right"
                          href="watch-movie.html"
                          tabIndex="0"
                        >
                          <i aria-hidden="true" className="fa fa-play mr-2"></i>
                          Play Now
                        </a>{" "}
                        <a
                          className="btn hvr-sweep-to-right ml-3"
                          href="#"
                          tabIndex="0"
                        >
                          <i className="fas fa-plus mr-2"></i>My List
                        </a>
                      </div>
                    </div>
                    {/* <!-- Col End --> */}
                  </div>
                  {/* <!-- Row End --> */}
                </div>
                {/* <!-- Slider Content End --> */}
              </div>
              {/* <!-- Container End --> */}
            </div>
            {/* <!-- Slide 2 End --> */}
            <div className="slide slick-bg bg-3">
              <div className="container-fluid position-relative h-100">
                <div className="slider-content h-100">
                  <div className="row align-items-center h-100">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                      <h3 data-animation-in="fadeInUp" data-delay-in="1">
                        <span className="badge bg-warning text-dark">New</span>
                      </h3>
                      <h1 data-animation-in="fadeInUp" data-delay-in="1">
                        City dreams
                      </h1>
                      <div
                        className="slide-info"
                        data-animation-in="fadeInUp"
                        data-delay-in="1"
                      >
                        <span>2021</span> <span className="radius">+18</span>{" "}
                        <span>2h 6m</span>
                      </div>
                      <p data-animation-in="fadeInUp" data-delay-in="1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                      <div
                        className="slider-buttons d-flex align-items-center"
                        data-animation-in="fadeInUp"
                        data-delay-in="1"
                      >
                        <a
                          className="btn hvr-sweep-to-right"
                          href="watch-movie.html"
                          tabIndex="0"
                        >
                          <i aria-hidden="true" className="fa fa-play mr-2"></i>
                          Play Now
                        </a>{" "}
                        <a
                          className="btn hvr-sweep-to-right ml-3"
                          href="#"
                          tabIndex="0"
                        >
                          <i className="fas fa-plus mr-2"></i>My List
                        </a>
                      </div>
                    </div>
                    {/* <!-- Col End --> */}
                  </div>
                  {/* <!-- Row End --> */}
                </div>
                {/* <!-- Slider Content End --> */}
              </div>
              {/* <!-- Container End --> */}
            </div>
            {/* <!-- Slide 3 End --> */}
          </div>
          {/* <!-- Slide Wrap End --> */}
        </div>
      </>
    );
  }

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
          <div
            style={{
              display: "flex",
              width: "33%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={require("../assets/tjj-logo.png")}
              // width={200}
              // height={55.8}
            />
          </div>
          <div style={{ display: "flex", width: "33%", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                width: "50%",
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
            <div
              style={{
                display: "flex",
                width: "50%",
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
          </div>
          <div
            style={{
              display: "flex",
              width: "34%",
              color: "white",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            221B, Baker Street, 90265
          </div>
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
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        backgroundColor: "#000000",
        flexDirection: "column",
      }}
    >
      {mainNavbar()}
      {mainCarousel()}
      <div className="container mt-5 mb-4">
        <div className="head fadeInUp animated"><h2>Events near you</h2></div>
        <Row>
          <Col xs={2} md={2} xl={2}>
            <VideoBlock
              imgSrc={
                "https://www.trinijunglejuice.com/events/2024/rise-and-toast-jan14-2024.jpg"
              }
            />
          </Col>
          <Col xs={2} md={2} xl={2}>
            <VideoBlock imgSrc={"http://www.trinijunglejuice.com/events/2023/skn-sugarmas-privates-events-calendar-2023.jpg"} />
          </Col>
          <Col xs={2} md={2} xl={2}>
          <VideoBlock imgSrc={"https://4f14f3f2b2e5fd1c43c0-19fdc616b209d38d8f477bc6e666e66f.ssl.cf1.rackcdn.com/events/gala-vant-midnight-masquerade-272605-pXmvMj6Ngk.jpg"} />
          </Col>
          <Col xs={2} md={2} xl={2}>
          <VideoBlock imgSrc={"http://www.trinijunglejuice.com/events/2023/skn-sugarmas-national-events-calendar-2023.jpg"} />
          </Col>
          <Col xs={2} md={2} xl={2}>
          <VideoBlock imgSrc={"https://4f14f3f2b2e5fd1c43c0-19fdc616b209d38d8f477bc6e666e66f.ssl.cf1.rackcdn.com/events/gala-vant-midnight-masquerade-272605-pXmvMj6Ngk.jpg"} />
          </Col>
          <Col xs={2} md={2} xl={2}>
            <VideoBlock />
          </Col>
        </Row>
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
              >
                <Card.Body style={{ color: "#FBFCFA" }}>
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    onClick={() => handleClick(1)}
                  >
                    <div style={{ width: "10%" }}>
                      {opened.includes(1) ? (
                        <IoIosArrowUp size={20} />
                      ) : (
                        <IoIosArrowDown size={20} />
                      )}
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
                }}
              >
                <Card.Body style={{ color: "#FBFCFA" }}>
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    onClick={() => handleClick(2)}
                  >
                    <div style={{ width: "10%" }}>
                      {opened.includes(2) ? (
                        <IoIosArrowUp size={20} />
                      ) : (
                        <IoIosArrowDown size={20} />
                      )}
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
                }}
              >
                <Card.Body style={{ color: "#FBFCFA" }}>
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    onClick={() => handleClick(3)}
                  >
                    <div style={{ width: "10%" }}>
                      {opened.includes(3) ? (
                        <IoIosArrowUp size={20} />
                      ) : (
                        <IoIosArrowDown size={20} />
                      )}
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
            </Col>
          </Row>
        </Container>
      </div>
      {footer()}
    </div>
  );
}

export default EventListPageNew;
