import { Form, Button, Row } from "react-bootstrap";

export function PasswordForm({ setPasswordFromChild }) {
  //setPassword ทุกครั้งๆที่คำข้างในเปลี่ยนละส่งกลับไปให้ Parent
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setPasswordFromChild(event.target.value);
      event.preventDefault()

    }
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <h2>
          <p className="text-center fw-bold"> How long Hacker cracked your password?</p>
        </h2>
        <Form.Control
          type="text"
          placeholder="Enter the password"
          onKeyDown={handleKeyDown}
          className="shadow-sm p-3 mb-5 bg-white rounded"
        />
      </Form.Group>
    </Form>
  );
}
