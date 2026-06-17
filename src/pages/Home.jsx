import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = ({ searchText, favoriteMoviesList, setFavoriteMoviesList }) => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const getTrendingMoives = async () => {
      setLoad(true);
      const result = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=165bfd050a291be69f9ccec37b38792d",
      );
      setTrendingMoviesList(result.data.results);
      setLoad(false);
    };
    getTrendingMoives();
  }, []);

  const filteredMovies = trendingMoviesList.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="bg-dark" style={{ minHeight: "100vh", position: "relative" }}>
      {load ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h5 className="display-5 py-4 px-5 text-white">Trending:</h5>
          <div className="movies d-flex flex-wrap gap-3 pb-2 justify-content-center ">
            {searchText.trim().length == 0
              ? trendingMoviesList.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    favoriteMoviesList={favoriteMoviesList}
                    setFavoriteMoviesList={setFavoriteMoviesList}
                  />
                ))
              : filteredMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    favoriteMoviesList={favoriteMoviesList}
                    setFavoriteMoviesList={setFavoriteMoviesList}
                  />
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;