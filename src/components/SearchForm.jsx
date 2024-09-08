import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import DestinationInput from './DestinationInput';
import DateInput from './DateInput';
import AdultsInput from './AdultsInput';
import LoadingIndicator from './LoadingIndicator';
import ErrorMessage from './ErrorMessage'; // Importa el nuevo componente ErrorMessage
import { 
  searchHotelsByCityOrState, 
  validateCheckInDate, 
  validateCheckOutDate, 
  setItemInLocalStorage 
} from '../services/bookingServices';  // API calls and utilities

const SearchForm = ({ destinationPlaceholder, searchButtonLabel }) => {
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [adults, setAdults] = useState(1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const suggestionsRef = useRef(null);

  // Function to handle destination change
  const handleDestinationChange = async (e) => {
    const value = e.target.value.toLowerCase();
    setDestination(value);

    if (value.length > 0) {
      setLoading(true);
      try {
        const response = await searchHotelsByCityOrState(value, "");
        const filteredSuggestions = response.filter(suggestion =>
          (suggestion.city && suggestion.city.toLowerCase().includes(value)) ||
          (suggestion.state && suggestion.state.toLowerCase().includes(value))
        );
        setSuggestions(filteredSuggestions);
      } catch (error) {
        if (error.message === 'User not authenticated. You must log in.') {
          navigate('/login');
        } else {
          console.error('Error in hotel search:', error);
          setErrors(prev => ({ ...prev, form: 'Error searching for hotels. Please try again later.' }));
        }
      }
      setLoading(false);
    } else {
      setSuggestions([]);
    }
  };

  // Function to handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    const fullDestination = `${suggestion.city || 'Unknown city'}, ${suggestion.state || 'Unknown state'}`;
    setDestination(fullDestination);
    setSuggestions([]);
  };

  // Function to handle check-in date change
  const handleCheckInChange = (e) => {
    const date = e.target.value;
    const errorMessage = validateCheckInDate(date);

    if (!errorMessage) {
      setCheckInDate(date);
      setShowCheckOut(true);
      setErrors(prev => ({ ...prev, checkInDate: '' }));
      setItemInLocalStorage('checkInDate', date);  // Save date to localStorage
    } else {
      setErrors(prev => ({ ...prev, checkInDate: errorMessage }));
    }
  };

  // Function to handle check-out date change
  const handleCheckOutChange = (e) => {
    const date = e.target.value;
    const errorMessage = validateCheckOutDate(checkInDate, date);

    if (!errorMessage) {
      setCheckOutDate(date);
      setErrors(prev => ({ ...prev, checkOutDate: '' }));
      setItemInLocalStorage('checkOutDate', date);  // Save date to localStorage
    } else {
      setErrors(prev => ({ ...prev, checkOutDate: errorMessage }));
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (destination && checkInDate && checkOutDate && adults > 0) {
      const [city, state] = destination.split(', ');
      navigate(`/${state}/${city}`, { state: { checkInDate, checkOutDate, adults } });
    } else {
      setErrors({ form: 'Please complete all fields correctly.' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DestinationInput 
        value={destination}
        onChange={handleDestinationChange}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
        loading={loading}
        placeholder={destinationPlaceholder}
      />
      <DateInput 
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        handleCheckInChange={handleCheckInChange}
        handleCheckOutChange={handleCheckOutChange}
        showCheckOut={showCheckOut}
        error={errors.checkInDate || errors.checkOutDate}
      />
      <AdultsInput 
        value={adults}
        onChange={(e) => {
          setAdults(Number(e.target.value));  // Convert to number
          setItemInLocalStorage('adults', Number(e.target.value));  // Save number of adults to localStorage
        }}
        error={errors.adults}
      />
      <button type="submit" className="search-button">{searchButtonLabel}</button>
      <ErrorMessage error={errors.form} />
    </form>
  );
};

SearchForm.propTypes = {
  destinationPlaceholder: PropTypes.string,
  searchButtonLabel: PropTypes.string,
};

SearchForm.defaultProps = {
  destinationPlaceholder: "Going to",
  searchButtonLabel: "Search",
};

export default SearchForm;
