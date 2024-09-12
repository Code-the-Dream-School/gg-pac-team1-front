import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Account from './components/Account';
import Addresses from './components/Addresses';
import BudgetTravel from './components/BudgetTravel';
import ChangePassword from './components/ChangePassword';
import CreditCardInfo from './components/CreditCardInfo';
import FamilyFriendly from './components/FamilyFriendly';
import FoodieDestination from './components/FoodieDestination';
import ForgotPassword from './components/ForgotPassword';
import Layout from './components/Layout';
import Login from './components/Login';
import ProfileInfo from './components/ProfileInfo';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import AllReviews from './components/ReviewSection/AllReviews';
import LeaveReview from './components/ReviewSection/LeaveReview';
import ReviewSection from './components/ReviewSection/ReviewSection';
import Romantic from './components/Romantic';
import Session from './components/Session';
import TravelHistory from './components/TravelHistory';
import TrendingDestination from './components/TrendingDestination';
import TripDescriptionChicago from './components/TripSection/TripDescriptionChicago';
import TripDescriptionLa from './components/TripSection/TripDescriptionLa';
import TripDescriptionMiami from './components/TripSection/TripDescriptionMiami';
import TripDescriptionNY from './components/TripSection/TripDescriptionNY';
import TripDescriptionSf from './components/TripSection/TripDescriptionSf';
import Wellness from './components/Wellness';
import Home from './pages/Home';
import VirginiaHotels from './components/TravelBlog/VirginiaHotels';
import LakeTahoeHotels from './components/TravelBlog/LakeTahoeHotels';
import NorthCarolinaHotels from './components/TravelBlog/NorthCarolinaHotels';
import OhioHotels from './components/TravelBlog/OhioHotels';
import HotelSearchPage from './pages/HotelSearchPage';
import HotelDetailPage from './pages/HotelDetailPage';
import ReservationReviewPage from './pages/ReservationReviewPage';
import Search from './pages/Search';
import { getAllData } from './util/index';
import TravelBlog from './components/TravelBlog/TravelBlog';
import PaymentTest from './components/PaymentTest';
import TestSaveReservation from './components/TestSaveReservation'; // Importar TestSaveReservation

const AUTH_URL = 'http://localhost:8000/api/v1/auth';

function App() {
  const [message, setMessage] = useState('');
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    (async () => {
      const myData = await getAllData(AUTH_URL);
      setMessage(myData.data);

      const reviewsData = myData.data.reviews || [];
      setReviews(Array.isArray(reviewsData) ? reviewsData : []);
    })();
    return () => {
      console.log('unmounting');
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'login',
          element: <Login authURL={AUTH_URL} />,
        },
        {
          path: 'reset-password/:token',
          element: <ResetPassword authURL={AUTH_URL} />,
        },
        {
          path: 'forgot-password',
          element: <ForgotPassword />,
        },
        {
          path: 'register',
          element: <Register authURL={AUTH_URL} />,
        },
        {
          path: 'account',
          element: <Account />,
          children: [
            { path: 'profile', element: <ProfileInfo /> },
            { path: 'addresses', element: <Addresses /> },
            { path: 'payments', element: <CreditCardInfo /> },
            { path: 'changepassword', element: <ChangePassword /> },
            { path: 'history', element: <TravelHistory /> },
          ],
        },
        {
          path: 'family-friendly',
          element: <FamilyFriendly />,
        },
        {
          path: 'wellness',
          element: <Wellness />,
        },
        {
          path: 'budget-travel',
          element: <BudgetTravel />,
        },
        {
          path: 'trending-destinations',
          element: <TrendingDestination />,
        },
        {
          path: 'romantic',
          element: <Romantic />,
        },
        {
          path: 'foodie-destination',
          element: <FoodieDestination />,
        },
        {
          path: 'reviews',
          element: <ReviewSection />,
        },
        {
          path: 'all-reviews',
          element: <AllReviews />,
        },
        {
          path: 'leave-review',
          element: <LeaveReview />,
        },
        {
          path: 'trip-description-ny',
          element: <TripDescriptionNY />,
        },
        {
          path: 'trip-description-la',
          element: <TripDescriptionLa />,
        },
        {
          path: 'hotel/:id',
          element: <HotelDetailPage />,
        },
        {
          path: 'reservation-review',
          element: <ReservationReviewPage />,
        },
        {
          path: 'trip-description-chicago',
          element: <TripDescriptionChicago />,
        },
        {
          path: 'trip-description-sf',
          element: <TripDescriptionSf />,
        },
        {
          path: 'trip-description-miami',
          element: <TripDescriptionMiami />,
        },
        {
          path: 'search',
          element: <Search />,
        },
        {
          path: 'virginia-hotels',
          element: <VirginiaHotels />,
        },
        {
          path: 'lake-tahoe-hotels',
          element: <LakeTahoeHotels />,
        },
        {
          path: 'north-carolina-hotels',
          element: <NorthCarolinaHotels />,
        },
        {
          path: 'ohio-hotels',
          element: <OhioHotels />,
        },
        {
          path: '/:state/:city',
          element: <HotelSearchPage />,
        },
        {
          path: 'payment-test', // Nueva ruta para PaymentTest
          element: <PaymentTest />,
        },
        {
          path: 'test-save-reservation', // Nueva ruta para TestSaveReservation
          element: <TestSaveReservation />,
        },
        {
          path: '/confirmation', //confirmation page
          element: <ReservationReviewPage />,
        }
      ],
    },
  ]);

  return (
    <Session authURL={AUTH_URL}>
      <RouterProvider router={router} />
    </Session>
  );
}

export default App;