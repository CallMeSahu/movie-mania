import './App.css';
import React, {useState} from 'react';
import Card from './components/Card/Card';
import Search from './components/Search/Search';

function App() {
  const[keyword, setKeyword] = useState('');

  return (
    <div className="App">
      <h1 className='App-header'>Movie Mania</h1>
        <Search setKeyword={setKeyword} />
    </div>
  );
}

export default App;
