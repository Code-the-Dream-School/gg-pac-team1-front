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
      // Add the extra object (with name and price) to the selectedExtras array
      setSelectedExtras([...selectedExtras, { name: extra.name, price: extra.price }]);
    } else {
      // Remove the extra object from the selectedExtras array
      setSelectedExtras(selectedExtras.filter(item => item.name !== extra.name));
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
              checked={selectedExtras.some(item => item.name === extra.name)} // Check if extra is selected
              onChange={(e) => handleExtraChange(e, extra)} // Handle change in selection
            />
            <label htmlFor={`extra-${extra.id}`}>{extra.name} (+${extra.price})</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelExtraOptions;
