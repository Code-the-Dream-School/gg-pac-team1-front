import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm.jsx';
import HotelList from './HotelList.jsx';
import { filterByProximity, calculateAveragePrice, filterByCoastalLocation } from '../../util/filterUtils.js';
import LaCar from '../../../images/CarouselImg/LaCar.jpg'; 
import BackgroundCardContainer from '../TripSection/BackgroundCardContainer.jsx';
import './Tripdescription.css'; 

const TripDescriptionLA = () => {
  const location = useLocation();
  const { city } = location.state || {};

  const [hotels, setHotels] = useState([]);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    if (city && city.hotels) {
      const userLocation = { latitude: 34.0522, longitude: -118.2437 }; 

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
    Los Angeles, often known simply as LA, is the largest city in California and the second most populous 
    city in the United States. It is renowned for its entertainment industry, particularly Hollywood, 
    which is synonymous with movies, television, and music. LA's stunning beaches, such as Venice Beach 
    and Santa Monica Beach, offer sun and sand, while neighborhoods like Beverly Hills and Hollywood 
    are famous for their luxury and glamour. The city is a cultural melting pot, with diverse cuisine, 
    vibrant arts scenes, and numerous museums and galleries. Iconic landmarks include the Hollywood Sign, 
    Griffith Observatory, and the Getty Center. Whether you're exploring the star-studded streets of Hollywood 
    or relaxing by the ocean, Los Angeles provides an exciting and dynamic experience.
  `;

  return (
    <div className="trip-description">
      <BackgroundCardContainer
        imageSrc={LaCar}
        title={city.name}
        description={city.description}
        cityDescription={cityDescription}
      />
      <div className="form-section">
        <SearchForm />
      </div>
      <HotelList hotels={hotels} averagePrice={averagePrice} />
    </div>
  );
};

export default TripDescriptionLA;
