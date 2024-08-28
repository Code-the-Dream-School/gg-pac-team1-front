import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const SessionContext = createContext(null);

const Session = ({ authURL, children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${authURL}/current`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(response => {
          setCurrentUser(response.data.user);
        })
        .catch(error => {
          console.error('Error restoring session:', error);
          handleLogout();
        });
    }
  }, [authURL]);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
  };

  return (
    <SessionContext.Provider value={{ currentUser, handleLogout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);

export default Session;