import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";

import ChatHeader from "./ChatHeader";
import Input from "./Input";
import Messages from "./Messages";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");
  const ENDPOINT = "localhost:5000";

  const [data] = useSearchParams();

  useEffect(() => {
    const { name, room } = Object.fromEntries([...data]);
    socket = io(ENDPOINT, {
      cors: {
        origin: "http://localhost:5000",
        credentials: true,
      },
      transports: ["websocket"],
    });
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    // return () => {
    //   socket.emit("disconnect");
    //   socket.off();
    // };
  }, [ENDPOINT, data]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="container d-flex aling-items-center justify-content-center">
      <Card className="mt-5" style={{ width: "500px" }}>
        <ChatHeader room={room} name={name} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Card>
    </div>
  );
};

export default Chat;
