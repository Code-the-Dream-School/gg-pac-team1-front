import React from 'react';

const AdultsInput = ({ adults, handleAdultsChange }) => (
  <div>
    <label>Adults:</label>
    <input 
      type="number" 
      value={adults} 
      onChange={handleAdultsChange} 
      min="1" 
    />
  </div>
);

export default AdultsInput;


