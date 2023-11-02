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

export const MovieDetail = styled.div`
  position: absolute;
  top: 0;
  width: 300px;
  height: 510px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 30px 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export const MovieDetailTitle = styled.div`
  font-size: 18px;
  margin-bottom: 25px;
`;

export const MovieDetailOverview = styled.div`
  font-size: 16px;
`;
