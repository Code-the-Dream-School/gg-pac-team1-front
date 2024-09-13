import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './SearchForm.css'; // Asegúrate de importar el archivo CSS

const AdultsInput = ({ value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor="adults" className="icon-label">
        <FontAwesomeIcon icon={faUser}  className="icon"/>
      </label>
      <input
        id="adults"
        type="number"
        value={value}
        onChange={onChange}
        min="1"
        required
        className={`form-control ${error ? 'is-invalid' : ''}`}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

AdultsInput.propTypes = {
  value: PropTypes.number.isRequired, 
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default AdultsInput;