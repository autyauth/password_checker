import { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

export function PasswordForm({ setPasswordFromChild }) {
  //setPassword ทุกครั้งๆที่คำข้างในเปลี่ยนละส่งกลับไปให้ Parent
  return (
    <Form>
      <Form.Group className="mb-3">
        <h2>
          <p className="text-center"> How long Hacker cracked your password?</p>
        </h2>
        <Form.Control
          type="text"
          placeholder="Enter the password"
          onChange={(e) => setPasswordFromChild(e.target.value)}
        />
      </Form.Group>

      <Row className=" gap-4 justify-content-center h-75 w-100">
        <Form.Select className="col selForm col-md-6  d-flex align-items-center">
          <option>password cracking speed</option>
          <option value="1">1 million password/second</option>
          <option value="2">10 million password/second</option>
          <option value="3">100 million password/second</option>
          <option value="2">1 billion password/second</option>
          <option value="3">1 billion password/second</option>
        </Form.Select>
        <Button className="col calBtn col-md-6 text-white"><h6>Calculate</h6></Button>
      </Row>
    </Form>
  );
}
