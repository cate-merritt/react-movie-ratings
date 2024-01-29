import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MovieList from './components/MovieList';
import Stars from './components/Stars';

const App = () => {
  const [movies, setMovies] = useState([
    {
      "Title": "Creature from the Black Lagoon",
      "Year": "1954",
      "imdbID": "tt0046876",
      "Type": "movie",
      "Poster": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTd8o_4iIVKrUIGODLt7RFkCr3ix4KNqhrEy3fd8-zw-G-WUfMX",
      "reviews": [],
    },
    {
      "Title": "Banjo on My Knee",
      "Year": "1936",
      "imdbID": "tt0027331",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzRmYjlkNzMtOGQ0Mi00YmE5LWIzZTAtZDZjMmI4NTRhZGE1XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_FMjpg_UX1000_.jpg",
      "reviews": [],
    },
    {
      "Title": "Mutiny on the Bounty",
      "Year": "1935",
      "imdbID": "tt0026752",
      "Type": "movie",
      "Poster": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Mutiny_on_the_Bounty_poster.jpg",
      "reviews": [],
    },
    {
      "Title": "The Sea Wolf",
      "Year": "1941",
      "imdbID": "tt0034162",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDE3OGNmMTAtZWQyMi00ZDM0LWEwYTEtNmQ3MGZlNDQzYjIzXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_.jpg",
      "reviews": [],
    },
  ]);

  const handleReviewSubmit = (movieId, reviewData) => {
    setMovies(prevMovies => {
      const updatedMovies = [...prevMovies];
      const movieIndex = updatedMovies.findIndex(movie => movie.imdbID === movieId);

      if (movieIndex !== -1) {
        // If the movie exists, add the review to its reviews array
        updatedMovies[movieIndex] = {
          ...updatedMovies[movieIndex],
          reviews: [...updatedMovies[movieIndex].reviews, reviewData],
        };
      }

      return updatedMovies;
    });
  };

  return (
    <div className='container-fluid movie-app'>
      <div className='col'>
        <MovieList movies={movies} onReviewSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
};

export default App;

