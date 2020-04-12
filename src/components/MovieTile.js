import React from 'react';
import { Link } from 'react-router-dom';

function MovieTile({image, movieId}) {
  return (
    <Link to={`/movies/${movieId}`}>
      <img className='movie-tile' src={image} alt='poster'></img>
    </Link>
  );
}

export default MovieTile;
