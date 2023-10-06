import "../styles/MovieDetail.css";

export default function MovieDetail(props) {
  return (
    <>
      <div className="movie__detail">
        <div className="movie__detail__title">{props.title}</div>
        <div className="movie__detail__overview">{props.overview}</div>
      </div>
    </>
  );
}
