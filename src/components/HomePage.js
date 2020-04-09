import React, { useCallback, useEffect, useState } from 'react';
import { API_KEY, API_URL, IMAGE_URL, POSTER_SIZE } from './data/Data';
import MovieTile from './MovieTile';
import SearchBar from './SearchBar';

// TODO Fetchowanie mozna wyrzucic poza komponent HomePage (tzw. warstwa usług, services)

function fetchPopularMovies() {
  return fetch(
    `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  ).then((response) => response.json());
}

function fetchMovies(query) {
  return fetch(
    `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  ).then((response) => response.json());
}

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchPopularMovies().then((response) => setMovies(response.results));
  }, []); // tablica aby fetch nie wykonywał się przy każdym renderze, a tylko za pierwszym razem

  useEffect(() => {
    if (filter) {
      fetchMovies(filter).then((response) => setMovies(response.results));
    } else {
      fetchPopularMovies().then((response) => setMovies(response.results));
    }
  }, [filter]);

  const handleFilterChange = useCallback((value) => {
    setFilter(value);
  }, []);

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
      <button>Next</button>
    </div>
  );
}

export default HomePage;
