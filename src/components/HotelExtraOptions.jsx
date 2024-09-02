import React, { useState, useEffect } from 'react';

const HotelExtraOptions = ({ extras }) => {
  const [selectedExtras, setSelectedExtras] = useState([]);

  // Save selected extras to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('selectedExtras', JSON.stringify(selectedExtras));
  }, [selectedExtras]);

  // Handle change in checkbox selection for extras
  const handleExtraChange = (e, extra) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      // Add extra ID to the selectedExtras array
      setSelectedExtras([...selectedExtras, extra.id]);
    } else {
      // Remove extra ID from the selectedExtras array
      setSelectedExtras(selectedExtras.filter(id => id !== extra.id));
    }
  };

  return (
    <div>
      <h3>Add Extras</h3>
      <ul>
        {extras.map(extra => (
          <li key={extra.id}>
            <input
              type="checkbox"
              id={`extra-${extra.id}`}
              checked={selectedExtras.includes(extra.id)} // Check if extra is selected
              onChange={(e) => handleExtraChange(e, extra)} // Handle change in selection
            />
            <label htmlFor={`extra-${extra.id}`}>{extra.name} (+${extra.price})</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelExtraOptions;

