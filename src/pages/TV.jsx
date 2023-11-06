import React from "react";
import Program from "../components/Program";
import { tv } from "../tvDummy";
import "../styles/index.css";

export default function TV() {
  return (
    <div className="base">
      {tv.results.map((tv, index) => {
        return (
          <div className="movie__wrapper" key={index}>
            <Program
              title={tv.name}
              vote_average={tv.vote_average}
              poster_path={tv.poster_path}
              overview={tv.overview}
            />
          </div>
        );
      })}
      ;
    </div>
  );
}
