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


export default AllReviews;
