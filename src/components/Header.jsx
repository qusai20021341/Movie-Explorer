import { useState } from "react"
import { Link } from "react-router-dom"

const Header = ({searchText,setSearchText}) => {
    const [currentPage, setCurrentPage]= useState('Home')

    const handleChangeCurrentPage=(currentPage)=>{
        setCurrentPage(currentPage);
    }
  return (
    <div>
        <div className="header  bg-black text-white ">
                <div className="navbar-brand text-white">
                  <h2>Movie Explorer</h2>
                </div>

                 <div className="search-box p-4">
                     <input value={searchText} onChange={(event)=>setSearchText(event.target.value)} className="search-input" type="text" placeholder="Search..."  />    
                 </div>

                <div className="links">
                    <Link className="nav-link" to="/" style={{background:currentPage=="Home"?"white":"black",color:currentPage=="Home"?"black":"white"}} onClick={()=>handleChangeCurrentPage('Home')} >Home</Link>
                    <Link className="nav-link" to="/all-movies" style={{background:currentPage=="AllMovies"?"white":"black",color:currentPage=="AllMovies"?"black":"white"}} onClick={()=>handleChangeCurrentPage('AllMovies')}>All Movies</Link>
                    <Link className="nav-link" to="/favorites" style={{background:currentPage=="Favorites"?"white":"black",color:currentPage=="Favorites"?"black":"white"}} onClick={()=>handleChangeCurrentPage('Favorites')}>Favorites</Link>
                </div> 
        </div>

       
           
      
    </div>
  )
}

export default Header
