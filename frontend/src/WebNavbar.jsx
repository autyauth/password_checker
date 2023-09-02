import { Container, Nav, Navbar } from "react-bootstrap";
import "./WebNavbar.css";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
export function WebNavBar() {
  return (
    <Navbar expand="lg" className="justify-content-between" bg="secondary" variant="light">
      <Container>
        <Navbar.Brand href="#home">Rsseact-Bootstrap</Navbar.Brand>
        <Nav className="me-auto" color="red">
           <Nav.Link className="60" as = {Link} to="/">Home</Nav.Link>
          <Nav.Link as = {Link} to="/passwordchecker">Password Checker</Nav.Link>
          <Nav.Link as = {Link} to="/member">Members</Nav.Link> 
        </Nav>
      </Container>
    </Navbar>
  );
}
