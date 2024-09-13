import React, { useEffect } from 'react';

const SaveBooking = ({ reservationInfo, onSaveSuccess, onSaveError }) => {
  useEffect(() => {
    const saveBooking = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`, 
          },
          body: JSON.stringify(reservationInfo),
        });

        if (!response.ok) {
          throw new Error('Failed to save booking');
        }

        const data = await response.json();
        onSaveSuccess(data);
      } catch (error) {
        onSaveError(error.message);
      }
    };

    saveBooking();
  }, [reservationInfo, onSaveSuccess, onSaveError]);

  return (
    <div>
      <p>Saving booking information...</p>
    </div>
  );
};

export default SaveBooking;