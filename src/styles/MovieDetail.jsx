import styled from "styled-components";

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
