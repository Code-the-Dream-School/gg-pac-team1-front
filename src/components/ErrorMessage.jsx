import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  // Inline styles for error message
  const errorMessageStyle = {
    color: 'red',
    fontSize: '14px',
    margin: 0,
  };

  return <p style={errorMessageStyle}>{error}</p>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
