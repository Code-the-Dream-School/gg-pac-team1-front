import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm.jsx';
import HotelList from './HotelList.jsx';
import { filterByProximity, calculateAveragePrice, filterByCoastalLocation } from '../../util/filterUtils.js';
import NewYorkCar from '../../../images/CarouselImg/NewYorkCar.jpg'; 
import BackgroundCardContainer from '../TripSection/BackgroundCardContainer.jsx';
import './Tripdescription.css'; // Import the updated CSS

const TripDescriptionNY = () => {
  const location = useLocation();
  const { city } = location.state || {};

  const [hotels, setHotels] = useState([]);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    if (city && city.hotels) {
      const userLocation = { latitude: 40.7128, longitude: -74.0060 }; 

      const nearbyHotels = filterByProximity(city.hotels, userLocation, 500);
      const avgPrice = calculateAveragePrice(nearbyHotels);
      const coastalHotels = filterByCoastalLocation(nearbyHotels);

      setHotels(coastalHotels);
      setAveragePrice(avgPrice);
    }
  }, [city]);

  if (!city) {
    return <div>No city data available</div>;
  }

  const cityDescription = `
    New York City, often simply called New York, is the most populous city in the United States, 
    known for its towering skyscrapers, bustling streets, and diverse neighborhoods. 
    The city's five boroughs—Manhattan, Brooklyn, Queens, The Bronx, and Staten Island—each offer 
    a unique experience. Manhattan is home to iconic landmarks such as the Statue of Liberty, Times Square, 
    and Central Park. The city is a global hub for finance, arts, and culture, boasting world-renowned 
    museums like the Metropolitan Museum of Art and the Museum of Modern Art. Broadway is the epicenter of 
    American theater, offering an array of spectacular shows. With a culinary scene that spans every 
    imaginable cuisine, New York is a food lover’s paradise. The city's vibrant nightlife, historic 
    neighborhoods, and endless shopping opportunities make it a destination that truly has something 
    for everyone. Whether you're exploring the architectural marvels of Midtown, enjoying a stroll 
    through the high-line parks, or visiting the trendy neighborhoods of Brooklyn, New York City 
    promises an unforgettable experience.
  `;

  return (
    <div className="trip-description">
      <div className="background-card-container">
        <BackgroundCardContainer
          imageSrc={NewYorkCar}
          title={city.name}
          description={city.description}
        />
        <div className="city-description">
          {cityDescription}
        </div>
      </div>
      <div className="form-section">
        <SearchForm />
      </div>
      <HotelList hotels={hotels} averagePrice={averagePrice} />
    </div>
  );
};

export default TripDescriptionNY;
