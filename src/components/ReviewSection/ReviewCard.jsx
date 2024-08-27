import React from 'react';
import PropTypes from 'prop-types';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h4>{review.author}</h4>
      <p>{review.text}</p>
      <p>Rating: {review.rating} / 5</p>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewCard;
