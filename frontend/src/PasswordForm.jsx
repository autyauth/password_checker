import { Form } from "react-bootstrap";

export function PasswordForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>
          <h2>How long Hacker cracked My password?</h2>
        </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    </Form>
  );
}
