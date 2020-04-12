import React, { useState, useEffect } from 'react';
import { POSTER_SIZE, IMAGE_URL, fetchActors } from './data/Data';
import { useParams } from 'react-router-dom';
import default_image from './images/default_image.png';

function Actors() {
  let { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchActors(movieId).then((response) => setActors(response.cast));
  }, []);

  return (
    <div className='actors'>
      <div className='actors-header'>
        <h2 className='actors-header-text'>Actors</h2>
      </div>
      <div className='actors-container'>
        {actors &&
          actors.map((actor) => {
            return (
              <div key={actor.credit_id} className='actor-tile'>
                <img
                  className='actor-image'
                  src={
                    actor.profile_path
                      ? `${IMAGE_URL}${POSTER_SIZE}${actor.profile_path}`
                      : default_image
                  }
                  alt='Actor'
                ></img>
                <span className='actor-name'>{actor.name}</span>
                <span className='actor-character'>{actor.character}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Actors;
