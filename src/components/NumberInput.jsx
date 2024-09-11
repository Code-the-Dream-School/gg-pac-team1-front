// NumberInput.jsx
import React from 'react';
import ErrorMessage from './ErrorMessage';

const NumberInput = ({ label, name, value, onChange, min, icon: Icon }) => (
  <div className="input-group vertical">
    <label htmlFor={name}>
      {Icon && <Icon />} 
      <input
        id={name}
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        min={min}
      />
    </label>
  </div>
);

export default NumberInput;