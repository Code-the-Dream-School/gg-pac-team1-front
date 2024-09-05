// src/components/ReviewForm.js

import React, { useState } from 'react';
import StarRating from './StarRating'; // Import the StarRating component
import './ReviewForm.css'; // Import the CSS file for styling

const ReviewForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0); // Add state for the rating

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    if (email && reviewText && rating) {
      onSubmit({ email, reviewText, rating });
      setEmail('');
      setReviewText('');
      setRating(0);
    }
  };

  return (
    <div className="review-form">
      <h3>Leave a Review</h3>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Your email address"
        className="review-input"
      />
      <textarea
        value={reviewText}
        onChange={handleReviewTextChange}
        placeholder="Write your review here..."
        rows="4"
        className="review-textarea"
      />
      <StarRating rating={rating} onChange={handleRatingChange} /> {/* Add StarRating component */}
      <button onClick={handleSubmit} className="review-submit-button">Submit Review</button>
    </div>
  );
};

export default ReviewForm;
