import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <Title>해당 페이지를 찾지 못했습니다.</Title>
      <Txt>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</Txt>
      <Move onClick={moveToHome}>메인 페이지로 이동</Move>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Txt = styled.div`
  font-size: 18px;
`;
const Move = styled.div`
  color: red;
  cursor: pointer;
`;
