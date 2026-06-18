import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieCard from "./components/MovieCard";
import { BrowserRouter,Routes,Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import  MovieDetails from "./pages/MovieDetails"




function App() {
  
  const [searchText, setSearchText]=useState("");
  const [favoriteMoviesList, setFavoriteMoviesList]=useState(() => {
  return JSON.parse(localStorage.getItem("favoritesMovies")) || [];
});
 const [pagination, setPagination]=useState( 1)
  const [pageNumber, setPageNumber]=useState( 1)
  useEffect(()=>{
        localStorage.setItem("favoritesMovies",JSON.stringify(favoriteMoviesList))
        console.log(favoriteMoviesList)
    },[favoriteMoviesList])

  
  return(

    <BrowserRouter>
    <Header searchText={searchText} setSearchText={setSearchText} />
    <Routes>
      <Route path="/" element={<Home favoriteMoviesList={favoriteMoviesList} setFavoriteMoviesList={setFavoriteMoviesList} searchText={searchText} />} />
      <Route path="/all-movies" element={<AllMovies pagination={pagination} setPagination={setPagination} setPageNumber={setPageNumber} pageNumber={pageNumber} favoriteMoviesList={favoriteMoviesList} setFavoriteMoviesList={setFavoriteMoviesList} searchText={searchText} />} />
      <Route path="/favorites" element={<Favorites searchText={searchText} favoriteMoviesList={favoriteMoviesList} setFavoriteMoviesList={setFavoriteMoviesList} />} />
      <Route path="/movie/:id" element={<MovieDetails />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App;
