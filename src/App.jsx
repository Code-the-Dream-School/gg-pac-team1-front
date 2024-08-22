import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FamilyFriendly from './components/FamilyFriendly';
import Wellness from './components/Wellness';
import BudgetTravel from './components/BudgetTravel';
import TrendingDestination from './components/TrendingDestination';
import Romantic from './components/Romantic';
import FoodieDestination from './components/FoodieDestination';
import Layout from './components/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import TripDescription from './components/TripSection/TripDescription';
import ReviewSection from './components/ReviewSection/ReviewSection';
import AllReviews from './components/ReviewSection/AllReviews'; 
import LeaveReview from './components/ReviewSection/LeaveReview'; 
import { getAllData } from './util/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = 'http://localhost:8000/api/v1/';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const myData = await getAllData(URL);
        setMessage(myData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'family-friendly',
          element: <FamilyFriendly />
        },
        {
          path: 'wellness',
          element: <Wellness />
        },
        {
          path: 'budget-travel',
          element: <BudgetTravel />
        },
        {
          path: 'trending-destinations',
          element: <TrendingDestination />
        },
        {
          path: 'romantic',
          element: <Romantic />
        },
        {
          path: 'foodie-destination',
          element: <FoodieDestination />
        },
        {
          path: 'reviews',
          element: <ReviewSection /> 
        },
        {
          path: 'all-reviews',
          element: <AllReviews /> 
        },
        {
          path: 'search',
          element: <Search /> 
        },
        {
          path: 'leave-review',
          element: <LeaveReview /> 
        },
        {
          path: 'trip-description',
          element: <TripDescription /> 
        }
      
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
