import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<SignIn />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
);

export default App;
