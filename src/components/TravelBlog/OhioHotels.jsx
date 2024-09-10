// src/components/HotelPages/OhioHotels.js
import React from 'react';
import HotelCard from './HotelCard'; // Import the HotelCard component
import './HotelCardStyles.css'; // Updated CSS file import

const OhioHotels = () => {
  const hotels = [
    {
      name: "The Ritz-Carlton, Cleveland",
      description: "Luxurious hotel in downtown Cleveland with stunning city views, elegant rooms, and fine dining options.",
      image: "https://example.com/ritz-carlton-cleveland.jpg",
      price: "$350 per night"
    },
    {
      name: "Hotel LeVeque",
      description: "Located in Columbus, this Art Deco-style hotel offers a blend of historic charm and modern amenities.",
      image: "https://example.com/hotel-leveque.jpg",
      price: "$220 per night"
    },
    {
      name: "21c Museum Hotel, Cincinnati",
      description: "Unique boutique hotel offering contemporary art exhibits and a rooftop bar in downtown Cincinnati.",
      image: "https://example.com/21c-museum-hotel-cincinnati.jpg",
      price: "$280 per night"
    },
    {
      name: "The Westin Great Southern Columbus",
      description: "Historic hotel with elegant rooms and a prime location in Columbus, offering a blend of luxury and comfort.",
      image: "https://example.com/westin-great-southern-columbus.jpg",
      price: "$190 per night"
    },
    {
      name: "Kimpton Schofield Hotel",
      description: "Stylish boutique hotel in Cleveland with modern amenities and a central location.",
      image: "https://example.com/kimpton-schofield-hotel.jpg",
      price: "$210 per night"
    }
  ];

  return (
    <div className="hotel-page-container">
      <h1>Top Hotels in Ohio</h1>
      <p>Explore the best hotels in Ohio, known for their comfort and convenient locations.</p>
      <div className="hotel-card-list">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            name={hotel.name}
            description={hotel.description}
            image={hotel.image}
            price={hotel.price}
          />
        ))}
      </div>
    </div>
  );
};

export default OhioHotels;
