import React from "react";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";

const Input = ({ message, sendMessage, setMessage }) => {
  return (
    <Card.Footer>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Type here..."
          aria-label="Type here..."
          aria-describedby="basic-addon2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
        <Button
          variant="dark"
          id="button-addon2"
          onClick={(e) => sendMessage(e)}
        >
          Send
        </Button>
      </InputGroup>
    </Card.Footer>
  );
};

export default Input;
