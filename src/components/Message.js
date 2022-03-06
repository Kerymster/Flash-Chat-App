import React from "react";
import { Toast, Card } from "react-bootstrap";
import ReactEmoji from "react-emoji";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <Toast className="ms-auto mb-2" bg="success" style={{ width: "300px" }}>
      <Card.Header style={{ backgroundColor: "#E6F5EA" }}>
        <strong className="me-auto">{trimmedName}</strong>
      </Card.Header>
      <Toast.Body>
        <p className="text-white">{ReactEmoji.emojify(text)}</p>
      </Toast.Body>
    </Toast>
  ) : (
    <Toast
      className="d-inline-block mb-2"
      bg="warning"
      style={{ width: "300px" }}
    >
      <Toast.Body className={"dark" && "text-white"}>
        <p>{ReactEmoji.emojify(text)}</p>
      </Toast.Body>
      <Card.Header style={{ backgroundColor: "#FCF3E5" }}>
        <strong className="me-auto">{user}</strong>
      </Card.Header>
    </Toast>
  );
};

export default Message;
