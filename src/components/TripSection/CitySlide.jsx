import React from 'react';
import PropTypes from 'prop-types';

const CitySlide = ({ name, image, description, isActive }) => (
  <div className={`carousel-item ${isActive ? 'active' : ''}`}>
    <img src={image} className="d-block w-100" alt={name} />
    <div className="carousel-caption d-none d-md-block">
      <h5>{name}</h5>
      <p>{description}</p>
    </div>
  </div>
);

CitySlide.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default CitySlide;
