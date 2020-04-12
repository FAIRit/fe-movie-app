const API_KEY = '8c310513a879a0f9afc2a2d4fd1fa16a';
const API_URL = 'https://api.themoviedb.org/3/';

const IMAGE_URL = 'http://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w500';

function fetchPopularMovies() {
  return fetch(
    `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  ) //popular movies
    .then((response) => response.json());
}

function fetchMovies(query) {
  return fetch(
    `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  ).then((response) => response.json());
}

function fetchSelectedMovie(movieId) {
  return fetch(
    `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  ).then((response) => response.json());
}

function fetchActors(movieId) {
  return fetch(
    `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`,
  ).then((response) => response.json());
}

export {
  API_KEY,
  API_URL,
  IMAGE_URL,
  POSTER_SIZE,
  fetchMovies,
  fetchPopularMovies,
  fetchSelectedMovie,
  fetchActors,
};
