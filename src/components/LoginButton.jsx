import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LoginButton() {
  return (
    <>
      <Link to="/login">
        <Button>로그인</Button>
      </Link>
    </>
  );
}

const Button = styled.button`
  background-color: #fff;
  color: #143c70;
  margin: 0 10px;
  padding: 3px 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
