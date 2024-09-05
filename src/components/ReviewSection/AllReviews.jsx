import React from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard'; 
import './AllReviews.css'; 

const AllReviews = ({ reviews }) => {
  return (
    <div className="all-reviews">
      <h2>All Reviews</h2>
      <div className="reviews-container">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

AllReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AllReviews;
