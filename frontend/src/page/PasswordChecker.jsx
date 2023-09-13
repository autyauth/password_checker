import { Container, Col, Row } from "react-bootstrap";
import { PasswordForm } from "../PasswordForm";
import { TimeResult } from "../TimeResult";
import { useState } from "react";
import { ConditionTable } from "../ConditionTable";

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
    <>
      {" "}
      {/* <Container className="homeCon">
        <div className="d-flex flex-column  justify-content-center align-items-center  h-100">
          <div className="col-md-8 ">
            <PasswordForm setPasswordFromChild={setPasswordFromChild} />
          </div>
          <div className="col-8-md">
            <TimeResult />
          </div>
        </div>
      </Container>
      <Container>
        {" "}
        <ConditionTable />
      </Container> */}
      <Container className="homeCon px-4" fluid>
        <row className="d-flex  d-flex align-items-end justify-content-center  h-25 w-50 mx-auto"> 
          <Col md={8}>
            <PasswordForm setPasswordFromChild={setPasswordFromChild} />
          </Col>
        </row>
        <row>
          <Col >
            <TimeResult />
          </Col>
        </row>
        <ConditionTable/>
      </Container>
    </>
  );
}
