import styled from "styled-components";

export const MovieContainer = styled.div`
  height: 530px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

export const Img = styled.img`
  width: 300px;
  height: 450px;
`;

export const MovieInfo = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: rgb(70, 70, 110);
  color: #fff;
  font-size: 16px;
`;

export const MovieTitle = styled.div`
  font-weight: bold;
`;
