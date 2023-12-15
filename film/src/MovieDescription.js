import React from 'react';
import { useParams } from 'react-router-dom';
import moviesData from "./movies";

const MovieDescription = () => {
  const { id } = useParams();
 const movie = moviesData.find((movies) => movies.id === Number(id));
 



  return (
    <div>
      <h3>Description</h3>
      {<p>{movie.description}</p> }
    </div>
  );
};

export default MovieDescription;