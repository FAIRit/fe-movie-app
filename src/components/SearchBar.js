import React from "react";


function SearchBar() {
    return (
    <div className="searchbar">
        <div className="searchbar-container">            
                <input 
                type="text" 
                placeholder="Search movie...">
                </input>
                <button class="search-button">Search</button>                
            </div>        
    </div>
    )
}

export default SearchBar;