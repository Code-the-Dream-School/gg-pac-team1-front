import React from 'react';
import PropTypes from 'prop-types';

const ReservationSummary = ({ checkInDate, checkOutDate, totalNights, roomCostPerNight, adults, children, className }) => {
  const validTotalNights = Number(totalNights) || 0;
  const validRoomCostPerNight = Number(roomCostPerNight) || 0;
  const calculatedTotalRoomCost = validTotalNights * validRoomCostPerNight;

  const finalTotalCost = calculatedTotalRoomCost;

  return (
    <div className={`${className}`}>
      <p className="stay-dates-checkin"><strong>Check-in:</strong> {checkInDate}</p>
      <p className="stay-dates-checkout"><strong>Check-out:</strong> {checkOutDate}</p>  
      <p className="total-nights"><strong>Total Nights:</strong> <span>{validTotalNights}</span></p>
      
      <p className="cost-details">Room Cost: <span>{validTotalNights} nights * ${validRoomCostPerNight} per night = ${calculatedTotalRoomCost.toFixed(2)}</span></p>
      <p className="cost-details">Adults: <span>{adults}</span></p> 
      <p className="cost-details">Children: <span>{children}</span></p>

      <p className="summary-line">Total Cost: <span>${finalTotalCost.toFixed(2)}</span></p>
    </div>
  );
};

ReservationSummary.propTypes = {
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string.isRequired,
  totalNights: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  roomCostPerNight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  adults: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

ReservationSummary.defaultProps = {
  className: '',
};

export default ReservationSummary;