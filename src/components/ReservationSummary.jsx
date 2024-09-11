import React from 'react';

const ReservationSummary = ({ checkInDate, checkOutDate, totalNights, roomCostPerNight, adults, children }) => {
  const validTotalNights = Number(totalNights) || 0;
  const validRoomCostPerNight = Number(roomCostPerNight) || 0;
  const calculatedTotalRoomCost = validTotalNights * validRoomCostPerNight;

  // Suponiendo que el costo final total es igual al costo total de la habitación
  const finalTotalCost = calculatedTotalRoomCost;

  return (
    <div className="reservation-summary">
      <p className="stay-dates"><strong>Check-in:</strong> {checkInDate} - <strong>Check-out:</strong> {checkOutDate}</p>
      <p className="total-nights"><strong>Total Nights:</strong> <span>{validTotalNights}</span></p>
      
      <p className="cost-details">Room Cost: <span>{validTotalNights} nights * ${validRoomCostPerNight} per night = ${calculatedTotalRoomCost.toFixed(2)}</span></p>
      <p className="cost-details">Adults: <span>{adults}</span></p> {/* Mostrar el número de adultos debajo del costo de la habitación */}
      <p className="cost-details">Children: <span>{children}</span></p> {/* Mostrar el número de niños debajo del costo de la habitación */}

      <p className="summary-line">Total Cost: <span>${finalTotalCost.toFixed(2)}</span></p>
    </div>
  );
};

export default ReservationSummary;