import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Movie from './Movie';
import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
          console.log('MovieList movies response', response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div>
          <MovieCard key={movie.id} movie={movie.id} title={movie.title} stars={movie.stars} director={movie.director} metascore={movie.metascore}/>
        </div>
      ))}
      
    </div>
  );
}

export default MovieList;
