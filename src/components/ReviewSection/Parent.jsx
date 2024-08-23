import React, { useState } from 'react';
import ReviewSection from './ReviewSection';

const ParentComponent = () => {
  const [selectedHotel, setSelectedHotel] = useState('Hotel Sunshine'); 

  return (
    <div>
      <ReviewSection selectedHotel={selectedHotel} />
    </div>
  );
};

export default ParentComponent;
