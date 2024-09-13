import React from 'react';
import Discover from '../components/Discover';
import ReviewSection from '../components/ReviewSection/ReviewSection';
import CarouselComponent from '../components/TripSection/Carousel';
import SearchForm from "../components/SearchForm";
import TravelBlog from '../components/TravelBlog/TravelBlog'; 
import BookingInfoSection from '../components/BookingInfoSection/BookingInfoSection';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSearch = (searchData) => {
    navigate('/search', { state: searchData });
  };

  return (
    <div>
      <section className="slider-section">
        <div className='form-container'>
          <div className="container">
            <SearchForm onSearch={handleSearch} />
          </div>
        </div>
      </section>

      <section className="auto-generated-section">
        <div className="container">
          <h2>Discover</h2>
          <p>Explore new and exciting destinations curated just for you.</p>
          <Discover />
        </div>
      </section>

      <section className="auto-generated-section">
        <div className="container">
          <ReviewSection />
        </div>
      </section>

      <section className="auto-generated-section">
        <div className="container">
          <h2>Trips</h2>
          <p>Plan your next adventure with our tailored trip packages.</p>
          <CarouselComponent />
        </div>
      </section>

      <section className="info-and-blog-section">
        <div className="container">
          <BookingInfoSection />
          <TravelBlog />
        </div>
      </section>
    </div>
  );
}

export default Home;
