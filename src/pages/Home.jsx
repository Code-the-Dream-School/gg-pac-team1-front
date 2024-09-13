// src/pages/Home.js
import React from 'react';
import Discover from '../components/Discover';
import ReviewSection from '../components/ReviewSection/ReviewSection';
import CarouselComponent from '../components/TripSection/Carousel';
import SearchForm from "../components/SearchForm";
import TravelBlog from '../components/TravelBlog/TravelBlog'; 
import BookingInfoSection from '../components/BookingInfoSection/BookingInfoSection'; // Import the new component

import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Initializes useNavigate to handle navigation

  // Handles search form submission
  const handleSearch = (searchData) => {
    navigate('/search', { state: searchData });  // Redirect to the search page with the data
  };

  return (
    <>
      <div>
        {/* Search Form Section */}
        <section className="slider-section">
          <div className='form-container'>
            <div className="container">
              <SearchForm onSearch={handleSearch} />
            </div>
          </div>
        </section>

        {/* Discover Section */}
        <section className="auto-generated-section">
          <div className="container">
            <h2>Discover</h2>
            <p>Explore new and exciting destinations curated just for you.</p>
            <Discover />
          </div>
        </section>

        {/* Review Section */}
        <section className="auto-generated-section">
          <div className="container">
            <ReviewSection />
          </div>
        </section>

    

        {/* Trips Section with Carousel */}

        <section className="auto-generated-section">
          <div className="container">
            <h2>Trips</h2>
            <p>Plan your next adventure with our tailored trip packages.</p>
            <CarouselComponent />
            
            {/* Add TravelBlog component here */}
            <TravelBlog />
          </div>
        </section>

            {/* Booking Info and Travel Blog Section */}
            <section className="info-and-blog-section">
          <div className="container">
            <BookingInfoSection />
            <TravelBlog />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
