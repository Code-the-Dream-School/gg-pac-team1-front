import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getAllData } from './util/index';
import Layout from './components/Layout';
import Home from './pages/Home';
import FamilyFriendly from './components/FamilyFriendly';
import Wellness from './components/Wellness';
import BudgetTravel from './components/BudgetTravel';
import TrendingDestination from './components/TrendingDestination';
import Romantic from './components/Romantic';
import FoodieDestination from './components/FoodieDestination';
import TripDescriptionNY from './components/TripSection/TripDescriptionNY'; 
import TripDescriptionLa from './components/TripSection/TripDescriptionLa'; 
import TripDescriptionChicago from './components/TripSection/TripDescriptionChicago';
import TripDescriptionSf from './components/TripSection/TripDescriptionSf';
import TripDescriptionMiami from './components/TripSection/TripDescriptionMiami';
import ReviewSection from './components/ReviewSection/ReviewSection';
import AllReviews from './components/ReviewSection/AllReviews'; 
import LeaveReview from './components/ReviewSection/LeaveReview'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelSearchPage from './pages/HotelSearchPage';
import Search from './pages/Search';

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
    <>
      {/* Using RouterProvider to handle routing */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
