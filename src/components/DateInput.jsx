// DateInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const DateInput = ({ checkInDate, checkOutDate, handleCheckInChange, handleCheckOutChange, showCheckOut }) => (
  <div className="form-group">
    <label>
      <FontAwesomeIcon icon={faCalendarAlt} />
    </label>
    <div className="date-group">
      <div>
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
        <div>
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
};

export default DateInput;
