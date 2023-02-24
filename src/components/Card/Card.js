import React from 'react';
import './Card.css';

const Card = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/original${movie.poster_path}`
  return (
    <div className='card-container'>
        <img src={imgURL} alt="" className="card-image" />
        <div className="movie-title-container">
            <h3 className='movie-title'>{movie.title}</h3>
        </div>
    </div>
  )
}

export default Card;