import { Container, Col, Row } from "react-bootstrap";
import { PasswordForm } from "../PasswordForm";
//import { TimeResult } from "../TimeResult";
import { useState } from "react";
import { ConditionTable } from "../ConditionTable";
import { passwordBruteforcetime } from '../function';
import { calculateTime } from '../calculate';

export function PasswordChecker() {
  const [password, setPassword] = useState("");
  //const [selectedValue, setSelectedValue] = useState("");

  // function getPassword(){
  //   setPassword()
  // }
  const setPasswordFromChild = (pass) => {
    /*
    if (pass >= 1 && pass <= 6) {
      setSelectedValue(pass);
    }
    else {
      setPassword(pass);
    }
    */
    //console.log(pass);
    setPassword(pass);
  };


  const result = passwordBruteforcetime(password, password.length);
  console.log(Number(result));

  //const time = (Number(result) / Number(speed)) / Number(60*60*24*365);

  const time = calculateTime(result);
  //console.log(time);

  console.log(password);
  return (
    <>
      <Container className="homeCon px-4" fluid>
        <Row className="d-flex  d-flex align-items-end justify-content-center  h-25 w-50 mx-auto">
          <Col md={8}>
            <PasswordForm setPasswordFromChild={setPasswordFromChild} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center timeResult">
              <p className="text-primary">this password take</p>
              <h3 className="text-success ">{time}</h3>
              <p className="text-primary">to bruteforce.</p>
            </div>
          </Col>
        </Row>
        <ConditionTable />
        <Row className="m-4 w-50 mx-auto">
          <Col>
<<<<<<< Updated upstream
          <h2 className="text-primary">{password}</h2>
            <h2 className="text-primary">How we Calcuate</h2>
=======
            <h2 className="text-primary">How we Calculate</h2>
>>>>>>> Stashed changes
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
