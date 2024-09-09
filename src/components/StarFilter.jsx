import React from "react";
import PropTypes from "prop-types";

function StarFilter({ reviews, onFilterChange }) {
  const handleChange = (e) => {
    onFilterChange('reviews', Number(e.target.value));
  };

  return (
    <div className="filter-section">
      <label>Rating:</label>
      <select 
        name="reviews" 
        value={reviews} 
        onChange={handleChange}
        className="filter-select"
      >
        <option value="0">All</option>
        <option value="4">4 stars and up</option>
        <option value="3">3 stars and up</option>
        <option value="2">2 stars and up</option>
      </select>
    </div>
  );
}

StarFilter.propTypes = {
  reviews: PropTypes.number.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default StarFilter;
