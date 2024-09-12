import React, { useState, useEffect } from 'react';
import SaveReservation from './SaveReservation';

const TestSaveReservation = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Almacenar el objeto user en el localStorage
    const user = {
      id: '66d7519b834dd83556431469',
      name: 'Leonard David Caceres',
      email: 'ledarca@example.com'
    };
    localStorage.setItem('user', JSON.stringify(user));
  }, []);

  const reservationDetails = {
    checkInDate: '2025-05-01',
    checkOutDate: '2025-05-05',
    check_in_time: '3:00 PM',
    check_out_time: '11:00 AM',
    adults: 2,
    children: 1,
    hotelId: '66dee4a254b83e0ba1de5d99',
    roomId: '66dee51f54b83e0ba1de5db3',
    price: 500,
    guestName: 'por defecto',
    children_ages: [5],
  };

  const userEmail = 'ledarca@example.com';

  const handleSaveSuccess = (msg) => {
    setMessage(msg);
  };

  const handleSaveError = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Test Save Reservation</h1>
      <SaveReservation 
        reservationDetails={reservationDetails} 
        userEmail={userEmail} 
        onSaveSuccess={handleSaveSuccess} 
        onSaveError={handleSaveError} 
      />
      {message && <div>{message}</div>}
    </div>
  );
};

export default TestSaveReservation;