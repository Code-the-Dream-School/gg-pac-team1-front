import React from 'react';

const HotelList = ({ hotels = [], averagePrice = 0 }) => {
  return (
    <div className="hotel-info">
      <h3>Nearby Coastal Hotels</h3>
      <p>Average Price: ${averagePrice}</p>
      {hotels.length > 0 ? (
        <ul>
          {hotels.map((hotel, index) => (
            <li key={index}>{hotel.name} - ${hotel.price}</li>
          ))}
        </ul>
      ) : (
        <p>No coastal hotels found within the specified radius.</p>
      )}
    </div>
  );
};

export default HotelList;
