import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";
const ChatHeader = ({ room, name }) => {
  return (
    <Card.Header
      // style={{ height: "100px" }}
      className="d-flex aling-items-center justify-content-space-between bg-dark text-white"
    >
      <Container>
        <Row>
          <Col sm={1}>
            <img className="left" src={onlineIcon} alt="online Icon" />
          </Col>
          <Col sm={10}>
            <Card.Title className="d-flex aling-items-center justify-content-center mt-4 ">
              <p>{room}</p>
            </Card.Title>
          </Col>
          <Col sm={1} className=" justify-content-right">
            <a href="/">
              <img className="left" src={closeIcon} alt="online Icon" />
            </a>
          </Col>
        </Row>
        <Row className="bg-white">
          <Col>
            <p className="text-dark mt-3 " size="xl">
              Welcome "{name}" !
            </p>
          </Col>
        </Row>
      </Container>
    </Card.Header>
  );
};

export default ChatHeader;
