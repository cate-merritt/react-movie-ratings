import React from 'react';
import Stars from './Stars';

const MovieList = ({ movies, onReviewSubmit }) => {
  return (
    <div className='movie-list'>
        {/* Heading for the Movie List */}
      <h1>Classic Critics</h1>

       {/* Mapping through the list of movies */}
      {movies.map((movie, index) => (
        <div key={index} className='d-flex justify-content-start m-5'>
           {/* Displaying movie poster */}
          <img src={movie.Poster} alt='movie' />
          <div className='Stars'>
            {/* Stars component for rating */}
            <Stars movieId={movie.imdbID} onReviewSubmit={onReviewSubmit} />
             {/* Displaying reviews for the current movie */}
            <div>  
              {movie.reviews.map((review, reviewIndex) => (
                <div key={reviewIndex}>
                  {/* Displaying rating from the review */}
                  <p>Rating: {review.starRating}</p>
                  <p>Comment: {review.comment}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='movie-title'>
             {/* Displaying movie title and information */}
            <p><b>Film Name: </b>{movie.Title}</p>
            <p><b>Year Released: </b> {movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

