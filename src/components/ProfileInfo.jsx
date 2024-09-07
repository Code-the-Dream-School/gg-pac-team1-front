import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/components/_profileinfo.scss';

const ProfileInfo = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Inicializa el hook useForm
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    // Obtener datos del usuario al montar el componente
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/auth/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const { name, phone, address } = response.data;
        // Rellenar los campos del formulario con los datos obtenidos
        setValue('name', name);
        setValue('phone', phone);
        setValue('address', address);
      } catch (err) {
        setError('Failed to load user data');
      }
    };

    fetchUserData();
  }, [setValue]);

  const handleUpdateProfile = async (data) => {
    try {
      await axios.patch('http://localhost:8000/api/v1/auth/user', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSuccess('Profile updated successfully');
    } catch (err) {
      if (err.response) {
        // Si el error proviene del backend, muestra el mensaje personalizado
        setError(err.response.data.message || 'An error occurred during the update');
      } else {
        // Si hay un error genérico
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="profile-info">
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <h2>Profile Information</h2>
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            {...register('name', {
              required: 'Name is required',
            })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            placeholder="Phone"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: 'Invalid phone number. Must be 10 to 15 digits',
              },
            })}
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            placeholder="Address"
            {...register('address', {
              required: 'Address is required',
              minLength: {
                value: 10,
                message: 'Address must be at least 10 characters long',
              },
              maxLength: {
                value: 100,
                message: 'Address must be less than 100 characters long',
              },
            })}
          />
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>

        <button type="submit">Update Profile</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default ProfileInfo;
