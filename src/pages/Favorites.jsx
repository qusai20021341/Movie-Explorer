import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
const Favorites = ({
  searchText,
  favoriteMoviesList,
  setFavoriteMoviesList,
}) => {
  const [movies, setMoives] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchMoivesData = async () => {
      try {
        setLoad(true);
        const moviesData = await Promise.all(
          favoriteMoviesList.map(async (movieId) => {
            const result = await axios.get(
              `https://api.themoviedb.org/3/movie/${movieId}?api_key=165bfd050a291be69f9ccec37b38792d`,
            );
            return result.data;
          }),
        );
        setMoives(moviesData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoad(false);
      }
    };
    if (favoriteMoviesList.length > 0) {
      fetchMoivesData();
    } else {
      setMoives([]);
    }
  }, [favoriteMoviesList]);
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.trim().toLowerCase()),
  );

  return (
    <div className="bg-dark px-5" style={{ minHeight: "100vh" }}>
      <h5 className="display-5 py-4 text-white">Favorites:</h5>

      {favoriteMoviesList.length == 0 ? (
        <h3 className="text-white text-center display-6 pt-5">You'll find your favorite movies here!</h3>
      ) : load ? (
        <p className="text-white text-center">Loading...</p>
      ) : (
        <div className="movies d-flex flex-wrap gap-3 pb-2 justify-content-center">
          {(searchText.length === 0 ? movies : filteredMovies).map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favoriteMoviesList={favoriteMoviesList}
              setFavoriteMoviesList={setFavoriteMoviesList}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
