import React from 'react';
import { Link } from 'react-router-dom';
import { movie, image_base_url, poster_size } from './data/MovieList.js';

function MovieTile() {
  return (
    <div className='movie-board'>
      <div className='movie-board-container'>
        {movie.map((movie) => (
          <Link to={`/movies/${movie.id}`}>
            <img
              className='movie-tile'
              src={`${image_base_url}${poster_size}${movie.poster_path}`}
              alt='poster'
            ></img>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieTile;
