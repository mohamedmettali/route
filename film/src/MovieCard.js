import 'bootstrap/dist/css/bootstrap.css';
import ReactStars from 'react-stars';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieDescription from './MovieDescription';
import MovieTrailer from './MovieTrailer';

const MovieCard = ({ id, image, name, rating, date, type, seasons, description, trailer }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <Card style={{ width: '25rem', height: '100%' }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>
            <h2>{name}</h2>
          </Card.Title>
          <Card.Text>
            <p>Date: {date}</p>
            <p>Type: {type}</p>
            <p>Seasons: {seasons}</p>
            <Link to={`/movies/description/${id}`}>Description</Link>
            |
            <Link to={`/movies/trailer/${id}`}>Trailer</Link>
            <MovieDescription description={description} />
            <MovieTrailer trailer={trailer} />
            <ReactStars
              count={5}
              value={rating}
              onChange={ratingChanged}
              size={24}
              color2={'#ffd700'}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;