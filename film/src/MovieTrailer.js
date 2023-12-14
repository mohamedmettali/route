import React from 'react';
import { useParams } from 'react-router-dom';

const MovieTrailer = ({ movies }) => {
  const { id } = useParams();
//   const movie = movies.find((movie) => movie.id === Number(id));



  return (
    <div>
      <h3>Trailer</h3>
      <iframe
        title="movie-trailer"
        width="560"
        height="315"
        // src={movie.trailer}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;