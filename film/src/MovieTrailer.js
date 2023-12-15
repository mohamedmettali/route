import React from 'react';
import { useParams } from 'react-router-dom';
import moviesData from "./movies";

const MovieTrailer = () => {
  const { id } = useParams();

 const movie = moviesData.find((movie) => movie.id === Number(id));



  return (
    <div>
      <h3>Trailer</h3>
      <iframe
        title="movie-trailer"
        width="560"
        height="315"
        src={movie.trailer}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;