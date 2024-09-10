import React from 'react';
import HotelCard from './HotelCard'; 
import './HotelCardStyles.css'; 
import ohio_2  from '../../../images/HotelsCards/Ohio/ohio_2.jpg';
import Ohio  from '../../../images/HotelsCards/Ohio/Ohio.jpg';
import ritz from '../../../images/HotelsCards/Ohio/ritz.jpg';
import Summer  from '../../../images/HotelsCards/Ohio/Summer.jpg';
import Winter from '../../../images/HotelsCards/Ohio/Winter.jpg';

const OhioHotels = () => {
  const hotels = [
    {
      name: "The Ritz-Carlton, Cleveland",
      description: "Luxurious hotel in downtown Cleveland with stunning city views, elegant rooms, and fine dining options.",
      image: ritz,
      price: "$350 per night",
      websiteUrl: "https://www.ritzcarlton.com/en/hotels/cleveland" // Real URL
    },
    {
      name: "Hotel LeVeque",
      description: "Located in Columbus, this Art Deco-style hotel offers a blend of historic charm and modern amenities.",
      image: ohio_2,
      price: "$220 per night",
      websiteUrl: "https://www.hotelleveque.com" // Real URL
    },
    {
      name: "21c Museum Hotel, Cincinnati",
      description: "Unique boutique hotel offering contemporary art exhibits and a rooftop bar in downtown Cincinnati.",
      image: Ohio,
      price: "$280 per night",
      websiteUrl: "https://21cmuseumhotels.com/cincinnati" // Real URL
    },
    {
      name: "The Westin Great Southern Columbus",
      description: "Historic hotel with elegant rooms and a prime location in Columbus, offering a blend of luxury and comfort.",
      image: Summer,
      price: "$190 per night",
      websiteUrl: "https://www.marriott.com/hotels/travel/cmhws-the-westin-great-southern-columbus" // Real URL
    },
    {
      name: "Kimpton Schofield Hotel",
      description: "Stylish boutique hotel in Cleveland with modern amenities and a central location.",
      image: Winter,
      price: "$210 per night",
      websiteUrl: "https://www.ihg.com/kimptonhotels/hotels/us/en/cleveland/clvkk/hoteldetail" // Real URL
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
            websiteUrl={hotel.websiteUrl} // Pass the websiteUrl prop
          />
        ))}
      </div>
    </div>
  );
};

export default OhioHotels;
