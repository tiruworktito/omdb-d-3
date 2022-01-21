import React from "react";
import MovieCard from "../MovieCard/MovieCard";

function MovieList({ movies }) {
//   console.log(movies);

  return (
    <div style={{display:"flex"}}>
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID}
          title={movie.Title}
          posterUrl={movie.Poster}
          type={movie.Type}
        />
      ))}
    </div>
  );
}
MovieList.defaultProps={
    movies:[],
}

export default MovieList;
