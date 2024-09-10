import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/components/_addresses.scss';

const Addresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredPostalCodes, setFilteredPostalCodes] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [success, setSuccess] = useState(false);

  const citiesByState = {
    California: ['Los Angeles', 'San Francisco', 'San Diego'],
    NewYork: ['New York City', 'Buffalo', 'Rochester'],
    Texas: ['Houston', 'Dallas', 'Austin'],
    Florida: ['Miami', 'Orlando', 'Tampa'],
    Colorado: ['Denver', 'Englewood', 'Aurora', 'Colorado Springs', 'Boulder'] // Agregamos Colorado y ciudades
  };

  const postalCodesByState = {
    California: ['90001', '94101', '92101'],
    NewYork: ['10001', '14201', '14601'],
    Texas: ['77001', '75201', '73301'],
    Florida: ['33101', '32801', '33601'],
    Colorado: ['80113', '80214', '80205'] // Agregamos los códigos postales de Colorado
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const { street, city, state, postalCode } = data;
    const formattedAddress = `${street}, ${city}, ${state}, ${postalCode}`;

    try {
      await axios.patch('http://localhost:8000/api/v1/auth/user/', {
        address: formattedAddress
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      setAddresses((prev) => [...prev, formattedAddress]);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      console.error('Failed to update address:', err);
    }
  };

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/auth/user/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setAddresses(response.data.addresses || []);
      } catch (err) {
        console.error('Failed to fetch addresses:', err);
      }
    };

    fetchAddresses();
  }, []);

  const handleStateChange = (e) => {
    const selected = e.target.value;
    setSelectedState(selected);
    setFilteredCities(citiesByState[selected] || []);
    setFilteredPostalCodes(postalCodesByState[selected] || []);
  };

  return (
    <div className="addresses-container">
      <h3 className="addresses-title">Your Addresses</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="addresses-form">
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select
            id="state"
            className="form-select"
            {...register('state', { required: 'State is required' })}
            onChange={handleStateChange}
          >
            <option value="">Select a state</option>
            {Object.keys(citiesByState).map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
          {errors.state && <p className="error">{errors.state.message}</p>}
        </div>

        {selectedState && (
          <>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select
                id="city"
                className="form-select"
                {...register('city', { required: 'City is required' })}
              >
                <option value="">Select a city</option>
                {filteredCities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <p className="error">{errors.city.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <select
                id="postalCode"
                className="form-select"
                {...register('postalCode', { required: 'Postal Code is required' })}
              >
                <option value="">Select a postal code</option>
                {filteredPostalCodes.map((code, index) => (
                  <option key={index} value={code}>{code}</option>
                ))}
              </select>
              {errors.postalCode && <p className="error">{errors.postalCode.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="street">Street Address</label>
              <input
                type="text"
                id="street"
                placeholder="Enter street address"
                className="form-input"
                {...register('street', { required: 'Street Address is required' })}
              />
              {errors.street && <p className="error">{errors.street.message}</p>}
            </div>
            <button type="submit" className="btn-submit">Add New Address</button>
          </>
        )}
      </form>

      {success && <div className="success-message show-success">Address saved successfully!</div>}

      <ul className="addresses-list">
        {addresses.map((address, index) => (
          <li key={index} className="address-item">{address}</li>
        ))}
      </ul>
    </div>
  );
};

export default Addresses;
