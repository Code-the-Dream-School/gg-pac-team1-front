import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import tripsData from '../tripsData';

function SearchForm({ destinationPlaceholder = "Going to", searchButtonLabel = "Search" }) {
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [adults, setAdults] = useState(1);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const suggestionsRef = useRef(null);

  // Handle clicks outside the input field to close the suggestion list
  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDestinationChange = (e) => {
    const value = e.target.value.toLowerCase();
    setDestination(value);

    if (value.length > 0) {
      const filteredSuggestions = tripsData
        .flatMap(trip => 
          trip.hotels.map(hotel => ({
            hotelName: hotel.name,
            city: trip.destination.split(', ')[0],
            state: trip.destination.split(', ')[1]
          }))
        )
        .filter(({ hotelName, city, state }) => 
          city.toLowerCase().includes(value) || 
          state.toLowerCase().includes(value) || 
          hotelName.toLowerCase().includes(value)
        );

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const fullDestination = `${suggestion.city}, ${suggestion.state}, ${suggestion.hotelName}`;
    setDestination(fullDestination);
    setSuggestions([]);
  };

  const handleCheckInChange = (e) => {
    const date = e.target.value;
    const today = new Date().toISOString().split('T')[0];

    if (date >= today) {
      setCheckInDate(date);
      setShowCheckOut(true);
      setErrors(prev => ({ ...prev, checkInDate: '' }));

      localStorage.setItem('checkInDate', date); //local storage in

    } else {
      setErrors(prev => ({ ...prev, checkInDate: 'Must be today or later.' }));
    }
  };

  const handleCheckOutChange = (e) => {
    const date = e.target.value;

    if (date > checkInDate) {
      setCheckOutDate(date);
      setErrors(prev => ({ ...prev, checkOutDate: '' }));

       //check-out localStorage
       localStorage.setItem('checkOutDate', date);

    } else {
      setErrors(prev => ({ ...prev, checkOutDate: 'Must be after the check-in date.' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (destination && checkInDate && checkOutDate && adults > 0) {
      const [city, state] = destination.split(', ');
      navigate(`/${state}/${city}`, { state: { checkInDate, checkOutDate, adults } });
    } else {
      setErrors({ form: 'Please fill out all required fields correctly.' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group" style={{ position: 'relative' }}>
        <label>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </label>
        <input 
          type="text" 
          value={destination}
          onChange={handleDestinationChange} 
          placeholder={destinationPlaceholder} 
          required 
        />
        {suggestions.length > 0 && (
          <ul ref={suggestionsRef} className="suggestions-list" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', zIndex: 1000, backgroundColor: 'white', listStyleType: 'none', margin: 0, padding: 0 }}>
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)} style={{ padding: '8px', cursor: 'pointer', borderBottom: '1px solid #ddd' }}>
                {suggestion.city}, {suggestion.state}, {suggestion.hotelName}
              </li>
            ))}
          </ul>
        )}
        {errors.destination && <p className="error-text">{errors.destination}</p>}
      </div>

      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </label>
        <input 
          type="date" 
          value={checkInDate}
          onChange={handleCheckInChange}
          required 
        />
        {errors.checkInDate && <p className="error-text">{errors.checkInDate}</p>}
      </div>

      {showCheckOut && (
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </label>
          <input 
            type="date" 
            value={checkOutDate}
            onChange={handleCheckOutChange}
            required 
          />
          {errors.checkOutDate && <p className="error-text"> {errors.checkOutDate}</p>}
        </div>
      )}

      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faUser} />
        </label>
        <input 
          type="number" 
          value={adults}
          onChange={(e) => {
            setAdults(e.target.value); 
            localStorage.setItem('adults', e.target.value); //localStorage adults
          }} 
          min="1" 
          required 
        />
        {errors.adults && <p className="error-text">{errors.adults}</p>}
      </div>

      <button type="submit" className="search-button">{searchButtonLabel}</button>
      {errors.form && <p className="error-text">{errors.form}</p>}
    </form>
  );
}

export default SearchForm;
