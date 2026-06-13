import { useEffect, useState } from "react"
import axios from "axios"
import MovieCard from "../components/MovieCard"
import { GrFormNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";



const AllMovies = ({searchText,favoriteMoviesList,setFavoriteMoviesList}) => {

  const [selection, setSelection]=useState("popular")
  const [moviesList, setMoviesList]=useState([])
  const [pagination, setPagination]=useState(1)
  const [pageNumber, setPageNumber]=useState(1)
  const [load, setLoad]=useState(false)


  useEffect(()=>{

    const getMovies=async ()=>{
      if(selection=="popular")
      {
        setLoad(true)
        const result= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=165bfd050a291be69f9ccec37b38792d&page=${pagination}`)
        setMoviesList(result.data.results)
        setLoad(false)
      }else if(selection=="topRated")
      {
        setLoad(true)
        const result= await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=165bfd050a291be69f9ccec37b38792d&page=${pagination}`)
        setMoviesList(result.data.results)
        setLoad(false)
      }else if(selection=="upComing")
      {
        setLoad(true)
        const result= await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=165bfd050a291be69f9ccec37b38792d&page=${pagination}`)
        setMoviesList(result.data.results)
        setLoad(false)
      }
    }

    getMovies()

  },[selection,pagination])
  
  const filteredMoiveList=moviesList.filter((movie)=> movie.title.toLowerCase().includes(searchText.trim().toLowerCase()) )
  return (load?<p>Loading...</p>:
    <div className="px-5 bg-dark" style={{ minHeight: "100vh",position:"relative" }}>
      
      <div className="buttons d-flex justify-content-center gap-2 py-4">
        <button className={`btn ${selection ==="popular"?"btn-secondary":"btn-outline-secondary"}`} onClick={()=>setSelection("popular")}>Popular</button>
        <button className={`btn ${selection ==="topRated"?"btn-secondary":"btn-outline-secondary"}`} onClick={()=>setSelection("topRated")}>Top Rated</button>
        <button className={`btn ${selection ==="upComing"?"btn-secondary":"btn-outline-secondary"}`}onClick={()=>setSelection("upComing")}>Upcoming</button>
      </div>
      
      <h5 style={{textTransform:"capitalize"}} className="display-5 py-4 text-white">{selection}:</h5>
      <div className="movies d-flex flex-wrap gap-3 pb-2 ">
        {
          searchText.length ==0? moviesList.map((movie)=><MovieCard key={movie.id} movie={movie} favoriteMoviesList={favoriteMoviesList} setFavoriteMoviesList={setFavoriteMoviesList} />):
          filteredMoiveList.map((movie)=><MovieCard key={movie.id} movie={movie} favoriteMoviesList={favoriteMoviesList} setFavoriteMoviesList={setFavoriteMoviesList} />)
        }
      </div>
      {moviesList.length> 0 && filteredMoiveList.length>0 &&(<div className="pagination-wrapper p-4 d-flex justify-content-center ">
        <nav aria-label="Page navigation ">
          <ul className="pagination">
            <li className="page-item"><button className="page-link prev"  onClick={()=>pageNumber>1? setPageNumber(pageNumber>3?prev=>prev-3:null):setPageNumber(1)} ><GrPrevious /></button></li>
            <li className="page-item"><button className="page-link" onClick={()=>setPagination(pageNumber)} >{pageNumber}</button></li>
            <li className="page-item"><button className="page-link" onClick={()=>setPagination(pageNumber +1)} >{pageNumber + 1}</button></li>
            <li className="page-item"><button className="page-link" onClick={()=>setPagination(pageNumber+2)} >{pageNumber + 2}</button></li>
            <li className="page-item"><button className="page-link next"  onClick={()=>setPageNumber(prev=>prev+3)}  ><GrFormNext /></button></li>
          </ul>
        </nav>
      </div>)
      }
     
    </div>
  )
}

export default AllMovies
