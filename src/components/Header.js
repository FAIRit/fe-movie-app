import React from 'react';
import Logo from './images/raccoon_logo.png';


function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src={Logo} alt="Logo" height="75px"></img>
                </div>
                <div className="header-title">
                    <h1>RACOON Movie Database</h1>
                </div>
                <div className="header-log-in">
                    <p>Log in</p>
                </div>                     
            </div>           
        </div>
    )
}



export default Header