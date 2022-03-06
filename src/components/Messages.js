import React from "react";
import { Card, Toast } from "react-bootstrap";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";
const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom>
      <Card.Body style={{ height: "500px" }}>
        {messages.map((message, i) => (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        ))}
      </Card.Body>
    </ScrollToBottom>
  );
};

export default Messages;
