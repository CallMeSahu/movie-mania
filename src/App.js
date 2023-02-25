import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';

function App() {
    

  return (
    <div className="App">
     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
        </Routes>
           
    </div>
  );
}

export default App;
