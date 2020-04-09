import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL, POSTER_SIZE, IMAGE_URL } from './data/Data';
import MovieTile from './MovieTile';
import SearchBar from './SearchBar';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getFetchMovies();
  }, []); // tablica aby fetch nie wykonywał się przy każdym renderze, a tylko za pierwszym razem

  function getFetchMovies() {
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`) //popular movies
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results); ///////////
        setMovies(response.results);
      });
  }

  return (
    <div>
      <SearchBar />
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
      <button>Next</button>
    </div>
  );
}

export default HomePage;
