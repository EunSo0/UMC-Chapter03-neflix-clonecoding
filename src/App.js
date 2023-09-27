import Movie from "./components/Movie";
import { movies } from "./movieDummy";
import "./index.css";

function App() {
  return (
    <div className="wrapper">
      {movies.results.map((movie, index) => {
        return (
          <Movie
            key={index}
            title={movie.title}
            vote_average={movie.vote_average}
            poster_path={movie.poster_path}
          />
        );
      })}
      ;
    </div>
  );
}

export default App;
