import React, { useState } from 'react';
import './StarRating.css';

function StarRating({ rating, onRatingChange }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => onRatingChange(ratingValue)}
            />
            <i
              className={`fas fa-star ${
                ratingValue <= (hover || rating) ? 'star-filled' : ''
              }`}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            ></i>
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
