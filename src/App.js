import React from "react";
import Movie from "./components/Movie";
import MovieDetail from "./components/MovieDetail";
import { movies } from "./movieDummy";
import "./styles/index.css";

function App() {
  return (
    <div className="base">
      {movies.results.map((movie, index) => {
        return (
          <div className="movie__wrapper" key={index}>
            <Movie
              key={index}
              title={movie.title}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
            <MovieDetail
              key={index}
              title={movie.title}
              overview={movie.overview}
            />
          </div>
        );
      })}
      ;
    </div>
  );
}

export default App;
