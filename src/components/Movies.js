import { nodeName } from 'jquery';
import React from 'react';
import { movies } from '../data';

const hStyle = {
  padding: '5px',
  margin: '0px'
}
const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div key={movie.title}>
          <h4 style={hStyle}>Title: {movie.title}</h4>
          <h4 style={hStyle}>Length: {movie.time} mins</h4>
          <h4 style={hStyle}>Genres: </h4>
          <ul style={{'margin-top': "0px"}}>
            {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
