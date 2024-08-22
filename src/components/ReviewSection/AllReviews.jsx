import React from 'react';
import ReviewCard from './ReviewCard'; 
import './AllReviews.css'; 

const allReviews = [
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
  
];

function AllReviews() {
  return (
    <div className="all-reviews">
      <h2>All Reviews</h2>
      <div className="reviews-container">
        {allReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
        <div className="all-reviews-section">
        <AllReviews /> {/* Add AllReviews component here */}
      </div>
      </div>
    </div>
  );
}

export default AllReviews;
