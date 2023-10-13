import { Container, Col, Row } from "react-bootstrap";
import { PasswordForm } from "../PasswordForm";
import { useEffect, useState } from "react";
import { passwordBruteforcetime } from "../function";
import { calculateTime } from "../calculate";
import { PasswordStrengthIndicator } from "../PasswordStrengthIndicator";
import { StaticExample } from "../popup";

export function Home() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  // function getPassword(){
  //   setPassword()
  // }
  const setPasswordFromChild = (pass) => {
    setPassword(pass);
  };
  const setShowFromChild = (bool) => {
    setShow(bool);
  };

  const result = passwordBruteforcetime(password);

  const time = calculateTime(result);

  useEffect(() => {
    const pattern = /[^a-zA-Z0-9!@#$%^&*()_+-=<>?]+/;
    if (pattern.test(password)) {
      setShow(true);
    } else {
      setShow(false);
    }
    console.log(show);
  }, [password,show]);

  // console.log(password);
  return (
    <>
      <Container className="homeCon px-4" fluid>
        <Row className="d-flex  d-flex align-items-end justify-content-center h-50   mx-auto">
          <Col md={8}>
            <PasswordForm setPasswordFromChild={setPasswordFromChild} />
            <PasswordStrengthIndicator password={password} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center timeResult mt-4">
              <h6 className="text-secondary">This password take</h6>
              <h1 className="text-primary">{time}</h1>
              <h6 className="text-secondary">to bruteforce.</h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center timeResult mt-4">
              <h5 className="link-container">
                สนใจใน code ของเรางั้นเหรอ? สามารถเข้าชม github
                ของผลงานนี้ได้โดย{" "}
                <a
                  href="https://github.com/autyauth/password_checker"
                  className="link"
                >
                  👉🏻คลิกที่นี่
                </a>{" "}
              </h5>
            </div>
          </Col>
        </Row>
        <StaticExample
          setShowFromChild={setShowFromChild}
          show={show}
          setPasswordFromChild = {setPasswordFromChild}
        />
      </Container>
    </>
  );
}
