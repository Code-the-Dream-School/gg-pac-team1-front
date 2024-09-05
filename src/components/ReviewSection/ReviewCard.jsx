import React from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';
import './ReviewSection.css';

const ReviewSection = ({ selectedHotel, reviews }) => {
  // Ensure reviews is an array before calling filter
  const filteredReviews = Array.isArray(reviews) ? reviews.filter(review => review.hotel === selectedHotel) : [];

  return (
    <div className="review-section">
      <h2 className="review-title">What people say about {selectedHotel}</h2>

      <div className="reviews-container">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        ) : (
          <p>No reviews available for {selectedHotel}.</p>
        )}
      </div>
    </div>
  );
};

ReviewSection.propTypes = {
  selectedHotel: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    hotel: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default ReviewSection;
