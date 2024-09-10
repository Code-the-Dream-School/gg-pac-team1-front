// src/components/HotelPages/NorthCarolinaHotels.js
import React from 'react';
import HotelCard from './HotelCard'; // Import the HotelCard component
import './HotelCardStyles.css'; // Updated CSS file import

const NorthCarolinaHotels = () => {
  const hotels = [
    {
      name: "The Umstead Hotel and Spa",
      description: "Located in Cary, this five-star hotel offers luxury accommodations and a renowned spa with serene gardens.",
      image: "https://example.com/umstead-hotel.jpg",
      price: "$450 per night"
    },
    {
      name: "Fearrington House Inn",
      description: "A charming inn in Pittsboro known for its beautiful gardens, elegant rooms, and exceptional dining experience.",
      image: "https://example.com/fearrington-house.jpg",
      price: "$320 per night"
    },
    {
      name: "The Grove Park Inn",
      description: "Located in Asheville, this historic resort offers stunning mountain views, a world-class spa, and fine dining.",
      image: "https://example.com/grove-park-inn.jpg",
      price: "$500 per night"
    },
    {
      name: "Omni Grove Park Inn",
      description: "Another top choice in Asheville, offering luxurious accommodations, an award-winning spa, and a scenic golf course.",
      image: "https://example.com/omni-grove-park-inn.jpg",
      price: "$480 per night"
    },
    {
      name: "The Ritz-Carlton, Charlotte",
      description: "This upscale hotel in Charlotte features elegant rooms, a full-service spa, and gourmet dining options.",
      image: "https://example.com/ritz-carlton-charlotte.jpg",
      price: "$530 per night"
    }
  ];

  return (
    <div className="hotel-page-container">
      <h1>Top Hotels in North Carolina</h1>
      <p>Find the best hotels in North Carolina, offering unique experiences and southern hospitality.</p>
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

export default NorthCarolinaHotels;
