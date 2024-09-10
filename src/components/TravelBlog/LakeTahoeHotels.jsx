// src/components/HotelPages/LakeTahoeHotels.js
import React from 'react';
import './HotelCardStyles.css'; // Updated CSS file import

const LakeTahoeHotels = () => {
  const hotels = [
    {
      name: "Edgewood Tahoe",
      description: "Luxury lakeside resort with a private golf course, elegant rooms, and a full-service spa.",
      image: "https://example.com/edgewood-tahoe.jpg",
      price: "$499 per night"
    },
    {
      name: "Lake Tahoe Resort Hotel",
      description: "Located in South Lake Tahoe, this hotel offers spacious suites, a convenient location, and a great base for exploring the area.",
      image: "https://example.com/lake-tahoe-resort.jpg",
      price: "$299 per night"
    },
    {
      name: "Squaw Valley Lodge",
      description: "Situated in Olympic Valley, this lodge offers ski-in/ski-out access, cozy accommodations, and beautiful mountain views.",
      image: "https://example.com/squaw-valley-lodge.jpg",
      price: "$399 per night"
    },
    {
      name: "The Ritz-Carlton, Lake Tahoe",
      description: "Luxury resort with ski-in/ski-out access, upscale accommodations, and a world-class spa.",
      image: "https://example.com/ritz-carlton-lake-tahoe.jpg",
      price: "$799 per night"
    },
    {
      name: "Resort at Squaw Creek",
      description: "Spacious resort with a variety of outdoor activities, including skiing, hiking, and a golf course.",
      image: "https://example.com/resort-at-squaw-creek.jpg",
      price: "$349 per night"
    }
  ];

  return (
    <div className="hotel-page-container">
      <h1>Top Hotels in Lake Tahoe</h1>
      <p>Explore the best hotels around Lake Tahoe, offering stunning views and outdoor adventures.</p>
      <div className="hotel-card-list">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <div className="hotel-card-content">
              <div className="hotel-card-text">
                <h2>{hotel.name}</h2>
                <hr className="divider-line" />
                <p>{hotel.description}</p>
                <div className="hotel-card-footer">
                  <span className="hotel-price">{hotel.price}</span>
                </div>
              </div>
              <div className="hotel-card-image">
                <img src={hotel.image} alt={hotel.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LakeTahoeHotels;
