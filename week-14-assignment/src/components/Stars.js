import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../App.css';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Stars({ onReviewSubmit }) {
     // State for managing user input and reviews
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  // Array to represent star icons
  const stars = Array(5).fill(0);

   // Event handler for clicking on a star
  const handleClick = (value) => {
    setCurrentValue(value);
  };
 
  // Event handlers for mouseover and mouseleave on stars
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  // Event handler for updating comment input
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Event handler for submitting a review
  const handleReviewSubmit = () => {
    // Creating review data object
    const reviewData = {
      starRating: currentValue,
      comment: comment,
    };
    // Updating reviews state with the new review
    setReviews([...reviews, reviewData]);
    // Calling the provided onReviewSubmit function
    onReviewSubmit(reviews);
    // Clearing state after submission
    setCurrentValue(0);
    setHoverValue(undefined);
    setComment('');
  };

  return (
    <div style={styles.container}>
        {/* Heading for the review section */}
      <h2> Share your thoughts... </h2>

      {/* Star rating section */}
      <div style={styles.stars}>
        {stars.map((_, index) => (
          <FaStar
            key={index}
            size={24}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={
              (hoverValue || currentValue) > index ? colors.orange : colors.grey
            }
            style={{
              marginRight: 10,
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Comment input section */}
      <textarea
        placeholder="Type your review here!"
        value={comment}
        onChange={handleCommentChange}
        style={styles.textarea}
      />

      {/* Submit button */}
      <button 
        style={styles.button}
        onClick={handleReviewSubmit}
      >
        Submit
      </button>

      {/* Display reviews underneath the form */}
      {reviews.length > 0 && (
        <div style={styles.reviewContainer}>
          {reviews.map((review, index) => (
            <div key={index} style={styles.review}>
              {/* Displaying star icons based on the rating and comment */}
              <p>Rating: {Array(review.starRating).fill(<FaStar size={18} color={colors.orange} />)}</p>
              <p>Comment: {review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
  reviewContainer: {
    marginTop: 20,
  },
  review: {
    margin: "10px 0",
  },
};

export default Stars;
