import React from 'react';

function PoliciesAndRating({ hotel }) {
  return (
    <>
      <h3 className="hotel-policies-title">Hotel Policies and Rating</h3>
      <ul>
        <li className="hotel-languages">Languages spoken: {hotel.languages_spoken.join(', ')}</li>
        <li className="hotel-cancellation">Cancellation policy: {hotel.cancellation_policy}</li>
        <li className="hotel-rating">Rating: {hotel.rating}</li>
      </ul>
    </>
  );
}

export default PoliciesAndRating;