import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/components/_changepassword.scss';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setError('User email not found.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword || !email) {
      setError('All fields are required.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirmation do not match.');
      return;
    }

    try {
      const token = localStorage.getItem('token');

      const response = await axios.patch(
        'http://localhost:8000/api/v1/auth/change-password',
        { oldPassword, newPassword, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess(response.data.msg);
      setError('');
    } catch (error) {
      setError(error.response?.data?.msg || 'An error occurred');
      setSuccess('');
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form className="change-password-form" onSubmit={handleSubmit}>
        <div className="change-password-form-group">
          <label htmlFor="email">Email</label>
          <div className="password-input-wrapper">
            <input
              type="email"
              id="email"
              value={email}
              disabled
            />
          </div>
        </div>
        <div className="change-password-form-group">
          <label htmlFor="oldPassword">Current Password</label>
          <div className="password-input-wrapper">
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="change-password-form-group">
          <label htmlFor="newPassword">New Password</label>
          <div className="password-input-wrapper">
            <input
              type={showNewPassword ? 'text' : 'password'}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showNewPassword ? faEyeSlash : faEye}
              className="password-toggle-icon"
              onClick={() => setShowNewPassword(!showNewPassword)}
            />
          </div>
        </div>
        <div className="change-password-form-group">
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <div className="password-input-wrapper">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              className="password-toggle-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
        </div>
        <button type="submit">Change Password</button>
        {error && <p className="change-password-error">{error}</p>}
        {success && <p className="change-password-success">{success}</p>}
      </form>
    </div>
  );
};

export default ChangePassword;

