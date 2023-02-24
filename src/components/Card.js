import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className='card-container'>
        <img src="https://source.unsplash.com/random" alt="" className="card-image" />
        <div className="movie-title-container">
            <h3 className='movie-title'>Spiderman</h3>
        </div>
    </div>
  )
}

export default Card;