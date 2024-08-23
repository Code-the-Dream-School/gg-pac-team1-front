import React from 'react';
import { useLocation } from 'react-router-dom';
import WellnessImage from '../../../images/WellnessImage.jpg'; // Ensure path is correct
import BackgroundCard from '../TripSection/BackgroundCard'; // Ensure path is correct

import './TripDescription.css'; // Ensure this file exists

const TripDescription = () => {
  const location = useLocation();
  const { city } = location.state || {};

  if (!city) {
    return <div>No city data available</div>;
  }

  return (
    <div className="trip-description">
      <BackgroundCard
        imageSrc={WellnessImage}
        title={city.name}
        description={city.description}
      />
      <div className="form-section">
        <FormSearch /> {/* Include FormSearch component */}
      </div>
    </div>
  );
};

export default TripDescription;
