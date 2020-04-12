import React, { useState, useEffect } from 'react';
import {
  POSTER_SIZE,
  IMAGE_URL,
  fetchMovies,
  fetchPopularMovies,
} from './data/Data';
import MovieTile from './MovieTile';
import SearchBar from './SearchBar';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (filter) {
      fetchMovies(filter).then((response) => setMovies(response.results));
    } else {
      fetchPopularMovies().then((response) => setMovies(response.results));
    }
  }, [filter]);

  function handleFilterChange(value) {
    setFilter(value);
  }

  return (
    <div>
      <SearchBar onChange={handleFilterChange} />
      <div className='movie-board'>
        <div className='movie-board-container'>
          {movies.map((movie) => {
            return (
              <MovieTile
                key={movie.id}
                image={
                  movie.poster_path &&
                  `${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`
                }
                movieId={movie.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
