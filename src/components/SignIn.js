import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate, createSearchParams } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();
  const params = { name: name, room: room };

  const handleSubmit = () => {
    navigate({
      pathname: "/chat",
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <Card style={{ width: "28rem", height: "auto" }} className="mx-auto mt-5">
        <Card.Header className="bg-dark text-white text-center ">
          Get Started to FLASH
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nick Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nickname"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted">
                Please choose a nickname to start chatting.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Room Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Room"
                onChange={(e) => setRoom(e.target.value)}
              />
              <Form.Text className="text-muted">
                Please create a room.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!name || !room}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignIn;
