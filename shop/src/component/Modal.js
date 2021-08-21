import React, { useState } from "react";
import { Modal, Button, Nav } from "react-bootstrap";
import LoginForm from "./LoginForm";

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>Login</Nav.Link>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm></LoginForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary">회원가입</Button>
          <Button variant="primary">로그인</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
