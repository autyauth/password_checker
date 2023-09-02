import { Container, Nav, Navbar } from "react-bootstrap";
import "./WebNavbar.css";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export function WebNavBar() {
  return (
    <Navbar expand="lg" className="justify-content-between" bg="secondary">
      <Container className="mx-5">
        <Navbar.Brand as = {Link} to="/" className="text-primary"> <h1>Computation</h1></Navbar.Brand>
        <Nav className="me-auto" >
           <Nav.Link  as = {Link} to="/" className="text-primary px-4">Home</Nav.Link>
          <Nav.Link as = {Link} to="/passwordchecker" className="text-primary px-4">Password Checker</Nav.Link>
          <Nav.Link as = {Link} to="/member" className="text-primary px-4">Members</Nav.Link> 
        </Nav>
      </Container>
    </Navbar>
  );
}
