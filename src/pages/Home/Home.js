import React , { useState, useEffect }from 'react';
import axios from "axios";
import './Home.css';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';

const Home = () => {
    const[keyword, setKeyword] = useState('');
    const[movies, setMovies] = useState([]);
    const[loading, setLoading] = useState(false); 
    
    useEffect(()=>{
        setLoading(true);
        const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US&query=${keyword}&page=1&include_adult=false`;
        axios.get(baseURL)
        .then(res => setMovies(res.data.results))
        .catch(err => console.error(err)); 

        setLoading(false);
    }, [keyword])
    return (
        <div>
            <h1 className='App-header'>Movie Mania</h1>
            <Search setKeyword={setKeyword} />
            <div className='movie-listing'>
            {
                movies.length === 0 
                ? keyword.length > 0 && loading === false && <h2 className='not-found-text'>No result found...</h2>
                : movies.map(movie => (
                <Card key={movie.id} movie={movie} />
                )            
                )
            }          
            </div>
        </div>
    )
}

export default Home;