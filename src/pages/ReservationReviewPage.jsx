import React from 'react';
import { useLocation } from 'react-router-dom';

const ReservationReviewPage = () => {
  // Obtener los parámetros de la URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlParams = {};
  queryParams.forEach((value, key) => {
    urlParams[key] = value;
  });

  return (
    <div className="reservation-review-page">
      <h1 className="title">Review Your Reservation</h1>
      <div className="url-params-data">
        <h2>URL Parameters</h2>
        {Object.keys(urlParams).length > 0 ? (
          <ul>
            {Object.entries(urlParams).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No URL parameters found</p>
        )}
      </div>
    </div>
  );
};

export default ReservationReviewPage;