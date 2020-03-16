import React from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieTile from "./components/MovieTile";
import Footer from "./components/Footer";

function App(){
  return <div className="container">
      <Header />
      <SearchBar />
      <MovieTile />    
      <Footer />     
  </div>
}


export default App;


