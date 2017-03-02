import React from 'react';
import ReactDOM from 'react-dom';

const myMovies = [];

function getMovies() {
  fetch('http://www.omdbapi.com/?s=Star%20Wars&plot=short&r=json')
    .then(res => res.json())
    .then(movies => myMovies.push(movies))
}

getMovies();

function myMovie(props) {
  return (
    <div>
      <h1>Title: {props.title}</h1>
      <p>Year: {props.year}</p>
    </div>
  );
}

ReactDOM.render(
  <div>Hello!</div>,
  document.getElementById('root')
);
