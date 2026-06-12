import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieCard from "./components/MovieCard";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";




function App() {
  
  const [searchText, setSearchText]=useState("");
  const [favoriteMoviesList, setFavoriteMoviesList]=useState(() => {
  return JSON.parse(localStorage.getItem("favoritesMovies")) || [];
});
  useEffect(()=>{
        localStorage.setItem("favoritesMovies",JSON.stringify(favoriteMoviesList))
        console.log(favoriteMoviesList)
    },[favoriteMoviesList])

  return(

    <BrowserRouter>
    <Header searchText={searchText} setSearchText={setSearchText} />
    <Routes>
      <Route path="/" element={<Home favoriteMoviesList={favoriteMoviesList} setFavoriteMoviesList={setFavoriteMoviesList} searchText={searchText} />} />
      <Route path="/all-movies" element={<AllMovies favoriteMoviesList={favoriteMoviesList} setFavoriteMoviesList={setFavoriteMoviesList} searchText={searchText} />} />
      <Route path="/favorites" element={<Favorites searchText={searchText} favoriteMoviesList={favoriteMoviesList} setFavoriteMoviesList={setFavoriteMoviesList} />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App;
