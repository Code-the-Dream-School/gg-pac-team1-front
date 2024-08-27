import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../styles/components/_register.scss';

const Register = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Initialize react-hook-form
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  // Get the current password value for validation
  const password = watch('password');

  // Validation rules
  const validationRules = {
    name: {
      required: 'Name is required',
      minLength: {
        value: 2,
        message: 'Name must be at least 2 characters'
      }
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Email is not valid'
      }
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters'
      },
      pattern: {
        value: /^[A-Za-z\d]{8,}$/,
        message: 'Password must contain only letters and numbers'
      }
    },
    confirmPassword: {
      required: 'Please confirm your password',
      validate: value => value === password || 'Passwords do not match'
    }
  };

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:8000/api/v1/auth/register', data);
      setSuccessMessage('Datos registrados');
      setTimeout(() => {
        navigate('/'); // Navigate to the home page after showing the message
      }, 2000); // Message shown for 2 seconds
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <button className="close-button" onClick={() => navigate('/')}>
          &times;
        </button>
        <h2>Register</h2>
        
        {/* Validation instructions */}
        <div className="validation-info">
          <div className="validation-card">
            <h3>Registration Requirements:</h3>
            <ul>
              <li>Name must be at least 2 characters long.</li>
              <li>Email must be a valid email address.</li>
              <li>Password must be at least 8 characters long and contain only letters and numbers.</li>
              <li>Confirm password must match the password.</li>
            </ul>
          </div>
        </div>
        
        {successMessage && <p className="success-message">{successMessage}</p>}
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <div className="input-wrapper">
              <input
                id="name"
                type="text"
                {...register('name', validationRules.name)}
              />
              {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
                id="email"
                type="email"
                {...register('email', validationRules.email)}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                id="password"
                type="password"
                {...register('password', validationRules.password)}
              />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-wrapper">
              <input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword', validationRules.confirmPassword)}
              />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
            </div>
          </div>
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
