import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getAllData } from './util/index';

import Layout from './components/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
// Here all future page imports

const URL = 'http://localhost:8000/api/v1/users';

function App() {
  
  const [message, setMessage] = useState(''); 

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();
      
    return () => {
      console.log('unmounting');
    }

  }, []);

  // Configuring the router using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:
      [
        {
          index: true,
          element: <Home />,
        },
        {
          //Here are the future routes, example: auth, discover
        },
        {
          path: 'search',
          element: <Search />
        }
      ]
    }
  ]);

  return (
    <>
      {/* Using RouterProvider to handle routing */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
