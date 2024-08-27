import axios from 'axios';
import { useEffect } from 'react';

const Session = ({ onUserLoaded }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const fetchCurrentUser = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/v1/auth/current', {
            headers: { Authorization: `Bearer ${token}` },
          });
          onUserLoaded(response.data.user); // Notificar a App.jsx que el usuario ha sido cargado
        } catch (error) {
          console.error('Error fetching current user:', error);
          onUserLoaded(null); // Notificar a App.jsx que no hay usuario
        }
      };

      fetchCurrentUser();
    } else {
      onUserLoaded(null); // Notificar a App.jsx que no hay usuario
    }
  }, [onUserLoaded]);

  return null; // Este componente no necesita renderizar nada
};

export default Session;

