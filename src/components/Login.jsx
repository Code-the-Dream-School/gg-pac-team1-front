import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../styles/components/_login.scss';

const Login = ({ onLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token); 
      onLogin(response.data.user); 
      onClose(); 
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handleForgotPassword = () => {
    onClose(); // Close the login popup
    navigate('/reset-password'); // Redirect to the reset password page
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="login-header">
          <h1>TravelAmigos</h1>
        </div>
        <div className="login-subheader">
          <p className="subtitle">search <strong>hotels</strong></p>
          <span className="hotel-icon">🏨</span>
        </div>
        <hr className="divider" />
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">Login</button>
        </form>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
        <p className="forgot-password-link">
          <button type="button" className="forgot-password-button" onClick={handleForgotPassword}>
            Forgot your password?
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

