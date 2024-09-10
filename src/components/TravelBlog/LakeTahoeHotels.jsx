import React from 'react';
import HotelCard from './HotelCard';
import './HotelCardStyles.css'; 
import carlton from '../../../images/HotelsCards/Tahoe/carlton.jpg';
import Edge from '../../../images/HotelsCards/Tahoe/Edge.jpg';
import Hotel from '../../../images/HotelsCards/Tahoe/Hotel.jpg';
import Autumn from '../../../images/HotelsCards/Tahoe/Autumn.jpg';
import Spring from '../../../images/HotelsCards/Tahoe/Spring.jpg';

const LakeTahoeHotels = () => {
  const hotels = [
    {
      name: "Edgewood Tahoe",
      description: "Luxury lakeside resort with a private golf course, elegant rooms, and a full-service spa.",
      image: Edge,
      price: "$499 per night",
      websiteUrl: "https://www.edgewoodtahoe.com"
    },
    {
      name: "Lake Tahoe Resort Hotel",
      description: "Located in South Lake Tahoe, this hotel offers spacious suites, a convenient location, and a great base for exploring the area.",
      image: Autumn,
      price: "$299 per night",
      websiteUrl: "https://www.laketahoeresorthotel.com" // Added website URL
    },
    {
      name: "Squaw Valley Lodge",
      description: "Situated in Olympic Valley, this lodge offers ski-in/ski-out access, cozy accommodations, and beautiful mountain views.",
      image: Spring,
      price: "$399 per night",
      websiteUrl: "https://www.squawvalleylodge.com" // Added website URL
    },
    {
      name: "The Ritz-Carlton, Lake Tahoe",
      description: "Luxury resort with ski-in/ski-out access, upscale accommodations, and a world-class spa.",
      image: carlton,
      price: "$799 per night",
      websiteUrl: "https://www.ritzcarlton.com/en/hotels/california/lake-tahoe" // Added website URL
    },
    {
      name: "Resort at Squaw Creek",
      description: "Spacious resort with a variety of outdoor activities, including skiing, hiking, and a golf course.",
      image:Hotel,
      price: "$349 per night",
      websiteUrl: "https://www.destinationhotels.com/resort-at-squaw-creek" // Added website URL
    }
  ];

  return (
    <div className="hotel-page-container">
      <h1>Top Hotels in Lake Tahoe</h1>
      <p>Explore the best hotels around Lake Tahoe, offering stunning views and outdoor adventures.</p>
      <div className="hotel-card-list">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            name={hotel.name}
            description={hotel.description}
            image={hotel.image}
            price={hotel.price}
            websiteUrl={hotel.websiteUrl} // Pass the website URL
          />
        ))}
      </div>
    </div>
  );
};

export default LakeTahoeHotels;
