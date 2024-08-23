import React, { useState, useEffect } from 'react';

const FormSearch = ({ initialDestination = '' }) => {
  const [formData, setFormData] = useState({
    destination: initialDestination,
    date: '',
    travelers: '',
    transportation: ''
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      destination: initialDestination,
    }));
  }, [initialDestination]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission, such as navigating to search results
  };

  const isFormValid = () => {
    return (
      formData.destination &&
      formData.date &&
      formData.travelers &&
      formData.transportation
    );
  };

  return (
    <div className="form-container">
      <form className="travel-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="destination">
            <i className="fas fa-map-marker-alt icon"></i>
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Going to"
            aria-label="Destination"
            value={formData.destination}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">
            <i className="fas fa-calendar-alt icon"></i>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            aria-label="Fecha"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="travelers">
            <i className="fas fa-users icon"></i>
          </label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            placeholder="Number of travelers"
            aria-label="Number of travelers"
            min="1"
            value={formData.travelers}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="transport-options">
            <label>
              <input
                type="radio"
                name="transportation"
                value="plane"
                checked={formData.transportation === 'plane'}
                onChange={handleChange}
              />
              <i className="fas fa-plane icon"></i>
            </label>
            <label>
              <input
                type="radio"
                name="transportation"
                value="car"
                checked={formData.transportation === 'car'}
                onChange={handleChange}
              />
              <i className="fas fa-car icon"></i>
            </label>
          </div>
        </div>
        <button type="submit" className="submit-btn" disabled={!isFormValid()}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default FormSearch;
