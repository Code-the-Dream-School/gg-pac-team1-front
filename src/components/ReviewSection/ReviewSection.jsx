import React, { useState, useEffect } from 'react';
import './ReviewSection.css';
import ReviewForm from './ReviewForm';
import StarRating from './StarRating';

const ReviewSection = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showReviews, setShowReviews] = useState(true);

  useEffect(() => {
    fetchHotels();
  }, []);

  // Fetch hotels from the server
  const fetchHotels = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/hotels`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Hotels fetched:', data); // Log the fetched data
      setHotels(data.hotels || []); // Ensure 'hotels' is used if it exists in response
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  // Fetch reviews for the selected hotel
  const fetchReviews = async (hotelId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/${hotelId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const reviews = await response.json();
      const updatedHotels = hotels.map(hotel =>
        hotel._id === hotelId ? { ...hotel, reviews } : hotel
      );
      setHotels(updatedHotels);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // Handle hotel selection change
  const handleHotelChange = async (event) => {
    const selectedId = event.target.value;
    const hotel = hotels.find(h => h._id === selectedId);
    console.log('Selected hotel:', hotel); // Log the selected hotel
    setSelectedHotel(hotel);
    await fetchReviews(selectedId);
  };

  // Handle review submission
  const handleReviewSubmit = async (reviewData) => {
    if (selectedHotel) {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/${selectedHotel._id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(reviewData)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        await fetchReviews(selectedHotel._id);
      } catch (error) {
        console.error('Error submitting review:', error);
      }
    }
  };

  return (
    <section className="review-section">
      <h2>What People Are Saying About Our Hotels</h2>

      {/* Dropdown for selecting a hotel */}
      <div className="hotel-selector">
        <label htmlFor="hotel-select">Select Hotel:</label>
        <select id="hotel-select" onChange={handleHotelChange} value={selectedHotel ? selectedHotel._id : ''}>
          <option value="">Select a hotel</option>
          {hotels.map(hotel => (
            <option key={hotel._id} value={hotel._id}>
              {hotel.name}
            </option>
          ))}
        </select>
      </div>

      {/* Display selected hotel and reviews */}
      {selectedHotel && (
        <>
          <button onClick={() => setShowReviews(!showReviews)} className="toggle-reviews-button">
            {showReviews ? 'Hide Reviews' : 'Show Reviews'}
          </button>

          {showReviews && (
            <div className="review-list">
              {selectedHotel.reviews && selectedHotel.reviews.map(review => (
                <div key={review._id} className="review-item">
                  <img src={review.photo} alt={`${review.email}'s photo`} className="review-photo" />
                  <div className="review-content">
                    <StarRating rating={review.rating} />
                    <p className="review-text">"{review.text}"</p>
                    <p className="review-author">- {review.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Review submission form */}
          <ReviewForm onSubmit={handleReviewSubmit} />
        </>
      )}
    </section>
  );
};

export default ReviewSection;
