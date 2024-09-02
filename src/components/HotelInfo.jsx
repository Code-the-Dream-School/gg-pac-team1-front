import React from 'react';

const HotelInfo = ({ hotel }) => {
  if (!hotel || Object.keys(hotel).length === 0) {
    return <p>Loading hotel information...</p>; // Display while data is loading
  }

  return (
    <div className="hotel-info">
      <h2 className="hotel-name">{hotel.name || 'Hotel Name'}</h2>
      <p className="hotel-address">{hotel.address || 'Address not available'}</p>
      <p className="hotel-category">{hotel.category || 'Category not available'}</p>
      <p className="hotel-price">Price per night: ${hotel.room_cost_per_night}</p>
      <p className="hotel-description">{hotel.description}</p>
      <p className="hotel-check-in-out">
        Check-in: {hotel.check_in_time} | Check-out: {hotel.check_out_time}
      </p>
    </div>
  );
};

export default HotelInfo;
