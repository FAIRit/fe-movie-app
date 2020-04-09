import React, { useCallback, useState } from 'react';

function SearchBar({ onChange }) {
  const [value, setValue] = useState('');

  const handleInputChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleButtonClick = useCallback(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <div className='searchbar'>
      <div className='searchbar-container'>
        <input
          type='text'
          placeholder='Search movie...'
          onChange={handleInputChange}
          value={value}
        ></input>
        <button className='search-button' onClick={handleButtonClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
