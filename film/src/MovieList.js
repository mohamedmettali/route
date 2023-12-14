import React from "react";
import MovieCard from "./MovieCard";

const  MovieList = ({movieData}) => {
   
  
    return (
<div style={{ display: "flex", flexWrap: "wrap" }}>
{movieData.map((movie) => (
  <MovieCard key={movie.id} {...movie} />
))}
</div>
    )
}
 export default MovieList;