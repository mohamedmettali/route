import React from "react";
import MovieCard from "./MovieCard";

const  MovieList = ({moviesData}) => {
   
  
    return (
<div style={{ display: "flex", flexWrap: "wrap" }}>
{moviesData.map((movie) => (
  <MovieCard key={movie.id} {...movie} />
  
))}
</div>
    )
}
 export default MovieList;