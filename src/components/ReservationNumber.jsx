import React, { useState, useEffect } from 'react';

const ReservationNumber = ({ reservationNumber }) => {
  const [currentNumber, setCurrentNumber] = useState('');

  useEffect(() => {
    if (reservationNumber && typeof reservationNumber === 'string') {
      setCurrentNumber(reservationNumber);
    }
  }, [reservationNumber]);

  return (
    <p className="reservation-number">
      <strong>Reservation Number:</strong> 
      <span style={{ fontWeight: 'bold', color: '#007bff', padding: '5px 10px' }}>
        {currentNumber || 'N/A'}
      </span>
    </p>
  );
};

export default ReservationNumber;
