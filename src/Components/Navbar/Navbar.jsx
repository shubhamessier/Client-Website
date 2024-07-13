import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";

function TopNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-white shadow-sm"
      fixed="top"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          <span className="text-primary">My</span>
          <span className="text-secondary">Website</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="px-3 nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="px-3 nav-item">
              About Us
            </Nav.Link>
            <NavDropdown
              title="Expertise"
              id="basic-nav-dropdown"
              className="px-3 nav-item"
            >
              <NavDropdown.Item href="#action/3.1">
                Gall Bladder Stone
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hernia Surgery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Anorectal Surgery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Appendicitis
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Breast Surgery
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blogs" className="px-3 nav-item">
              Blogs
            </Nav.Link>
            <Nav.Link href="#contact" className="px-3 nav-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
