import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/_configuser.scss";
import Login from "./Login";
import CustomDropdown from "./CustomDropdown"; // new component

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Verifica si hay un token en sessionStorage
    const token = sessionStorage.getItem("token");
    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    if (token && storedUser) {
      setWelcomeMessage(storedUser.name);
      setUserEmail(storedUser.email);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setWelcomeMessage("");
    setUserEmail("");
    setIsLoggedIn(false);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/");
  };

  const goToAccount = () => {
    navigate("/account");
  };

  return (
    <>
      <header>
        <div className="header-left">
          <Link to="/" className="brand-link">
            <h1>TravelAmigos</h1>
          </Link>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li>
                <a href="#support">Support</a>
              </li>
              <li>
                <a href="#notifications">
                  <i className="fas fa-bell"></i>
                </a>
              </li>
              {isLoggedIn ? (
                <li className="dropdown">
                  <CustomDropdown
                    userName={welcomeMessage}
                    userEmail={userEmail}
                    goToAccount={goToAccount}
                    handleLogout={handleLogout}
                  />
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => setShowLogin(true)}
                    className="login-button"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {showLogin && (
        <Login
          onLogin={(user) => {
            setWelcomeMessage(user.name);
            setUserEmail(user.email);
            setIsLoggedIn(true);
            setShowLogin(false);
            sessionStorage.setItem("user", JSON.stringify(user)); // Guardar la información del usuario
            sessionStorage.setItem("token", user.token); // Guardar el token del usuario
          }}
          onClose={() => setShowLogin(false)}
        />
      )}
    </>
  );
};

export default Header;
