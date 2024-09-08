// src/components/HotelPages/HotelCard.js
import React from 'react';
import './HotelCardStyles.css'; // Ensure this path is correct

const HotelCard = ({ name, description, image, price }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-card-content">
        <div className="hotel-card-text">
          <h2>{name}</h2>
          <hr className="divider-line" />
          <p>{description}</p>
          <div className="hotel-card-footer">
            <span className="hotel-price">{price}</span>
          </div>
        </div>
        <div className="hotel-card-image">
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default HotelCard;