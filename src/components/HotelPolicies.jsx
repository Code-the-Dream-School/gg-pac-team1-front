import React from 'react';

function HotelPolicies({ hotel }) {
  return (
    <>
      <h3 className="hotel-policies-title">Hotel Policies</h3>
      <ul>
        <li className="hotel-languages">Languages spoken: {hotel.languages_spoken.join(', ')}</li>
        <li className="hotel-cancellation">Cancellation policy: {hotel.cancellation_policy}</li>
      </ul>
    </>
  );
}

export default HotelPolicies;
