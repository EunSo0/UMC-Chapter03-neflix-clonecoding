import { useLocation, useParams } from "react-router-dom";
import * as MD from "../styles/MovieDetail.style.js";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <MD.Wrapper>
      <MD.Image
        src={`https://image.tmdb.org/t/p/w300${state.poster_path}`}
        alt={state.title}
      />
      <MD.Title>{title}</MD.Title>
    </MD.Wrapper>
  );
}
