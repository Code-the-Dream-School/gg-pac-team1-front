import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const DateInput = ({ checkInDate, checkOutDate, handleCheckInChange, handleCheckOutChange, showCheckOut, className }) => (
  <div className={`form-group ${className}`}>
    <label className="icon-label">
      <FontAwesomeIcon icon={faCalendarAlt} />
    </label>
    <div className="date-group">
      <div className="date-input-group">
        <label htmlFor="checkInDate">Check-in:</label>
        <input 
          id="checkInDate"
          type="date" 
          value={checkInDate}
          onChange={handleCheckInChange} 
          required 
        />
      </div>
      {showCheckOut && (
        <div className="date-input-group">
          <label htmlFor="checkOutDate">Check-out:</label>
          <input 
            id="checkOutDate"
            type="date" 
            value={checkOutDate}
            onChange={handleCheckOutChange} 
            required 
          />
        </div>
      )}
    </div>
  </div>
);

DateInput.propTypes = {
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string,
  handleCheckInChange: PropTypes.func.isRequired,
  handleCheckOutChange: PropTypes.func,
  showCheckOut: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default DateInput;