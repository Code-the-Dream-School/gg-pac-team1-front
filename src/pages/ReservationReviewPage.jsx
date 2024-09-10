import React from 'react';

const ReservationReviewPage = () => {
  // Obtener todas las claves y valores de localStorage
  const localStorageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    localStorageData[key] = localStorage.getItem(key);
  }

  return (
    <div className="reservation-review-page">
      <h1 className="title">Review Your Reservation</h1>
      <div className="local-storage-data">
        {Object.keys(localStorageData).length > 0 ? (
          <ul>
            {Object.entries(localStorageData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data found in localStorage</p>
        )}
      </div>
    </div>
  );
};

export default ReservationReviewPage;