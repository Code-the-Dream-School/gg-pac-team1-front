import React, { createContext, useContext, useEffect, useState } from 'react';

export const SessionContext = createContext(null);

const Session = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Obtén el token y los datos del usuario de sessionStorage
    const token = sessionStorage.getItem('token');
    const storedUser = JSON.parse(sessionStorage.getItem('user'));

    if (token && storedUser) {
      // Si hay un token y un usuario almacenado, establece el usuario actual
      setCurrentUser(storedUser);
    } else {
      // Si no, asegúrate de que currentUser sea null
      setCurrentUser(null);
    }
  }, []);

  const handleLogout = () => {
    // Limpia la información de la sesión
    setCurrentUser(null);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  };

  return (
    <SessionContext.Provider value={{ currentUser, handleLogout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);

export default Session;
