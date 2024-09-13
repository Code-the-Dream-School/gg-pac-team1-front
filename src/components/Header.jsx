import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/_configuser.scss';
import Login from './Login';

const Header = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const storedUser = JSON.parse(sessionStorage.getItem('user'));

    if (token && storedUser) {
      setWelcomeMessage(formatName(storedUser.name));
      setUserEmail(storedUser.email);
      setIsLoggedIn(true);
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
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    navigate('/');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const goToAccount = () => {
    setShowDropdown(false);
    navigate('/account/profile'); // Redirige a /account/profile
  };

  const openLoginModal = () => {
    setShowLogin(true);
  };

  window.openLoginModal = openLoginModal;

  const formatName = (name) => {
    if (name.length > 15) {
      return name.split(' ')[0];
    }
    return name;
  };

  return (
    <>
      <header className={`header ${isSmall ? 'small' : ''}`}>
        <div className="header-left">
          <Link to="/" className="brand-link">
            <h1>TravelAmigos</h1>
          </Link>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li><a href="#support">Support</a></li>
              <li><a href="#notifications"><i className="fas fa-bell"></i></a></li>
              {isLoggedIn ? (
                <li className={`dropdown ${showDropdown ? 'dropdown-active' : ''}`}>
                  <button onClick={toggleDropdown} className="dropdown-user-button">
                    {welcomeMessage}
                  </button>
                  {showDropdown && (
                    <ul className="custom-dropdown-menu">
                      <li className="dropdown-user-info">
                        Hi, <strong>{welcomeMessage}</strong><br />
                        <small>{userEmail}</small>
                      </li>
                      <hr className="dropdown-divider" />
                      <li>
                        <button onClick={goToAccount} className="dropdown-account-button">
                          <i className="fas fa-cog"></i> Account
                        </button>
                      </li>
                      <hr className="dropdown-divider" />
                      <li>
                        <button onClick={handleLogout} className="dropdown-logout-button">
                          <i className="fas fa-sign-out-alt"></i> Sign Out
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li><button onClick={openLoginModal} className="login-button">Login</button></li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {showLogin && (
        <Login
          onLogin={(user) => {
            setWelcomeMessage(formatName(user.name));
            setUserEmail(user.email);
            setIsLoggedIn(true);
            setShowLogin(false);
            sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('token', user.token);
            navigate('/');
          }}
          onClose={() => setShowLogin(false)}
        />
      )}
    </>
  );
};

export default Header;


