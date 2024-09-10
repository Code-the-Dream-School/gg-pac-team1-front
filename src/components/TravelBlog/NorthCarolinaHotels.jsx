import React from 'react';
import HotelCard from './HotelCard'; // Import the HotelCard component
import './HotelCardStyles.css';
import Char from '../../../images/HotelsCards/NC/Char.jpg';
import groveInn from '../../../images/HotelsCards/NC/groveInn.jpg';
import omniNC from '../../../images/HotelsCards/NC/omniNC.jpg';
import parkInn from '../../../images/HotelsCards/NC/parkInn.jpg';
import NCar from '../../../images/HotelsCards/NC/NCar.jpg';




const NorthCarolinaHotels = () => {
  const hotels = [
    {
      name: "The Umstead Hotel and Spa",
      description: "Located in Cary, this five-star hotel offers luxury accommodations and a renowned spa with serene gardens.",
      image: NCar,
      price: "$450 per night",
      websiteUrl: "https://www.theumstead.com" // Real URL
    },
    {
      name: "Fearrington House Inn",
      description: "A charming inn in Pittsboro known for its beautiful gardens, elegant rooms, and exceptional dining experience.",
      image:  parkInn,
      price: "$320 per night",
      websiteUrl: "https://www.fearrington.com" // Real URL
    },
    {
      name: "The Grove Park Inn",
      description: "Located in Asheville, this historic resort offers stunning mountain views, a world-class spa, and fine dining.",
      image: groveInn,
      price: "$500 per night",
      websiteUrl: "https://www.omnihotels.com/hotels/asheville-grove-park" // Real URL
    },
    {
      name: "Omni Grove Park Inn",
      description: "Another top choice in Asheville, offering luxurious accommodations, an award-winning spa, and a scenic golf course.",
      image: omniNC,
      price: "$480 per night",
      websiteUrl: "https://www.omnihotels.com/hotels/asheville-grove-park" // Real URL
    },
    {
      name: "The Ritz-Carlton, Charlotte",
      description: "This upscale hotel in Charlotte features elegant rooms, a full-service spa, and gourmet dining options.",
      image: Char,
      price: "$530 per night",
      websiteUrl: "https://www.ritzcarlton.com/en/hotels/charlotte" // Real URL
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
            websiteUrl={hotel.websiteUrl} // Pass the websiteUrl prop
          />
        ))}
      </div>
    </div>
  );
};

export default NorthCarolinaHotels;
