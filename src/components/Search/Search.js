import React, { useState } from 'react';
import './Search.css';

const Search = ({ setKeyword }) => {
    const[term, setTerm] = useState('')


    const inputChangeHandler = (e) => {
        setTerm(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setKeyword(term);
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <input className='search-input-box' type="text" placeholder='Search for a Movie...' onChange={inputChangeHandler} />
            <input className='search-submit' type='submit' />
        </form>
    )
}

export default Search;