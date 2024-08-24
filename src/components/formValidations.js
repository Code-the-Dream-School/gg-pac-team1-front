export const validateForm = ({ destination, checkInDate, checkOutDate, adults, hasChildren, children }) => {
    const errors = {};
  
    if (!destination.trim()) {
      errors.destination = 'Please enter a destination.';
    }
  
    if (!checkInDate) {
      errors.checkInDate = 'Please select a check-in date.';
    } else if (new Date(checkInDate) >= new Date(checkOutDate)) {
      errors.checkOutDate = 'Check-out date must be after the check-in date.';
    }
  
    if (adults < 1) {
      errors.adults = 'There must be at least one adult.';
    }
  
    if (hasChildren && children < 0) {
      errors.children = 'The number of children cannot be negative.';
    }
  
    return errors;
  };
  
    