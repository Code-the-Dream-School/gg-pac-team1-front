import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import StarRating from './StarRating';
import './ReviewSection.css';

function ReviewSection() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([
    {
      author: 'John Doe',
      text: 'Amazing place! Highly recommend visiting.',
      rating: 4,
    },
    {
      author: 'Jane Smith',
      text: 'Beautiful scenery and friendly locals.',
      rating: 5,
    },
    {
        author: 'Emily Johnson',
        text: 'The experience was wonderful, and the food was excellent!',
        rating: 5,
      }, 
      {
        author: 'Michael Brown',
        text: 'Nice atmosphere, but the service could be improved.',
        rating: 3,
      },
  ]);

  const handleLeaveReviewClick = () => {
    navigate('/leave-review');
  };

  return (
    <div className="review-section">
      <h2 className="review-title">What people say about our destinations</h2>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      <h3 onClick={handleLeaveReviewClick} style={{ cursor: 'pointer', color: 'blue' }}>
        Leave your review:
      </h3>
      <StarRating rating={0} onRatingChange={(rating) => console.log('User selected rating:', rating)} />
        
    </div>
  );
}

export default ReviewSection;
