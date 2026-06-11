import { MdFavoriteBorder } from "react-icons/md";

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="movie-card text-white ">
         <img src={movie.poster_path?`https://image.tmdb.org/t/p/w500${movie.poster_path}`:'https://image.tmdb.org/t/p/w500'} 
      className="card-img-top" alt={movie.title}
       />
       <div className="over-layer "
            style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            background: "linear-gradient(to top, rgba(0,0,0,0.99999), transparent)"
            }}
            
        >
            <div>
                <MdFavoriteBorder  />
            </div>

            <div className="movie-details  ">
                <h5  >{movie.title}</h5>
                <div className="movie-info">
                    <div className="d-flex justify-content-around">
                       
                        <div>
                            <p className="small">Lang</p>
                            <p style={{textTransform:'capitalize',fontWeight:'bold'}} >{movie.original_language}</p>
                        </div>
                        <div>
                            <p className="small">Rating</p>
                            <p style={{fontWeight:'bold'}} >{movie.vote_average}</p>

                        </div>
                        <div>
                            <p className="small">Review</p>
                            <p style={{fontWeight:'bold'}} >{Number(movie.vote_count)/1000}K</p>

                        </div>
                    </div>
                    

                </div>


                

            </div>
           
        </div>

    </div>
  );
};

export default MovieCard;
