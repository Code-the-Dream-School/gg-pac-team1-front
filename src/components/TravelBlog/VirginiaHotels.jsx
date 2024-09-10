import React from 'react';
import HotelCard from './HotelCard';
import jefferson from '../../../images/HotelsCards/Virginia/jefferson.jpg';
import Ritz_Carlton from '../../../images/HotelsCards/Virginia/Ritz_Carlton.jpg';
import omniResort from '../../../images/HotelsCards/Virginia/omniResort.jpg';
import Hilton from '../../../images/HotelsCards/Virginia/Hilton.jpg';
import Monaco from '../../../images/HotelsCards/Virginia/Monaco.jpg';
import './HotelCardStyles.css'; 

const VirginiaHotels = () => {
  const hotels = [
    {
      name: "The Jefferson Hotel",
      description: "Located in Richmond, this historic hotel offers luxurious accommodations and fine dining. Known for its elegant decor and top-notch service.",
      image: jefferson,
      price: "$400 per night",
      websiteUrl: "https://www.thejeffersonhotel.com" 
    },
    {
      name: "Omni Homestead Resort",
      description: "Situated in Hot Springs, this resort features a full-service spa, golf course, and stunning mountain views. Perfect for a relaxing getaway.",
      image: omniResort,
      price: "$350 per night",
      websiteUrl: "https://www.omnihotels.com/hotels/homestead" // Real URL
    },
    {
      name: "The Ritz-Carlton, Tysons Corner",
      description: "This luxury hotel offers sophisticated accommodations and world-class amenities in Tysons Corner. Enjoy their renowned spa and fine dining options.",
      image:  Ritz_Carlton,
      price: "$450 per night",
      websiteUrl: "https://www.ritzcarlton.com/en/hotels/virginia/tysons-corner" // Real URL
    },
    {
      name: "Hilton Norfolk The Main",
      description: "Located in downtown Norfolk, this modern hotel features stylish rooms and is close to the waterfront and local attractions.",
      image: Hilton ,
      price: "$280 per night",
      websiteUrl: "https://www.hilton.com/en/hotels/orfthhf-hilton-norfolk-the-main" // Real URL
    },
    {
      name: "Kimpton Hotel Monaco Alexandria",
      description: "Situated in Alexandria, this boutique hotel combines historic charm with modern amenities. Enjoy its central location and unique style.",
      image: Monaco,
      price: "$320 per night",
      websiteUrl: "https://www.ihg.com/kimptonhotels/hotels/us/en/alexandria/alxkz/hoteldetail" // Real URL
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
            websiteUrl={hotel.websiteUrl} // Pass the websiteUrl prop
          />
        ))}
      </div>
    </div>
  );
};

export default VirginiaHotels;
