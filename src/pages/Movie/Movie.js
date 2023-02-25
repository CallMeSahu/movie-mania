import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Movie.css";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const[movie, setMovie] = useState();

  useEffect(()=>{
   const baseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US`;
        async function getData(){
          try{
            const response = await axios.get(baseURL);
            console.log(response.data);
            setMovie(response.data)
          }
          catch(error){
            console.error(error);
          }
        }
        getData();
        console.log(movie);
  });

  return (
    <div className="movie-container">
      <img className='poster-image' src="https://source.unsplash.com/random" alt="" />
      <div className="detail-container">
        <h1 className='movie-name'>{movie.title}</h1>
        <p className="year-of-release">{movie.release_date.substring(0,4)}</p>
        <p className="rating"><strong>Rating:</strong> {movie.vote_average.substring(0,2)}</p>
        <p className="description">{movie.overview}</p>
        <button className="close-btn" onClick={() => navigate
        ('/')}>Close</button>
      </div>
    </div>
  )
}

export default Movie