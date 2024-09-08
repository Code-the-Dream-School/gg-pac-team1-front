// src/components/TopHotels/TopHotels.js
import React from 'react';
import './TopHotels.css'; // Ensure you create a CSS file for styling

// Example data for top hotels
const hotels = [
  {
    id: 1,
    name: "The Jefferson Hotel",
    description: "A luxury hotel offering historic charm and modern amenities.",
    image: "path/to/jefferson-hotel.jpg",
    link: "https://www.jeffersonhotel.com"
  },
  {
    id: 2,
    name: "The Omni Homestead Resort",
    description: "A grand resort with a long history and beautiful mountain views.",
    image: "path/to/omni-homestead.jpg",
    link: "https://www.omnihotels.com/hotels/homestead-virginia"
  },
  {
    id: 3,
    name: "The Ritz-Carlton, Arlington",
    description: "A sophisticated hotel located in the heart of Arlington.",
    image: "path/to/ritz-carlton-arlington.jpg",
    link: "https://www.ritzcarlton.com/en/hotels/arlington"
  },
  {
    id: 4,
    name: "The Williamsburg Inn",
    description: "An elegant inn with classic Southern charm in Williamsburg.",
    image: "path/to/williamsburg-inn.jpg",
    link: "https://www.williamsburginn.com"
  },
  {
    id: 5,
    name: "The Greenbrier",
    description: "A historic resort offering a range of luxury amenities and activities.",
    image: "path/to/greenbrier.jpg",
    link: "https://www.greenbrier.com"
  }
];

const TopHotels = () => {
  return (
    <div className="top-hotels">
      <h2>Top 5 Hotels in Virginia</h2>
      <div className="hotel-list">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h3 className="hotel-name">{hotel.name}</h3>
              <p className="hotel-description">{hotel.description}</p>
              <a href={hotel.link} target="_blank" rel="noopener noreferrer" className="hotel-link">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHotels;
