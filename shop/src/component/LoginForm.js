import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>아이디</Form.Label>
        <Form.Control type="email" placeholder="아이디를 입력하세요" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
        <Form.Text className="text-muted">
          규칙 : 소문자,숫자,특수기호로 구성된 8자리
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
    </Form>
  );
}

export default LoginForm;
