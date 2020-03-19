import React from 'react';
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import Movie from "./components/Movie"
import MovieCard from './components/MovieCard';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function App(){
  return (
    <Router>
      <div className="container">
        <Header />
        
        
        <Switch>
          <Route path="/movies/:movieId" component={MovieCard} />
          <Route path="/movies" component={Movie} />
          <Route path="/login" component={LogIn} />
          <Redirect from="/" to="/movies" />

        </Switch>
          
      </div>
    </Router>
           
  )
}

export default App;


