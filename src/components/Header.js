import React from 'react';
import Logo from './images/raccoon_logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-logo'>
          <Link to='/'>
            <img src={Logo} alt='Logo' height='75px'></img>
          </Link>
        </div>
        <div className='header-title'>
          <Link className='link' to='/'>
            <h1>RACOON Movie Database</h1>
          </Link>
        </div>
        <div className='header-log-in'>
          <Link className='link' to='/LogIn'>
            <p>Log in</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
