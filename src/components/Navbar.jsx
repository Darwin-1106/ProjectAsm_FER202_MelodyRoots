import "../styles/Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiMusicalScore } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

function NavbarHeader() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <GiMusicalScore />
          <strong>MelodyRoots</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">Trang chủ</Nav.Link>
            <Nav.Link as={NavLink} to="/instruments">Nhạc cụ</Nav.Link>
            <Nav.Link as={NavLink} to="/courses">Khóa học</Nav.Link>
            <Nav.Link as={NavLink} to="/events">Biểu diễn</Nav.Link>
            <Nav.Link as={NavLink} to="/community">Cộng đồng</Nav.Link>
          </Nav>

          <div className="btn-navbar">
            <Button variant="outline-success">Đăng nhập</Button>
            <Button variant="outline-success">Đăng kí</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
