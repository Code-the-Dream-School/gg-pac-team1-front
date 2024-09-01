import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Account from './components/Account';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Session from './components/Session';
import Home from './pages/Home';
import { getAllData } from './util/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetTravel from './components/BudgetTravel';
import FamilyFriendly from './components/FamilyFriendly';
import FoodieDestination from './components/FoodieDestination';
import AllReviews from './components/ReviewSection/AllReviews';
import LeaveReview from './components/ReviewSection/LeaveReview';
import ReviewSection from './components/ReviewSection/ReviewSection';
import Romantic from './components/Romantic';
import TrendingDestination from './components/TrendingDestination';
import TripDescriptionChicago from './components/TripSection/TripDescriptionChicago';
import TripDescriptionLa from './components/TripSection/TripDescriptionLa';
import TripDescriptionMiami from './components/TripSection/TripDescriptionMiami';
import TripDescriptionNY from './components/TripSection/TripDescriptionNY';
import TripDescriptionSf from './components/TripSection/TripDescriptionSf';
import Wellness from './components/Wellness';
import HotelSearchPage from './pages/HotelSearchPage';
import HotelDetailPage from './pages/HotelDetailPage';
import ReservationReviewPage from './pages/ReservationReviewPage';
import Search from './pages/Search';

const URL = 'http://localhost:8000/api/v1/users';
const AUTH_URL = 'http://localhost:8000/api/v1/auth';

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

        { path: 'login', 
          element: <Login authURL={AUTH_URL} /> 
        },

        { path: 'register', 
          element: <Register authURL={AUTH_URL} /> 
        },

        { path: 'account',
          element: <Account /> 
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
          path: "/:state/:city",
          element: <HotelSearchPage />
        },
        {
          path: 'hotel/:id',
          element: <HotelDetailPage />
        },
        {
          path: 'reservation-review',
          element: <ReservationReviewPage />
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
          element: <TripDescriptionMiami /> 
        },
        {
          path: 'search',
          element: <Search />
        }
      ]
    }
  ]);

  return (
    <Session authURL={AUTH_URL}>
      <RouterProvider router={router} />
    </Session>
    
  );
}

export default App;
