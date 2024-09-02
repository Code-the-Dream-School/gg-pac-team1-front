import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../styles/components/_account.scss';

const Account = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir automáticamente a /account/profile al acceder a /account
    navigate('profile');
  }, [navigate]);

  const handleSignOut = () => {
    const confirmation = window.confirm("Are you sure you want to sign out?");
    if (confirmation) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      window.location.href = '/';
    }
  };

  return (
    <div className="account-container">
      <aside className="account-sidebar">
        <ul className="sidebar-menu">
          <li className="menu-item">
            <Link to="profile">
              <i className="fas fa-user"></i> Profile
            </Link>
          </li>
          <li className="menu-item">
            <Link to="addresses">
              <i className="fas fa-map-marker-alt"></i> Addresses
            </Link>
          </li>
          <li className="menu-item">
            <Link to="payments">
              <i className="fas fa-credit-card"></i> Payment Methods
            </Link>
          </li>
          <li className="menu-item">
            <Link to="changepassword">
              <i className="fas fa-key"></i> Change Password
            </Link>
          </li>
          <li className="menu-item">
            <Link to="history">
              <i className="fas fa-history"></i> Travel History
            </Link>
          </li>
          <li className="menu-item sign-out" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i> Sign Out
          </li>
        </ul>
      </aside>
      <main className="account-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Account;
