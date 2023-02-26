import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Movie.css";

const Movie = ({ likes, setLikes, views, setViews}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const[movie, setMovie] = useState({
    ImgPath: '',
    Title: '',
    ReleaseDate: '',
    Rating: '',
    Description: ''
  });


  useEffect(()=>{
   const baseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US`;
        axios.get(baseURL)
        .then(res => {
          console.log(res.data);
          let movieData = res.data;
          setMovie({
            ImgPath: movieData.poster_path,
            Title: movieData.title,
            ReleaseDate: movieData.release_date,
            Rating: movieData.vote_average.toString(),
            Description: movieData.overview
          })
        })
        .catch(err => console.error(err))
  }, []);

  return (
    <div className="movie-container">
      <img className='poster-image' src={`https://image.tmdb.org/t/p/original${movie.ImgPath}`} alt="" />
      <div className="detail-container">
        <h1 className='movie-name'>{movie.Title}</h1>
        <p className="year-of-release">{movie.ReleaseDate.substring(0,4)}</p>
        <p className="rating"><strong>Rating:</strong> {movie.Rating.substring(0,3)}</p>
        <p className="views"><strong>Views:</strong> 0</p>
        <button className="like-btn">Like</button>
        <p className="description">{movie.Description}</p>
        <button className="close-btn" onClick={() => navigate
        ('/')}>Close</button>
      </div>
    </div>
  )
}

export default Movie