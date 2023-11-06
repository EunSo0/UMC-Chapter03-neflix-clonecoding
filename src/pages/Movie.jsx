import React from "react";
import Program from "../components/Program";
import { movies } from "../movieDummy";
import "../styles/index.css";

export default function Movie() {
  return (
    <div className="base">
      {movies.results.map((movie, index) => {
        return (
          <div className="movie__wrapper" key={index}>
            <Program
              title={movie.title}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
          </div>
        );
      })}
      ;
    </div>
  );
}
