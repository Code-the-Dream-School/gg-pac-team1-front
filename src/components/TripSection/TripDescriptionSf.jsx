import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm.jsx';
import HotelList from './HotelList.jsx';
import { filterByProximity, calculateAveragePrice, filterByCoastalLocation } from '../../util/filterUtils.js';
import SanFrCar from '../../../images/CarouselImg/SanFrCar.jpg'; 
import BackgroundCardContainer from '../TripSection/BackgroundCardContainer.jsx';
import './Tripdescription.css'; 

const TripDestinationSf = () => {
  const location = useLocation();
  const { city } = location.state || {};

  const [hotels, setHotels] = useState([]);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    if (city && city.hotels) {
      const userLocation = { latitude: 37.7749, longitude: -122.4194 }; // San Francisco coordinates

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
    San Francisco, known for its stunning bay views and iconic landmarks, is a vibrant city located on the 
    west coast of the United States. The city is famous for the Golden Gate Bridge, Alcatraz Island, and 
    its historic cable cars. San Francisco offers a diverse cultural experience with neighborhoods like 
    Chinatown, the Mission District, and Fisherman's Wharf. Visitors can explore the bustling markets, enjoy 
    fresh seafood, and take in the panoramic views from Twin Peaks. The city’s hilly terrain provides unique 
    vistas and scenic walks, while the Presidio and Golden Gate Park offer green spaces for relaxation and 
    recreation. San Francisco's eclectic architecture, cultural attractions, and rich history make it a 
    must-visit destination.
  `;

  return (
    <div className="trip-description">
      <BackgroundCardContainer
        imageSrc={SanFrCar}
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

export default TripDestinationSf;
