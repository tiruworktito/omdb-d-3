import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard/MovieCard";
import MovieDetails from "./Components/MovieDetail/MovieDetail";
import MovieList from "./Components/MovieList/MovieList";
import { getMovieDetailsById, getMoviesBySearchTerm } from "./utils/utils";

function App() {
  const [searchTerm, setSearchTerm] = useState("lion");
  const[searchType,setSearchType]=useState("");
  const[totalResults,setTotalResult]=useState("-");
  const[totalPages,setTotalPages]=useState("-");
  const[resultPage,setResultPage]=useState(1);
  const [isMovieData, setIsMovieData] = useState(false);
  const[movie,setMovie]=useState({});
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsMovieData(true);
    getMoviesBySearchTerm(
      searchTerm
      // {type:searchType, page:resultPage}
    )
      .then((res) => {
        console.log(res);
        setMovies(res.Search);
        setTotalResult(res.totalResults);
        setTotalPages(Math.ceil(res.totalResults/10));
        setError(null);
        console.log(movies)
      })
      .catch((err) => {
        setError(err);
        setMovies([]);
        console.log("Error:", err);
      })
      .finally(() => {
        setIsMovieData(false);
      });
  }, [searchTerm]);

  useEffect(()=>{
    setIsMovieData(true)
      getMovieDetailsById("tt2975590")
      .then((res)=>{
        console.log(res)
        setMovie(res)
      })
  },[])

  console.log(movies);
  return (
    <div className="App">
      <MovieList movies={movies} />

      {isMovieData ? (
        <MovieCard
          title={movie.Title}
          type={movie.Type}
          posterUrl={movie.Poster}
        />
      ) : (
        "Please refresh"
      )} 
      {isMovieData ? (
        <MovieDetails
          title={movie.Title}
          rated={movie.Type}
          posterUrl={movie.Poster}
          runtime={movie.Runtime}
          genre={movie.Genre}
          plot={movie.Plot}
          actors={movie.Actors}
          rating={movie.imdbRating}
          rated={movie.Rated}
        />
      ) : (
        "Please refresh"
      )}  
    </div>
  );
}

export default App;
