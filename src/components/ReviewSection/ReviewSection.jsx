// src/components/ReviewSection.js

import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';
import StarRating from './StarRating'; // Import the StarRating component
import './ReviewSection.css';

// Sample initial data with reviews
const initialHotels = [
  {
    id: 1,
    name: "Ocean View Resort",
    reviews: [
      { id: 1, email: "alice@example.com", text: "Amazing experience! The service was top-notch and exceeded my expectations.", rating: 5, photo: "https://via.placeholder.com/50" },
      { id: 2, email: "bob@example.com", text: "I am thoroughly impressed with the quality and professionalism. Highly recommend!", rating: 4, photo: "https://via.placeholder.com/50" }
    ]
  },
  {
    id: 2,
    name: "Mountain Retreat",
    reviews: [
      { id: 3, email: "charlie@example.com", text: "The team went above and beyond. Fantastic job, and I will definitely be coming back.", rating: 5, photo: "https://via.placeholder.com/50" },
      { id: 4, email: "diana@example.com", text: "A perfect getaway spot with breathtaking views and excellent service.", rating: 4, photo: "https://via.placeholder.com/50" }
    ]
  }
];

const ReviewSection = () => {
  const [hotels, setHotels] = useState(initialHotels);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showReviews, setShowReviews] = useState(true); // State to manage visibility

  useEffect(() => {
    // Load data from local storage if available, otherwise fallback to initialHotels
    const storedHotels = JSON.parse(localStorage.getItem('hotels'));
    if (storedHotels) {
      setHotels(storedHotels);
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever hotels state changes
    localStorage.setItem('hotels', JSON.stringify(hotels));
  }, [hotels]);

  const handleHotelChange = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const hotel = hotels.find(h => h.id === selectedId);
    setSelectedHotel(hotel);
  };

  const handleReviewSubmit = ({ email, reviewText, rating }) => {
    if (selectedHotel) {
      const newReview = {
        id: Date.now(), // Simple unique ID generation
        email,
        text: reviewText,
        rating, // Add rating to the review
        photo: "https://via.placeholder.com/50" // Placeholder photo URL
      };

      // Update the selected hotel with the new review
      const updatedHotels = hotels.map(hotel => 
        hotel.id === selectedHotel.id
          ? { ...hotel, reviews: [...hotel.reviews, newReview] }
          : hotel
      );

      setHotels(updatedHotels);
      setSelectedHotel(updatedHotels.find(hotel => hotel.id === selectedHotel.id));
    }
  };

  return (
    <section className="review-section">
      <h2>What People Say About Our Hotels</h2>

      <div className="hotel-selector">
        <label htmlFor="hotel-select">Choose a hotel:</label>
        <select id="hotel-select" onChange={handleHotelChange} value={selectedHotel ? selectedHotel.id : ''}>
          <option value="" disabled>Select a hotel</option>
          {hotels.map(hotel => (
            <option key={hotel.id} value={hotel.id}>
              {hotel.name}
            </option>
          ))}
        </select>
      </div>

      {selectedHotel && (
        <>
          <button onClick={() => setShowReviews(!showReviews)} className="toggle-reviews-button">
            {showReviews ? 'Hide Reviews' : 'Show Reviews'}
          </button>

          {showReviews && (
            <div className="review-list">
              {selectedHotel.reviews.map(review => (
                <div key={review.id} className="review-item">
                  <img src={review.photo} alt={`${review.email}'s photo`} className="review-photo" />
                  <div className="review-content">
                    <StarRating rating={review.rating} /> {/* Display the star rating */}
                    <p className="review-text">"{review.text}"</p>
                    <p className="review-author">- {review.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <ReviewForm onSubmit={handleReviewSubmit} />
        </>
      )}
    </section>
  );
};

export default ReviewSection;
