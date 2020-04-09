import React, { useState, useEffect } from 'react';
import MovieTile from './MovieTile';

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const API_KEY = '8c310513a879a0f9afc2a2d4fd1fa16a';
  const API_URL = 'https://api.themoviedb.org/3/';

  const IMAGE_URL = 'http://image.tmdb.org/t/p/';
  const POSTER_SIZE = 'w500';
  function handleInputChange(event) {
    setSearchInput(event.target.value);

    console.log('value', searchInput, event.target.value); ////
  }

  useEffect(() => {
    getSearchedMovies();
  }, [searchInput]); // tablica aby fetch nie wykonywał się przy każdym renderze, a tylko za pierwszym razem

  function getSearchedMovies() {
    fetch(
      `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchInput}&page=1&include_adult=false`,
    )
      .then((response) => response.json())
      .then((response) => {
        console.log('batman', response.results); ///////////
        setSearchResult(response.results);
      });
  }
  console.log('hello');
  function handleButtonClick() {}

  return (
    <div className='searchbar'>
      <div className='searchbar-container'>
        <input
          type='text'
          placeholder='Search movie...'
          onChange={handleInputChange}
          value={props.searchInput}
        ></input>
        <button className='search-button'>Search</button>
        <div className='movie-board'>
          <div className='movie-board-container'>
            {searchResult &&
              searchResult.map((movie) => {
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
    </div>
  );
}

export default SearchBar;


