import React from 'react';

const HotelInfo = ({ hotel,  className  }) => {
  if (!hotel || Object.keys(hotel).length === 0) {
    return <p>Loading hotel information...</p>; // Display while data is loading
  }

  return (
    <div className="hotel-info">
      <p className="hotel-address"><strong>Address:</strong> {hotel.street}, {hotel.city}, {hotel.state}, {hotel.zipCode}</p>
      <p className="hotel-brand"><strong>Brand:</strong> {hotel.brand || 'Brand not available'}</p>
      <p className="hotel-chain"><strong>Chain:</strong> {hotel.chain || 'Chain not available'}</p>
      <p className="hotel-stars"><strong>Stars:</strong> {hotel.stars || 'Stars not available'}</p>
      
      <h3 className={className}>Services and Facilities</h3>
      <p className="hotel-wifi"><strong>WiFi:</strong> {hotel.wifi ? 'Yes' : 'No'}</p>
      <p className="hotel-ocean-view"><strong>Ocean View:</strong> {hotel.oceanView ? 'Yes' : 'No'}</p>
      <p className="hotel-pool"><strong>Pool:</strong> {hotel.pool ? 'Yes' : 'No'}</p>
      <p className="hotel-gym"><strong>Gym:</strong> {hotel.gym ? 'Yes' : 'No'}</p>
      <p className="hotel-spa"><strong>Spa:</strong> {hotel.spa ? 'Yes' : 'No'}</p>
      <p className="hotel-restaurant"><strong>Restaurant:</strong> {hotel.restaurant ? 'Yes' : 'No'}</p>
      <p className="hotel-parking-availability"><strong>Parking Availability:</strong> {hotel.parking.availability ? 'Yes' : 'No'}</p>
      <p className="hotel-parking-cost"><strong>Parking Cost per Day:</strong> ${hotel.parking.cost_per_day}</p>
    </div>
  );
};

export default HotelInfo;