import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const movieTitle = movie.title.length > 20 ? `${movie.title.substring(0,20)}...` : movie.title;
  const navigate = useNavigate();
  return (
    <div className='card-container' onClick={()=>navigate(`/movie/${movie.id}`)}>
        <img src={imgURL} alt="" className="card-image" />
        <div className="movie-title-container">
            <h3 className='movie-title'>{movieTitle}</h3>
        </div>
    </div>
  )
}

export default Card;