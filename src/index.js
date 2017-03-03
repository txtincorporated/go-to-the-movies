import React from 'react';
import ReactDOM from 'react-dom';

let myMovies = [];

function getMovies() {
  fetch('http://www.omdbapi.com/?s=Star%20Wars&plot=short&r=json')
    .then(res => res.json())
    .then(res => {myMovies = res.Search})
    .then(() => console.log(myMovies))
}

// getMovies();

function myMovie(props) {
  return (
    <div>
      <h1>Title: {props.title}</h1>
      <p>Year: {props.year}</p>
    </div>
  );
}

function App(props) {
  getMovies();
  myMovies.map(() => {
    return myMovie();
  });
}

ReactDOM.render(
  <App movies={myMovies}/>,
  document.getElementById('root')
);

