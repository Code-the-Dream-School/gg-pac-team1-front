import React from 'react';

const ReservationSummary = ({ totalNights, roomCostPerNight, totalRoomCost, selectedExtras, totalExtrasCost, finalTotalCost }) => (
  <div className="reservation-summary">
    <p className="stay-dates"><strong>Check-in:</strong> {localStorage.getItem('checkInDate')} - <strong>Check-out:</strong> {localStorage.getItem('checkOutDate')}</p>
    <p className="total-nights"><strong>Total Nights:</strong> <span>{totalNights}</span></p>
    
    <p className="cost-details">Room Cost: <span>{totalNights} nights * ${roomCostPerNight} per night = ${totalRoomCost}</span></p>

    <div className="extras-section">
      <h5><strong>Total extras:</strong></h5>
      <ul className="extras-list">
        {selectedExtras.map((extra, index) => (
          <li key={index}>
            {extra.name}: <span>{totalNights} nights * ${extra.price} per day = ${extra.price * totalNights}</span>
          </li>
        ))}
      </ul>
      <p className="cost-details">Total Extras Cost: <span>${totalExtrasCost}</span></p>
    </div>

    <p className="summary-line">Total Cost: <span>${finalTotalCost}</span></p>
  </div>
);

export default ReservationSummary;
