import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from "react"; // Import React and useState

export function PasswordForm({ setPasswordFromChild }) {
  const [password, setPassword] = useState(""); // Create a state for the password

  const handleClear = () => {
    setPassword(""); 
    setPasswordFromChild(""); 
  };

  const handleChange = (e) =>
  {
    setPassword(e.target.value)
    setPasswordFromChild(e.target.value); 

  }
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Group className="mb-3">
        <h1>
          <p className="text-center fw-bold">
            {" "}
            How long Hacker cracked your password?
          </p>
        </h1>
        <Form.Control
          type="password"
          placeholder="Enter the password"
          value={password} // Use the password state as the input value
          onChange={handleChange} // Update the password state
          className="PaswordForm shadow-sm p-4 mt-5 ml-3 bg-white"
          style={{ fontSize: "2rem" }}
        />
        <div className="text-center pt-5"> {/* Center the button */}
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
}
