import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../App.css';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Stars({ onReviewSubmit }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleReviewSubmit = () => {
    const reviewData = {
      starRating: currentValue,
      comment: comment,
    };
    setReviews([...reviews, reviewData]);
    onReviewSubmit(reviews);
    setCurrentValue(0);
    setHoverValue(undefined);
    setComment('');
  };

  return (
    <div style={styles.container}>
      <h2> Share your thoughts... </h2>

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
      <textarea
        placeholder="Type your review here!"
        value={comment}
        onChange={handleCommentChange}
        style={styles.textarea}
      />
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
