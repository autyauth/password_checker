import { Button, Container } from "react-bootstrap";
import { PasswordForm } from "../PasswordForm";
import { TimeResult } from "../TimeResult";
import { useState } from "react";

export function PasswordChecker() {
  const [password,setPassword] = useState("")

  // function getPassword(){
  //   setPassword()
  // }
  const setPasswordFromChild = pass =>{
    setPassword(pass)
  }
  console.log(password)
  return (
    <Container className="homeCon">
      <div className="d-flex flex-column  justify-content-center align-items-center  h-100">
        <div className="col-md-8 "><PasswordForm setPasswordFromChild= {setPasswordFromChild}/></div>
        <div className="col-8-md"><TimeResult/></div>
      </div>
    </Container>
  );
}
