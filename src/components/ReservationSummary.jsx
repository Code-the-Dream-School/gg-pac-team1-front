import React from 'react';

const ReservationSummary = ({ checkInDate, checkOutDate, totalNights, roomCostPerNight, totalRoomCost, finalTotalCost, adults, children }) => (
  <div className="reservation-summary">
    <p className="stay-dates"><strong>Check-in:</strong> {checkInDate} - <strong>Check-out:</strong> {checkOutDate}</p>
    <p className="total-nights"><strong>Total Nights:</strong> <span>{totalNights}</span></p>
    
    <p className="cost-details">Room Cost: <span>{totalNights} nights * ${roomCostPerNight} per night = ${totalRoomCost}</span></p>
    <p className="cost-details">Adults: <span>{adults}</span></p> {/* Mostrar el número de adultos debajo del costo de la habitación */}
    <p className="cost-details">Children: <span>{children}</span></p> {/* Mostrar el número de niños debajo del costo de la habitación */}

    <p className="summary-line">Total Cost: <span>${finalTotalCost}</span></p>
  </div>
);

export default ReservationSummary;