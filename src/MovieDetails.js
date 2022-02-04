import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movietrailer = movieList[id];
  return (

    <div className="trailer-container">
      <iframe
        width="914"
        height="514"
        src={movietrailer.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-card">

          <h1 className="movie-name">{movietrailer.movie}</h1>
          <h2 className="movie-rating">⭐{movietrailer.rating}</h2>
        </div>
        <h3 className="movie-summary">{movietrailer.summary}</h3>

      </div>
    </div>

  );
}
