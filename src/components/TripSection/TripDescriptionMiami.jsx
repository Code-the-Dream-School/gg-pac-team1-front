import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm.jsx';
import HotelList from './HotelList.jsx';
import { filterByProximity, calculateAveragePrice, filterByCoastalLocation } from '../../util/filterUtils.js';
import MiamiCar from '../../../images/CarouselImg/Miamicar.jpg'; 
import BackgroundCardContainer from '../TripSection/BackgroundCardContainer.jsx';
import './Tripdescription.css'; 

const TripDescriptionMiami = () => {
  const location = useLocation();
  const { city } = location.state || {};

  const [hotels, setHotels] = useState([]);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    if (city && city.hotels) {
      const userLocation = { latitude: 25.7617, longitude: -80.1918 }; // Miami coordinates

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
    Miami, a vibrant city located on the southeastern coast of Florida, is renowned for its stunning 
    beaches, lively nightlife, and rich cultural diversity. The city's Art Deco Historic District in 
    South Beach is famous for its colorful buildings and bustling oceanfront. Miami's vibrant neighborhoods, 
    such as Little Havana and Wynwood, offer a unique blend of cultures, arts, and cuisine. The city is 
    also home to beautiful parks, including the expansive Biscayne National Park and the lush Fairchild 
    Tropical Botanic Garden. With its warm climate, Miami is a popular destination for sun-seekers and 
    those looking to enjoy a dynamic urban experience. Whether you're lounging on the sandy shores, exploring 
    the city's eclectic art scene, or savoring its diverse culinary offerings, Miami provides a memorable 
    getaway for visitors.
  `;

  return (
    <div className="trip-description">
      <BackgroundCardContainer
        imageSrc={MiamiCar}
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

export default TripDescriptionMiami;
