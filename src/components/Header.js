import React from 'react';
import Logo from './images/raccoon_logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-logo'>
          <Link to='/'>
            <img className='header-logo-img' src={Logo} alt='Logo'></img>
          </Link>
        </div>
        <div className='header-title'>
          <Link className='link' to='/'>
            <h1>RACOON Movie Database</h1>
          </Link>
        </div>
        <div className='header-log-in'>
          <Link className='link' to='/Login'>
            <p>Log in</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
