import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL, POSTER_SIZE, IMAGE_URL } from './data/Data';

import { useParams } from 'react-router-dom';

function Actors() {
  let { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((response) => {
        setActors(response.cast); ///////////
      });
  }, []);

  return (
    <div className='actors'>
      <div className='actors-header'>
        <h2 className='actors-header-text'>Actors</h2>
      </div>
      <div className='actors-container'>
        {actors.map((actor) => (
          <div key={actor.credit_id} className='actor-tile'>
            <img
              className='actor-image'
              src={`${IMAGE_URL}${POSTER_SIZE}${actor.profile_path}`}
              alt='No Image'
            ></img>
            <span className='actor-name'>{actor.name}</span>
            <span className='actor-character'>{actor.character}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actors;
