import React from 'react';

const HotelExtraOptions = ({ extras }) => {
  return (
    <div>
      <h3>Add Extras</h3>
      <ul>
        {extras.map(extra => (
          <li key={extra.id}>
            <input type="checkbox" id={`extra-${extra.id}`} />
            <label htmlFor={`extra-${extra.id}`}>{extra.name} (+${extra.price})</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelExtraOptions;
