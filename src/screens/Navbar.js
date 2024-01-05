
import Nav from "react-bootstrap/Nav";
import {default as BSNavbar} from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faFilter,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";


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
            <Nav className="me-auto" style={{display:"flex",alignItems:"center"}}>
              <Nav.Link href="#store">Store</Nav.Link>
              <span style={{border:"1px solid red", height:"20px",marginRight:"5px"}}/>
              <Nav.Link href="#carnival">Carnival</Nav.Link>
              <span style={{border:"1px solid red", height:"20px",marginRight:"5px"}}/>
              <Nav.Link href="#events">Events</Nav.Link>
              <span style={{border:"1px solid red", height:"20px",marginRight:"5px"}}/>
              <Nav.Link href="#photos">Photos</Nav.Link>
              <span style={{border:"1px solid red", height:"20px",marginRight:"5px"}}/>
              <Nav.Link href="#videos">Videos</Nav.Link>
              <span style={{border:"1px solid red", height:"20px",marginRight:"5px"}}/>
              <Nav.Link href="#music">Music</Nav.Link>
              <span style={{border:"1px solid red", height:"20px",marginRight:"5px"}}/>
              <Nav.Link href="#news">News</Nav.Link>
              <span style={{border:"1px solid red", height:"20px",marginRight:"5px"}}/>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <FontAwesomeIcon icon={faFilter} />
            <FontAwesomeIcon icon={faUser} />
          </Container>
        </BSNavbar>
      </>
    );
  }