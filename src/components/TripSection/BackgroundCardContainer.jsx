import React from 'react';
import BackgroundCard from './BackgroundCard.jsx';
import CityDescription from './CityDescription.jsx';


const BackgroundCardContainer = ({ imageSrc, title, description, cityDescription }) => {
  return (
    <div className="background-card-container">
      <BackgroundCard
        imageSrc={imageSrc}
        title={title}
        description={description}
      />
      <CityDescription description={cityDescription} />
    </div>
  );
};

export default BackgroundCardContainer;
