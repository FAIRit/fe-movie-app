import React from 'react';
import Actors from './Actors';
import MovieCardNavigation from './MovieCardNavigation';
import { movie, image_base_url, poster_size, genre } from './data/MovieList.js';
import { useParams } from 'react-router-dom';

function MovieCard() {
  let { movieId } = useParams();

  let selectedMovie = movie.filter((el) => {
    if (parseInt(movieId) === el.id) {
      return el;
    } else {
      return null;
    } // bez "return null" wyskakiwał mi error: expected to return a value at the end of arrow function  array-callback-return
  });

  let {
    title,
    overview,
    poster_path,
    vote_average,
    genre_ids,
  } = selectedMovie[0];

  let getGenre = genre.filter((el) => {
    if (genre_ids[0] === el.id) {
      return el.name;
    } else {
      return null;
    }
  });
 
  let { name: genre_name } = getGenre[0];

  return (
    <div className='movie-card'>
      <MovieCardNavigation />
      <div className='movie-card-container'>
        <div className='movie-card-image'>
          <img
            className='poster'
            src={`${image_base_url}${poster_size}${poster_path}`}
            alt='Poster'
          />
        </div>
        <div className='movie-card-info'>
          <h2 className='movie-card-title'>{title}</h2>
          <div className='movie-card-description'>{overview}</div>
          <div className='movie-card-detail-info'>
            <div>Genre: {genre_name}</div>
            <div>Rating {vote_average}/10</div>
            <div>Add to favourites</div>
          </div>
        </div>
      </div>
      <Actors />
    </div>
  );
}

export default MovieCard;
