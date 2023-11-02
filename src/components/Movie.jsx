import React from "react";
import * as M from "../styles/Movie.style";
import { useNavigate } from "react-router-dom";

function Movie(props) {
  const navigate = useNavigate();
  const moveToDetail = () => {
    navigate(`/movie/${props.title}`, {
      state: props,
    });
  };

  return (
    <>
      <M.MovieContainer>
        <M.Img
          src={`https://image.tmdb.org/t/p/w300${props.poster_path}`}
          alt={props.title}
          onClick={moveToDetail}
        />
        <M.MovieInfo>
          <M.MovieTitle>{props.title}</M.MovieTitle>
          <div>{props.vote_average}</div>
        </M.MovieInfo>
      </M.MovieContainer>
      {/* <M.MovieDetail>
        <M.MovieDetailTitle>{props.title}</M.MovieDetailTitle>
        <M.MovieDetailOverview>{props.overview}</M.MovieDetailOverview>
      </M.MovieDetail> */}
    </>
  );
}

export default Movie;
