import React from 'react';
import HotelInfo from './HotelInfo';
import CostDetails from './CostDetails';

const ReservationSummary = ({ hotelInfo, totalNights, roomCostPerNight, totalRoomCost, selectedExtras, totalExtrasCost, finalTotalCost }) => (
  <div className="reservation-summary">
    <HotelInfo hotelInfo={hotelInfo} />
    <p className="stay-dates"><strong>Check-in:</strong> {localStorage.getItem('checkInDate')} - <strong>Check-out:</strong> {localStorage.getItem('checkOutDate')}</p>
    <p className="total-nights"><strong>Total Nights:</strong> <span>{totalNights}</span></p>
    <CostDetails
      totalNights={totalNights}
      roomCostPerNight={roomCostPerNight}
      totalRoomCost={totalRoomCost}
      selectedExtras={selectedExtras}
      totalExtrasCost={totalExtrasCost}
    />
    <p className="summary-line">Total Cost: <span>${finalTotalCost}</span></p>
  </div>
);

export default ReservationSummary;
