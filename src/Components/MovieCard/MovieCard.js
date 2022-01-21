import React from 'react'

const MovieCard=({posterUrl,title,type})=>  (
        <div>
            
            <img
            src={posterUrl}
            alt={`{title}poster`}/>
            <h2>{title}</h2>
            <span>{type}</span>
        </div>
    )


export default MovieCard;