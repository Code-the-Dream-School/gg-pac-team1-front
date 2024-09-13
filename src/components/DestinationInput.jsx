import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const DestinationInput = ({ value, onChange, suggestions, onSuggestionClick, loading }) => (
  <div className="form-group" style={{ position: 'relative' }}>
    <label>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </label>
    <input 
      type="text" 
      value={value}
      onChange={onChange} 
      placeholder="Going to" 
      required 
    />
    {loading && <p>Loading...</p>}
    {suggestions.length > 0 && (
      <ul 
        className="suggestions-list" 
        style={{ 
          position: 'absolute', 
          top: '100%', 
          left: 0, 
          width: '100%', 
          zIndex: 1000, 
          backgroundColor: 'white', 
          listStyleType: 'none', 
          margin: 0, 
          padding: 0 
        }}
      >
        {suggestions.map((suggestion, index) => (
          <li 
            key={index} 
            onClick={() => onSuggestionClick(suggestion)} 
            style={{ 
              padding: '8px', 
              cursor: 'pointer', 
              borderBottom: '1px solid #ddd' 
            }}
          >
            {suggestion.city || 'Unknown city'}, {suggestion.state || 'Unknown state'}
          </li>
        ))}
      </ul>
    )}
  </div>
);

DestinationInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  onSuggestionClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DestinationInput;
