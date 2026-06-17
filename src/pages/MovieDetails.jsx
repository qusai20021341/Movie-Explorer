import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { CiTimer } from "react-icons/ci";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const getMovieData = async (movieId) => {
      try {
        setLoad(true);
        const result = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=165bfd050a291be69f9ccec37b38792d`,
        );
        setMovie(result.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoad(false);
      }
    };
    getMovieData(id);
  }, []);

  return (
    <div className="bg-dark">
      {load ? (
        <h3 className="text-white">Loading...</h3>
      ) : (
        <div className="movie-container ">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
            alt={movie.title}
          />

          <div className="image-overlay">
            <div className="movie-detials container text-white w-50 d-flex flex-column justify-content-around" style={{height:"100%"}}>
              <div className="up ">
                <h1 className="text-center display-3 fw-bold py-3">
                  {movie.title}
                </h1>
                <p className="text-center text-light mb-4">{movie.overview}</p>
              </div>
              <div className="bottom pb-5 ">
                <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
                  <div className="info-box">
                    <span className="info-label">Rating</span>
                    <span className="info-value">
                      {movie.vote_average?.toFixed(1)} / 10
                    </span>
                  </div>
                  <div className="info-box">
                    <span className="info-label">Votes</span>
                    <span className="info-value">
                      {movie.vote_count?.toLocaleString()}
                    </span>
                  </div>
                  <div className="info-box">
                    <span className="info-label">Language</span>
                    <span className="info-value">
                      {movie.original_language?.toUpperCase()}
                    </span>
                  </div>
                  <div className="info-box">
                    <span className="info-label">Release</span>
                    <span className="info-value">{movie.release_date}</span>
                  </div>
                  <div className="info-box">
                    <span className="info-label">Runtime</span>
                    <span className="info-value">
                      {movie.runtime
                        ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
                        : "N/A"}
                    </span>
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
                  {movie.genres?.map((g) => (
                    <span key={g.id} className="genre-badge">
                      {g.name}
                    </span>
                  ))}
                </div>

                <div className="d-flex justify-content-center gap-4 flex-wrap">
                  <p>
                    <span className="info-label">Revenue</span>{" "}
                    {movie.revenue
                      ? `$${movie.revenue.toLocaleString()}`
                      : "N/A"}
                  </p>
                  <p>
                    <span className="info-label">Status</span> {movie.status}
                  </p>
                  <p>
                    <span className="info-label">Language</span>{" "}
                    {movie.original_language?.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
