
import Nav from "react-bootstrap/Nav";
import {default as BSNavbar} from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";

export default function Navbar() {
    return (
      <>
        <BSNavbar
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
            <BSNavbar.Brand href="#home">
              <Image
                src="http://www.trinijunglejuice.com/home/menu/images/logo.png"
                width={200}
                height={55.8}
              />
            </BSNavbar.Brand>
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
        </BSNavbar>
      </>
    );
  }