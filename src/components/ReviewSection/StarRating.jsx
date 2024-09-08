// src/components/StarRating.jsx

import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ rating, onChange }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;
        return (
          <span
            key={starRating}
            className={`star ${starRating <= (hover || rating) ? 'filled' : ''}`}
            onClick={() => onChange(starRating)}
            onMouseEnter={() => setHover(starRating)}
            onMouseLeave={() => setHover(rating)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
