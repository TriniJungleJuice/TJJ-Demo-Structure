import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { default as BSNavbar } from "react-bootstrap/Navbar";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ handleClick, handleNavExpanded }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
    handleNavExpanded(!isNavExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BSNavbar
        bg="dark"
        data-bs-theme="dark"
        style={{
          width: "100%",
          minHeight: "12vh",
          borderBottom: "1px solid rgb(212, 0, 0)",
        }}
        expand="lg"
        sticky="top"
        collapseOnSelect={isNavExpanded}
      >
        <Container>
          <BSNavbar.Brand href="#home">
            <Image
              src="http://www.trinijunglejuice.com/home/menu/images/logo.png"
              width={width < 420 ? 160 : 200}
              height={55.8}
            />
          </BSNavbar.Brand>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {width < 993 && (
              <Nav
                className="justify-content-end"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Nav.Link
                  href="#filter"
                  onClick={() => {
                    setIsNavExpanded(false);
                    handleNavExpanded(false);
                    handleClick();
                  }}
                >
                  <FontAwesomeIcon icon={faFilter} />
                </Nav.Link>
                <Nav.Link href="#user">
                  <FontAwesomeIcon icon={faUser} />
                </Nav.Link>
              </Nav>
            )}
            <BSNavbar.Toggle
              onClick={() => handleExpanded()}
              color="#fff"
              aria-controls="basic-navbar-nav"
            />
          </div>
          <BSNavbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Nav.Link href="#store">Store</Nav.Link>
              <Nav.Link href="#carnival">Carnival</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
              <Nav.Link href="#photos">Photos</Nav.Link>
              <Nav.Link href="#videos">Videos</Nav.Link>
              <Nav.Link href="#music">Music</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            {width > 992 && (
              <>
                <Nav className="justify-content-end">
                  <Nav.Link href="#filter" onClick={() => handleClick()}>
                    <FontAwesomeIcon icon={faFilter} />
                  </Nav.Link>
                  <Nav.Link href="#user">
                    <FontAwesomeIcon icon={faUser} />
                  </Nav.Link>
                </Nav>
              </>
            )}
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </>
  );
}
