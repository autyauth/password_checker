import { Button, Container } from "react-bootstrap";
import { PasswordForm } from "../PasswordForm";

export function PasswordChecker() {
  return (
    <Container className="homeCon">
      <div className="d-flex flex-column  justify-content-center align-items-center  h-100">
        <div className="col-md-8 "><PasswordForm/></div>
        <div className="col-8-md"></div>
      </div>
    </Container>
  );
}
