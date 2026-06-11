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
  return(

    <BrowserRouter>
    <Header searchText={searchText} setSearchText={setSearchText} />
    <Routes>
      <Route path="/" element={<Home searchText={searchText} />} />
      <Route path="/all-movies" element={<AllMovies searchText={searchText} />} />
      <Route path="/favorites" element={<Favorites searchText={searchText} />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App;
