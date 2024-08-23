import React from 'react';
import Discover from '../components/Discover';
import Search from '../pages/Search';
import ReviewSection from '../components/ReviewSection/ReviewSection';
import CarouselComponent from '../components/TripSection/Carousel';

function Home() {
  return (
    <>
      <div>
        <section className="slider-section">
          <Search />
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
            {/* CarouselComponent added inside the Trips section */}
            <CarouselComponent />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
