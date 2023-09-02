import { Container, Nav, Navbar } from "react-bootstrap";
import "./WebNavbar.css";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
export function WebNavBar() {
  return (
    <Navbar expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#home">Rsseact-Bootstrap</Navbar.Brand>
        <Nav className="me-auto">
           <Nav.Link as = {Link} to="/">Home</Nav.Link>
          <Nav.Link as = {Link} to="/passwordchecker">Password Checker</Nav.Link>
          <Nav.Link as = {Link} to="/member">Members</Nav.Link> 
        </Nav>
        <LinkContainer to ="">
          <a>Hi</a>
        </LinkContainer>
      </Container>
    </Navbar>
  );
}
