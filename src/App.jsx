import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Discover from './components/Discover';
import FamilyFriendly from './components/FamilyFriendly';
import Wellness from './components/Wellness';
import BudgetTravel from './components/BudgetTravel';
import TrendingDestination from './components/TrendingDestination';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getAllData } from './util/index';
import 'bootstrap/dist/css/bootstrap.min.css';


import Layout from './components/Layout';
import Home from './pages/Home';
import Search from './pages/Search';

const URL = 'http://localhost:8000/api/v1/';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log('unmounting');
    };
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
          element: <Home />
        },        {
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
    // <Router>
    //   <h1>{message}</h1>
    //   <Routes>
    //     <Route path="/" element={<Discover />} />
    //     <Route path="/family-friendly" element={<FamilyFriendly />} />
    //     <Route path="/wellness" element={<Wellness />} />
    //     <Route path="/budget-travel" element={<BudgetTravel />} />
    //     <Route path="/trending-destinations" element={<TrendingDestination />} />
    //   </Routes>
    // </Router>
    // <>
    //   {/* Using RouterProvider to handle routing */}
    //   <RouterProvider router={router} />
    // </>
  );
}

export default App;

