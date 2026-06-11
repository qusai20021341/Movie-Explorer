import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
const Home = ({ searchText }) => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [load, setLoad]=useState(false)

  useEffect(() => {
    const getTrendingMoives = async () => {
    setLoad(true)
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
    <div className="px-5 bg-dark" style={{ minHeight: "100vh" }}>
      <h5 className="display-5 py-4 text-white"> Trending:</h5>
      {
        load?<h3 className="text-white">Loading...</h3>:
        <div className=" d-flex flex-wrap gap-3 p-1 ">
            {searchText.trim().length == 0
            ? trendingMoviesList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
                ))
            : filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
                ))}
        </div>
       }   
    </div>
  );
};

export default Home;
