import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm.jsx';
import HotelList from './HotelList.jsx';
import { filterByProximity, calculateAveragePrice, filterByCoastalLocation } from '../../util/filterUtils.js';
import NewYorkCar from '../../../images/CarouselImg/NewYorkCar.jpg'; // Update the image path as necessary
import BackgroundCardContainer from '../TripSection/BackgroundCardContainer.jsx';
import './TripDescription.css'; // Ensure styles apply correctly


const TripDestinationNy = () => {

  const location = useLocation();
  const { city } = location.state || {};

  const [hotels, setHotels] = useState([]);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    if (city && city.hotels) {

      const userLocation = { latitude: 40.7128, longitude: -74.0060 }; // New York City coordinates


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

    New York City, often referred to as NYC, is a bustling metropolis known for its iconic landmarks and vibrant culture. 
    Located in the northeastern United States, NYC is famous for the Statue of Liberty, Times Square, Central Park, and 
    the Empire State Building. The city offers a diverse cultural experience with its numerous museums, theaters, and 
    restaurants. From Broadway shows to world-class shopping and dining, New York City provides endless opportunities for 
    exploration and entertainment. The city’s neighborhoods, such as Manhattan, Brooklyn, and Queens, each offer unique 
    experiences and attractions. NYC's skyline, historical landmarks, and dynamic energy make it a must-visit destination.

  `;

  return (
    <div className="trip-description">
      <div className="background-card-container">
        <BackgroundCardContainer

          imageSrc={NewYorkCar} // Use the correct image for New York City


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

    </div>
  );
};


export default TripDestinationNy;

