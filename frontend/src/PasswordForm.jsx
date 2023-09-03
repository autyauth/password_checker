import { useState } from "react";
import { Form } from "react-bootstrap";

export function PasswordForm({setPasswordFromChild}) {
  //setPassword ทุกครั้งๆที่คำข้างในเปลี่ยนละส่งกลับไปให้ Parent
  return (
    <Form>
      <Form.Group className="mb-3">
        <h2>
          <p className="text-center"> How long Hacker cracked your password?</p>
        </h2>
        <Form.Control type="text" placeholder="Enter the password" onChange={ e=>setPasswordFromChild(e.target.value)}/>
      </Form.Group>
    </Form>
  );
}
