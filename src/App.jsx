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
import TripDescriptionNY from './components/TripSection/TripDescriptionNY'; 
import TripDescriptionLa from './components/TripSection/TripDescriptionLa'; 
import TripDescriptionChicago from './components/TripSection/TripDescriptionChicago';
import TripDescriptionSf from './components/TripSection/TripDescriptionSf';
import TripDescriptionMiami from './components/TripSection/TripDescriptionMiami'; // Add this import
import ReviewSection from './components/ReviewSection/ReviewSection';
import AllReviews from './components/ReviewSection/AllReviews'; 
import LeaveReview from './components/ReviewSection/LeaveReview'; 
import { getAllData } from './util/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelSearchPage from './pages/HotelSearchPage';

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
          path: 'leave-review',
          element: <LeaveReview /> 
        },
        {
          path: 'trip-description-ny',
          element: <TripDescriptionNY /> 
        },
        {
          path: 'trip-description-la',
          element: <TripDescriptionLa /> 
        },
        {
          path: 'search',
          element: <HotelSearchPage />
        },
        {
          path: 'trip-description-chicago',
          element: <TripDescriptionChicago />
        },
        {
          path: 'trip-description-sf',
          element: <TripDescriptionSf />
        },
        {
          path: 'trip-description-miami',
          element: <TripDescriptionMiami /> // Add this route
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
