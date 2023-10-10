import React from "react";
import * as M from "../styles/Movie.style";

function Movie(props) {
  return (
    <>
      <M.MovieContainer>
        <M.Img
          src={`https://image.tmdb.org/t/p/w300${props.poster_path}`} // 이미지 경로를 설정
          alt={props.title} // 이미지의 대체 텍스트
        />
        <M.MovieInfo>
          <M.MovieTitle>{props.title}</M.MovieTitle>
          <div>{props.vote_average}</div>
        </M.MovieInfo>
      </M.MovieContainer>
    </>
  );
}

export default Movie;
