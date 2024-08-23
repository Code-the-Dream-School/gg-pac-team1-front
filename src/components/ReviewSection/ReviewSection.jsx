import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import StarRating from './StarRating';


function ReviewSection({ selectedHotel }) {
  const navigate = useNavigate();

  const [allReviews, setAllReviews] = useState([
    {
      hotel: 'Hotel Sunshine',
      author: 'John Doe',
      text: 'Amazing place! Highly recommend visiting.',
      rating: 4,
    },
    {
      hotel: 'Hotel Sunshine',
      author: 'Jane Smith',
      text: 'Beautiful scenery and friendly locals.',
      rating: 5,
    },
    {
      hotel: 'Ocean View Resort',
      author: 'Emily Johnson',
      text: 'The experience was wonderful, and the food was excellent!',
      rating: 5,
    }, 
    {
      hotel: 'Mountain Lodge',
      author: 'Michael Brown',
      text: 'Nice atmosphere, but the service could be improved.',
      rating: 3,
    },
  ]);

  
  if (!selectedHotel) {
    return <p>Please select a hotel to see the reviews.</p>;
  }

  const filteredReviews = allReviews.filter(review => review.hotel === selectedHotel);

  const handleLeaveReviewClick = () => {
    navigate('/leave-review');
  };

  return (
    <div className="review-section">
      <h2 className="review-title">What people say about {selectedHotel}</h2>

      <div className="reviews-container">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        ) : (
          <p>No reviews yet for {selectedHotel}.</p>
        )}
      </div>

      <h3 
        onClick={handleLeaveReviewClick} 
        className="review-toggle-button"
      >
        Leave your review:
      </h3>
      <StarRating rating={0} onRatingChange={(rating) => console.log('User selected rating:', rating)} />
    </div>
  );
}

ReviewSection.propTypes = {
  selectedHotel: PropTypes.string.isRequired,
};

export default ReviewSection;
