import React from "react";
import * as MD from "../styles/MovieDetail.style";

export default function MovieDetail(props) {
  return (
    <>
      <MD.MovieDetail>
        <MD.MovieDetailTitle>{props.title}</MD.MovieDetailTitle>
        <MD.MovieDetailOverview>{props.overview}</MD.MovieDetailOverview>
      </MD.MovieDetail>
    </>
  );
}
