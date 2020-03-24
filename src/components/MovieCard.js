import React from 'react';
import Poster from './images/poster.jpg';
import Actors from './Actors';
import MovieCardNavigation from './MovieCardNavigation';

function MovieCard() {
  return (
    <div className='movie-card'>
      <MovieCardNavigation />

      <div className='movie-card-container'>
        <div className='movie-card-image'>
          <img className='poster' src={Poster} alt='Poster' />
        </div>
        <div className='movie-card-info'>
          <h2 className='movie-card-title'>Movie title</h2>
          <div className='movie-card-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
          <div className='movie-card-detail-info'>
            <div>Rating</div>
            <div>Add to favourites</div>
          </div>
        </div>
      </div>
      <Actors />
    </div>
  );
}

export default MovieCard;
