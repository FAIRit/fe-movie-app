import React from 'react';
import { Link } from 'react-router-dom';

function MovieCardNavigation() {
  return (
    <div className='movie-card-navigation'>
      <div className='movie-card-navigation-container'>
        <Link to='/'>
          <p className='movie-card-navigation-text'>Go Back Home</p>
        </Link>
      </div>
    </div>
  );
}

export default MovieCardNavigation;
