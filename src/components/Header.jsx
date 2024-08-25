import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/_configuser.scss';
import Account from './Account';
import Login from './Login';

const Header = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAccount, setShowAccount] = useState(false); // Nuevo estado para mostrar Account

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:8000/api/v1/auth/current', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        setWelcomeMessage(response.data.user.name);
        setUserEmail(response.data.user.email);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.error('Error fetching current user:', error);
        handleLogout();
      });
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    setWelcomeMessage('');
    setUserEmail('');
    setIsLoggedIn(false);
    setShowDropdown(false);
    setShowAccount(false); // Asegúrate de cerrar el componente Account si está abierto
    localStorage.removeItem('token');
    navigate('/');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const goToAccount = () => {
    setShowAccount(true); // Mostrar el componente Account
    setShowDropdown(false);
  };

  const handleAccountSignOut = () => {
    handleLogout();
  };

  return (
    <>
      <header className={`header ${isSmall ? 'small' : ''}`}>
        <div className="header-left">
          <a href="/" className="brand-link">
            <h1>TravelAmigos</h1>
          </a>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li><a href="#support">Support</a></li>
              <li><a href="#notifications"><i className="fas fa-bell"></i></a></li>
              {isLoggedIn ? (
                <li className={`dropdown ${showDropdown ? 'active' : ''}`}>
                  <button onClick={toggleDropdown} className="user-button">
                    {welcomeMessage}
                  </button>
                  {showDropdown && (
                    <ul className="dropdown-menu">
                      <li className="user-info">
                        Hi, <strong>{welcomeMessage}</strong><br />
                        <small>{userEmail}</small>
                      </li>
                      <hr className="dropdown-divider" />
                      <li>
                        <button onClick={goToAccount}>
                          <i className="fas fa-cog"></i> Account
                        </button>
                      </li>
                      <hr className="dropdown-divider" />
                      <li>
                        <button onClick={handleLogout}>
                          <i className="fas fa-sign-out-alt"></i> Sign Out
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li><button onClick={() => setShowLogin(true)} className="login-button">Login</button></li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {showLogin && <Login onLogin={(user) => {
        setWelcomeMessage(user.name);
        setUserEmail(user.email);
        setIsLoggedIn(true);
        setShowLogin(false);
      }} onClose={() => setShowLogin(false)} />}
      {showAccount && <Account setIsLoggedIn={handleAccountSignOut} />} {/* Pasar función de cierre de sesión */}
    </>
  );
};

export default Header;

