import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/components/_resetPassword.scss';

function ResetPassword({ authURL }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setErrorMessage('Invalid or missing token.');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.patch(`${authURL}/reset-password/${token}`, { password });

      if (response.status === 200) {
        setSuccessMessage('Password has been successfully reset.');
        setErrorMessage('');

        setTimeout(() => {
          // Cierra el componente actual y navega a la página principal (donde está el Header)
          navigate('/');
          // Despues de navegar, simula un clic en el botón de login para abrir el modal
          setTimeout(() => {
            const loginButton = document.querySelector('.login-button');
            if (loginButton) {
              loginButton.click();
            }
          }, 500); // Un pequeño retraso para asegurar que la página haya cargado
        }, 2000);
      } else {
        setErrorMessage('Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Failed to connect to server.');
      } else {
        setErrorMessage('Failed to connect to server.');
      }
    }
  };

  return (
    <div className="reset-password-container">
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          required
        />
        <button type="submit">Reset Password</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
}

export default ResetPassword;

