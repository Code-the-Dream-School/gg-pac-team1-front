import React from 'react';
import PropTypes from 'prop-types';

const LoadingIndicator = ({ loading }) => {
  if (!loading) return null;
  return <p>Loading...</p>;
};

LoadingIndicator.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default LoadingIndicator;
