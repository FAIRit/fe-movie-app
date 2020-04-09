import React from 'react';
import { Link } from 'react-router-dom';

function MovieTile(props) {
  return (
    <Link to={`/movies/${props.movieId}`}>
      <img className='movie-tile' src={props.image} alt='poster'></img>
    </Link>
  );
}

export default MovieTile;

