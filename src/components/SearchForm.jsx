import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import DateInput from './DateInput';
import ChildrenSelector from './ChildrenSelector';
import { validateForm } from './formValidations';

function SearchForm({ 
  onSearch, 
  destinationLabel = "Destination", 
  destinationPlaceholder = "Going to", 
  travelersLabel = "Number of Travelers", 
  searchButtonLabel = "Search" 
}) {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [adults, setAdults] = useState(1);
  const [showChildrenOption, setShowChildrenOption] = useState(false);
  const [hasChildren, setHasChildren] = useState(false);
  const [children, setChildren] = useState(1);
  const [errors, setErrors] = useState({});

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
    setShowCheckOut(true);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleAdultsChange = (e) => {
    const value = parseInt(e.target.value);
    setAdults(value);
    setShowChildrenOption(value > 0);
    setHasChildren(false);
    setChildren(0);
  };

  const handleHasChildrenChange = (e) => {
    setHasChildren(e.target.value === "yes");
  };

  const handleChildrenChange = (e) => {
    setChildren(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm({ destination, checkInDate, checkOutDate, adults, hasChildren, children });

    if (Object.keys(validationErrors).length === 0) {
      onSearch({ destination, checkInDate, checkOutDate, adults, children });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </label>
        <input 
          type="text" 
          value={destination}
          onChange={(e) => setDestination(e.target.value)} 
          placeholder={destinationPlaceholder} 
          required 
        />
        {errors.destination && <p className="error-text">{errors.destination}</p>}
      </div>

      <DateInput 
        checkInDate={checkInDate} 
        checkOutDate={checkOutDate} 
        handleCheckInChange={handleCheckInChange} 
        handleCheckOutChange={handleCheckOutChange}
        showCheckOut={showCheckOut}
      />

      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faUser} />
        </label>
        <input 
          type="number" 
          value={adults}
          onChange={handleAdultsChange} 
          min="1" 
          placeholder={travelersLabel} 
          required 
        />
        {errors.adults && <p className="error-text">{errors.adults}</p>}
      </div>

      {showChildrenOption && (
        <ChildrenSelector 
          hasChildren={hasChildren} 
          children={children} 
          handleHasChildrenChange={handleHasChildrenChange} 
          handleChildrenChange={handleChildrenChange}
        />
      )}

      <button type="submit">{searchButtonLabel}</button>
    </form>
  );
}

export default SearchForm;
