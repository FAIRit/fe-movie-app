import React from 'react';

function Footer() {
    const year= new Date().getFullYear();
    
    return (
        <div className="page-footer">
            <p>Copyright ⓒ {year}</p>
        </div>
    )
}

export default Footer;