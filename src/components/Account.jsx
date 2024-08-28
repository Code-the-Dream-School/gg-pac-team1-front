import React, { useState } from 'react';
import '../styles/components/_account.scss';
import CreditCardInfo from './CreditCardInfo';
import ProfileInfo from './ProfileInfo';

const Account = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleSignOut = () => {
    // Mostrar un mensaje de confirmación antes de cerrar sesión
    const confirmation = window.confirm("Are you sure you want to sign out?");
    
    if (confirmation) {
      // Eliminar el token del localStorage
      localStorage.removeItem('token');
      
      // Redirigir a la página de inicio de sesión o inicio
      window.location.href = '/';
    }
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <ul className="settings-nav">
        <li>
          <button 
            className={`settings-nav-item ${activeSection === 'profile' ? 'active' : ''}`} 
            onClick={() => handleSectionChange('profile')}
          >
            Edit Profile
          </button>
        </li>
        <li>
          <button 
            className={`settings-nav-item ${activeSection === 'creditCard' ? 'active' : ''}`} 
            onClick={() => handleSectionChange('creditCard')}
          >
            Credit Card Information
          </button>
        </li>
        <li>
          <button 
            className="settings-nav-item sign-out" 
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </li>
      </ul>
      <div className="settings-content">
        {activeSection === 'profile' && <ProfileInfo />}
        {activeSection === 'creditCard' && <CreditCardInfo />}
      </div>
    </div>
  );
};

export default Account;