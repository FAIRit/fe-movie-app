import React from 'react';
import SearchBar from './SearchBar';
import MovieTile from './MovieTile';
import Footer from './Footer';

function Movie() {
  return (
    <div>
      <SearchBar />
      <MovieTile />
      <Footer />
    </div>
  );
}

export default Movie;
