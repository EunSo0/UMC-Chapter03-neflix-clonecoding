import "../index.css";

function Movie(props) {
  return (
    <>
      <div className="movie__container">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} // 이미지 경로를 설정
          alt={props.title} // 이미지의 대체 텍스트
        />
        <div className="movie__info">
          <div className="movie__title">{props.title}</div>
          <div className="movie__average">{props.vote_average}</div>
        </div>
      </div>
    </>
  );
}

export default Movie;
