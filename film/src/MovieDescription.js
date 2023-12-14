import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
//   const movie = movies.find((movie) => movie.id === Number(id));



  return (
    <div>
      <h3>Description</h3>
      {/* <p>{movie.description}</p> */}
    </div>
  );
};

export default MovieDescription;