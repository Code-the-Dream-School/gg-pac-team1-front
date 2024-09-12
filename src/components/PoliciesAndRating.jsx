import React from 'react';

function PoliciesAndRating({ hotel, className }) {
  return (
    <>
      <h3 className={className}>Hotel Policies and Rating</h3>
      <p className="hotel-languages">
        <strong>Languages spoken:</strong> {hotel.languages_spoken.join(", ")}
      </p>
      <p className="hotel-cancellation">
        <strong>Cancellation policy:</strong> {hotel.cancellation_policy}
      </p>
      <p className="hotel-rating">
        <strong>Rating:</strong> {hotel.rating}
      </p>
    </>
  );
}

export default PoliciesAndRating;