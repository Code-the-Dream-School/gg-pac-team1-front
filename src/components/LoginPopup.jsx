import React, { useState } from 'react';
import '../styles/components/_loginpopup.scss'; // Asegúrate de crear este archivo SCSS

const LoginPopup = ({ users, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Verifica que `users` es un array antes de intentar buscar un usuario
    if (!Array.isArray(users)) {
      setError('Error en la carga de usuarios');
      return;
    }

    // Buscar si el email y la contraseña coinciden con algún usuario del backend
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      onLogin(user);
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;

