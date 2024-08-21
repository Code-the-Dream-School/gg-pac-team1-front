import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Account from './components/Account'; // Importa el componente Account
import FormSearch from './components/FormSearch';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Session from './components/Session'; // Importa el nuevo componente
import Home from './pages/Home';
import Search from './pages/Search';

const URL = 'http://localhost:8000/api/v1/users';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(URL);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout users={users} currentUser={currentUser} onLogout={() => setCurrentUser(null)} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'search',
          element: <Search />,
        },
        {
          path: 'login',
          element: <Login onLogin={(user) => setCurrentUser(user)} />,
        },
        {
          path: 'register',
          element: <Register onRegister={(user) => setCurrentUser(user)} />,
        },
        {
          path: 'formsearch',
          element: <FormSearch />,
        },
        {
          path: 'account', // Ruta para la página de cuenta
          element: <Account />, // Componente Account
        },
      ],
    },
  ]);

  return (
    <>
      <Session onUserLoaded={setCurrentUser} /> {/* Llama a Session para manejar la sesión */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
