import React from 'react';
import actors from './data/ActorList.js';
import { image_base_url, poster_size } from './data/MovieList.js';
import { useParams } from 'react-router-dom';

function Actors() {
  let { movieId } = useParams();

  let selectActors = actors.filter((el) => {
    if (parseInt(movieId) === el.id) {
      return el;
    } else {
      return null;
    }
  });

  return (
    <div className='actors'>
      <div className='actors-header'>
        <h2 className='actors-header-text'>Actors</h2>
      </div>
      <div className='actors-container'>
        {selectActors[0].cast.map((el) => (
          <div key={el.credit_id} className='actor-tile'>
            <img
              className='actor-image'
              src={`${image_base_url}${poster_size}${el.profile_path}`}
              alt='No Image'
            ></img>
            <span className='actor-name'>{el.name}</span>
            <span className='actor-character'>{el.character}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actors;
