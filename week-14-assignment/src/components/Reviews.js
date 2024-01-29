/* import React, { useState } from 'react';

const Reviews = ({ onReviewSubmit }) => {
  const [inputData, setInputData] = useState({
    starRating: '',
    comment: '',
  });

  const changehandle = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onReviewSubmit(inputData);
    setInputData({ starRating: '', comment: '' });
  };

  return (
    <div className="d-flex flex-column">
      <input
        type="text"
        name="starRating"
        placeholder="Rating"
        value={inputData.starRating}
        onChange={changehandle}
        className="mr-2"
      />
      <input
        type="text"
        name="comment"
        placeholder="Comment"
        value={inputData.comment}
        onChange={changehandle}
        className="mr-2"
      />
      <button onClick={handleSubmit} className="btn btn-primary">
        Submit Review
      </button>
    </div>
  );
};

export default Reviews; */