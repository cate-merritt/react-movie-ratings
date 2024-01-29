import React from 'react';
import Stars from './Stars';

const MovieList = ({ movies, onReviewSubmit }) => {
  return (
    <div className='movie-list'>
      <h1>Classic Critics</h1>
      {movies.map((movie, index) => (
        <div key={index} className='d-flex justify-content-start m-5'>
          <img src={movie.Poster} alt='movie' />
          <div className='Stars'>
            <Stars movieId={movie.imdbID} onReviewSubmit={onReviewSubmit} />
            <div>  
              {movie.reviews.map((review, reviewIndex) => (
                <div key={reviewIndex}>
                  <p>Rating: {review.starRating}</p>
                  <p>Comment: {review.comment}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='movie-title'>
            <p><b>Film Name: </b>{movie.Title}</p>
            <p><b>Year Released: </b> {movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

