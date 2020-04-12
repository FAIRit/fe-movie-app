import React from 'react';
import Header from './components/Header';
import Login from './components/Login';

import MovieCard from './components/MovieCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route path='/movies/:movieId' component={MovieCard} />
          <Route path='/movies' component={HomePage} />
          <Route path='/login' component={Login} />
          <Redirect from='/' to='/movies' />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


