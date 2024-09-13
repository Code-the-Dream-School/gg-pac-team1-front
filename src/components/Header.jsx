import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/_configuser.scss';
import Login from './Login';
import CustomDropDown from './CustomDropDown'; // Importar el nuevo componente

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const storedUser = JSON.parse(sessionStorage.getItem('user'));

    if (token && storedUser) {
      setWelcomeMessage(formatName(storedUser.name));
      setUserEmail(storedUser.email);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setWelcomeMessage('');
    setUserEmail('');
    setIsLoggedIn(false);
    setShowDropDown(false);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    navigate('/');
  };

  const handleGoToAccount = () => {
    setShowDropDown(false);
    navigate('/account/profile'); // Redirige a /account/profile
  };

  const handleOpenLoginModal = () => {
    setShowLogin(true);
  };

  window.openLoginModal = handleOpenLoginModal;

  const formatName = (name) => {
    if (name.length > 15) {
      return name.split(' ')[0];
    }
    return name;
  };

  return (
    <>
      <header className="header">
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
                <li>
                  <CustomDropDown
                    userName={welcomeMessage}
                    userEmail={userEmail}
                    goToAccount={handleGoToAccount}
                    handleLogout={handleLogout}
                  />
                </li>
              ) : (
                <li><button onClick={handleOpenLoginModal} className="login-button">Login</button></li>
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