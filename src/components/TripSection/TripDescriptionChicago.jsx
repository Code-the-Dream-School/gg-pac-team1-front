import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm.jsx';
import HotelList from './HotelList.jsx';
import { filterByProximity, calculateAveragePrice, filterByCoastalLocation } from '../../util/filterUtils.js';
import ChicagoCar from '../../../images/CarouselImg/ChicagoCar.jpg'; 
import BackgroundCardContainer from '../TripSection/BackgroundCardContainer.jsx';
import './TripDescription.css'; 

const TripDescriptionChicago = () => {
  const location = useLocation();
  const { city } = location.state || {};

  const [hotels, setHotels] = useState([]);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    if (city && city.hotels) {
      const userLocation = { latitude: 41.8781, longitude: -87.6298 }; 

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
    Chicago, known as the Windy City, is the third-largest city in the United States and is famous for its 
    stunning architecture, deep-dish pizza, and vibrant arts scene. Located on the shores of Lake Michigan, 
    Chicago offers a rich cultural experience with world-class museums like the Art Institute of Chicago and 
    attractions such as Millennium Park and Navy Pier. The city's diverse neighborhoods each have their own 
    unique character, from the historic architecture of the Loop to the trendy, eclectic vibe of Wicker Park. 
    Visitors can enjoy a stroll along the Chicago Riverwalk, explore the bustling Magnificent Mile for shopping, 
    or take in a show at one of the city's renowned theaters. With a mix of modern skyscrapers and historic buildings, 
    Chicago is a city that blends the old with the new, offering something for everyone.
  `;

  return (
    <div className="trip-description">
      <BackgroundCardContainer
        imageSrc={ChicagoCar}
        title={city.name}
        description={city.description}
        cityDescription={cityDescription}
      />
      <div className="form-section">
        <SearchForm />
      </div>
    
    </div>
  );
};

export default TripDescriptionChicago;
