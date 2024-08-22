import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function DateInput({ checkInDate, checkOutDate, handleCheckInChange, handleCheckOutChange, showCheckOut }) {
  return (
    <div className="form-group">
      <label>
        <FontAwesomeIcon icon={faCalendarAlt} />
      </label>
      <div className="date-group">
        <input 
          type="date" 
          value={checkInDate}
          onChange={handleCheckInChange} 
          required 
        />
        {showCheckOut && (
          <input 
            type="date" 
            value={checkOutDate}
            onChange={handleCheckOutChange} 
            required 
          />
        )}
      </div>
    </div>
  );
}

export default DateInput;
