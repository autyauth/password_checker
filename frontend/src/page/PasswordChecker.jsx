import { Button, Container, Dropdown } from "react-bootstrap";
import { PasswordForm } from "../PasswordForm";
import { TimeResult } from "../TimeResult";
import { useState } from "react";

export function PasswordChecker() {
  const [password, setPassword] = useState("");

  // function getPassword(){
  //   setPassword()
  // }
  const setPasswordFromChild = (pass) => {
    setPassword(pass);
  };
  console.log(password);
  return (
    <Container className="homeCon">
      <div className="d-flex flex-column  justify-content-center align-items-center  h-100">
        <div className="col-md-8 ">
          <PasswordForm setPasswordFromChild={setPasswordFromChild} />
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div classNameName="col-8-md">
          <TimeResult />
        </div>
      </div>
    </Container>
  );
}
