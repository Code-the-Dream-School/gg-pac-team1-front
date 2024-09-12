import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = ({ label, name, value, onChange, min, icon: Icon, className }) => (
  <div className={`input-group vertical ${className}`}>
    <label htmlFor={name}>
      {Icon && <Icon className="fa-icon" />}
      {label}
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

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.elementType, 
  className: PropTypes.string,
};

export default NumberInput;