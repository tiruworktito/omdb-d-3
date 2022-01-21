import React from "react";
import "./MovieDetail.css";

function MovieDetails({
  posterUrl,
  title,
  rated,
  runtime,
  genre,
  plot,
  actors,
  rating,
}) {
  return (
    <div className="container">
      <div>
        <img src={posterUrl} alt={`{title}poster`} />
      </div>
      <div className="textContainer">
        <div className="titleRating">
          <h2 className="title">{title}</h2>
          <h2 className="rating">{rating}</h2>
        </div>
        <div className="titleRating">
        <h4 className="rruntime">{rated}</h4>
        <h4 className="rruntime">{runtime}</h4>
        </div>
       
        <h4 className="genre">{genre}</h4>
        <h2 className="titleRating">Plot</h2>
        <p className="titleRating">{plot}</p>
        <h2 className="titleRating">Actors</h2>
        <p className="titleRating">{actors}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
