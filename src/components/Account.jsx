import axios from 'axios'; // Asegúrate de tener axios instalado
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../styles/components/_account.scss';

const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleDeleteAccount = () => {
    // Mostrar modal de confirmación
    setIsModalOpen(true);
  };

  const confirmDeleteAccount = async () => {
    try {
      // Enviar solicitud para eliminar la cuenta del backend
      await axios.delete('http://localhost:8000/api/v1/auth/user/', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      });
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      window.location.href = '/';
    } catch (err) {
      console.error('Failed to delete account:', err);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
              <i className="fas fa-history"></i> Reservations
            </Link>
          </li>
          <li className="menu-item sign-out" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i> Sign Out
          </li>
          <li className="menu-item delete-account" onClick={handleDeleteAccount}>
            <i className="fas fa-user-times"></i> Delete Account
          </li>
        </ul>
      </aside>
      <main className="account-content">
        <Outlet />
      </main>

      {/* Modal para confirmación de eliminación */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Module Under Development</h2>
            <p>This feature is under development and cannot be completed at this time. Please check back later.</p>
            <button onClick={handleCloseModal} className="btn-close"></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
