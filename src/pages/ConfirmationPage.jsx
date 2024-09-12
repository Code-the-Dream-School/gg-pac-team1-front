// pages/ConfirmationPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const reservationDetails = location.state;

  if (!reservationDetails) {
    return <p>No reservation details available.</p>;
  }

  return (
    <div className="confirmation-page">
      <h1 className="title">Reservation Confirmation</h1>
      <p>Reservation Number: {reservationDetails.reservationNumber}</p>
      <p>Hotel: {reservationDetails.hotel.name}</p>
      <p>Check-In Date: {reservationDetails.checkInDate}</p>
      <p>Check-Out Date: {reservationDetails.checkOutDate}</p>
      <p>Adults: {reservationDetails.adults}</p>
      <p>Children: {reservationDetails.children}</p>
      <p>Total Nights: {reservationDetails.totalNights}</p>
      <p>Total Room Cost: ${reservationDetails.totalRoomCost}</p>
      <p>Final Total Cost: ${reservationDetails.finalTotalCost}</p>
    </div>
  );
};

export default ConfirmationPage;