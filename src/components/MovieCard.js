import React, { useEffect, useState } from 'react';
import Actors from './Actors';
import MovieCardNavigation from './MovieCardNavigation';
import { useParams } from 'react-router-dom';
import { POSTER_SIZE, IMAGE_URL, fetchSelectedMovie } from './data/Data';

function MovieCard() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchSelectedMovie(movieId).then((response) => setMovie(response));
  }, []);

  return (
    <div className='movie-card'>
      <MovieCardNavigation />
      <div className='movie-card-container'>
        <div className='movie-card-image'>
          <img
            className='poster'
            src={
              movie.poster_path &&
              `${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`
            }
            alt='Poster'
          />
        </div>
        <div className='movie-card-info'>
          <h2 className='movie-card-title'>{movie.title}</h2>
          <div className='movie-card-description'>{movie.overview}</div>
          <div className='movie-card-detail-info'>
            <div>Genre: {movie.genres && movie.genres[0].name}</div>
            <div>Rating {movie.vote_average}/10</div>
            <div>Add to favourites</div>
          </div>
        </div>
      </div>
      <Actors />
    </div>
  );
}

export default MovieCard;
