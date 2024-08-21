import React from 'react';
import '../styles/components/_account.scss';

const Account = ({ setIsLoggedIn, setWelcomeMessage, setUserEmail, setShowDropdown }) => {
  
  const handleClick = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <ul className="settings-list">
        <li>
          <button className="settings-item" onClick={handleClick}>Edit Profile</button>
        </li>
        <li>
          <button className="settings-item" onClick={handleClick}>Credit Card Information</button>
        </li>
        <li>
          <button className="settings-item" onClick={handleClick}>Sign Out</button>
        </li>
      </ul>
    </div>
  );
};

export default Account;

