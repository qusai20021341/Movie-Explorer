import { Link } from "react-router-dom"
const Header = ({searchText,setSearchText}) => {
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
                    <Link className="nav-link" to="/" >Home</Link>
                    <Link className="nav-link" to="/all-movies">All Movies</Link>
                    <Link className="nav-link" to="/favorites">Favorites</Link>
                </div> 
        </div>

       
           
      
    </div>
  )
}

export default Header
