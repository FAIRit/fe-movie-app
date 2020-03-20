import React from 'react';
import { useParams } from 'react-router-dom';

function MovieCard() {
  let { movieId } = useParams();
  return <div>Movie: {movieId}</div>;
}

export default MovieCard;
