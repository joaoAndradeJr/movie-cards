import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <div className="page-title">
        <div className="movie-card-header">
          <Header />
        </div>
      </div>
      <div className="movie-list">
        <MovieList />
      </div>
    </div>
  );
}

export default App;
