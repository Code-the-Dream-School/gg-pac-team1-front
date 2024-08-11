import React, { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Hotel from './components/Hotel'; // Importa el componente Hotel
import LoginPopup from './components/LoginPopup';
import './styles/main.scss'; // Importa el archivo SASS
import { getAllData } from './util/index';

const URL = 'http://localhost:8000/api/v1/';

function App() {
  const [message, setMessage] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [users, setUsers] = useState([]); // Inicializa `users` como un array vacío

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myData = await getAllData(URL);
        if (Array.isArray(myData.data)) {
          setUsers(myData.data); // Asegúrate de que es un array
          setMessage('Datos cargados correctamente');
        } else {
          setUsers([]); // En caso de que no sea un array
          setMessage('No se encontraron usuarios');
        }
      } catch (error) {
        setMessage('Error al cargar los datos');
      }
    };

    fetchData();

    return () => {
      console.log('unmounting');
    };
  }, []);

  return (
    <Router>
      <h1>{message}</h1>
      {welcomeMessage && <h2>{welcomeMessage}</h2>}
      <button onClick={() => setShowLogin(true)}>Login</button>
      <h1>Busca tu hotel</h1>
      <Link to="/hotel"><button>Hotel</button></Link> {/* Link al componente Hotel */}

      {showLogin && (
        <LoginPopup
          users={users}
          onClose={() => setShowLogin(false)}
          onLogin={(user) => {
            setWelcomeMessage(`Bienvenido, ${user.name}`);
            setShowLogin(false);
          }}
        />
      )}

      <Routes>
        <Route path="/hotel" element={<Hotel />} /> {/* Ruta para el componente Hotel */}
      </Routes>
    </Router>
  );
}

export default App;
