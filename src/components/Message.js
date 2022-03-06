import React from "react";
import { Toast } from "react-bootstrap";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <Toast className="ms-auto" bg="success">
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{trimmedName}</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>
        <p>{text}</p>
      </Toast.Body>
    </Toast>
  ) : (
    <Toast className="d-inline-block m-1" bg="warning">
      <Toast.Body className={"dark" && "text-white"}>
        <p>{text}</p>
      </Toast.Body>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{user}</strong>
        <small>11 mins ago</small>
      </Toast.Header>
    </Toast>
  );
};

export default Message;
