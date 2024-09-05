// src/components/HotelPages/VirginiaHotels.js
import React from 'react';
import HotelCard from './HotelCard'; // Import the new HotelCard component
import './HotelCardStyles.css'; // Ensure this CSS file exists and is styled appropriately

const VirginiaHotels = () => {
  const hotels = [
    {
      name: "The Jefferson Hotel",
      description: "Located in Richmond, this historic hotel offers luxurious accommodations and fine dining. Known for its elegant decor and top-notch service.",
      image: "https://example.com/the-jefferson-hotel.jpg",
      price: "$400 per night"
    },
    {
      name: "Omni Homestead Resort",
      description: "Situated in Hot Springs, this resort features a full-service spa, golf course, and stunning mountain views. Perfect for a relaxing getaway.",
      image: "https://example.com/omni-homestead-resort.jpg",
      price: "$350 per night"
    },
    {
      name: "The Ritz-Carlton, Tysons Corner",
      description: "This luxury hotel offers sophisticated accommodations and world-class amenities in Tysons Corner. Enjoy their renowned spa and fine dining options.",
      image: "https://example.com/ritz-carlton-tysons-corner.jpg",
      price: "$450 per night"
    },
    {
      name: "Hilton Norfolk The Main",
      description: "Located in downtown Norfolk, this modern hotel features stylish rooms and is close to the waterfront and local attractions.",
      image: "https://example.com/hilton-norfolk-main.jpg",
      price: "$280 per night"
    },
    {
      name: "Kimpton Hotel Monaco Alexandria",
      description: "Situated in Alexandria, this boutique hotel combines historic charm with modern amenities. Enjoy its central location and unique style.",
      image: "https://example.com/kimpton-hotel-monaco-alexandria.jpg",
      price: "$320 per night"
    }
  ];

  return (
    <div className="hotel-page-container">
      <h1>Top Hotels in Virginia</h1>
      <p>Explore the top hotels in Virginia, offering the best amenities and experiences for your stay.</p>
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

export default VirginiaHotels;
