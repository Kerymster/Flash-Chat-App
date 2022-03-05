import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";

  const [data] = useSearchParams();

  useEffect(() => {
    const { name, room } = Object.fromEntries([...data]);
    const socket = io(ENDPOINT, { transports: ["websocket"] });

    setName(name);
    setRoom(room);
    console.log(socket);

    socket.emit("participant", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, data]);
  return <div>Hello Gandalf hey</div>;
};

export default Chat;
