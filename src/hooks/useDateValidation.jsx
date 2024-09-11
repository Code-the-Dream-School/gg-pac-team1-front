import { useState, useCallback } from 'react';
import { validateDate } from '../services/bookingServices';

const useDateValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = useCallback((name, value, rules = {}) => {
    try {
      validateDate(value, rules);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  }, []);

  return { errors, validate };
};

export default useDateValidation;