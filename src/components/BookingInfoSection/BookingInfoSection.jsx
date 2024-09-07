// src/components/BookingInfoSection/BookingInfoSection.js
import React from 'react';
import './BookingInfoSection.css'; // Make sure this path is correct

const BookingInfoSection = () => {
  return (
    <div className="booking-info-section">
      <div className="section our-team">
        <h2>About Us</h2>
        <p>
          Welcome to [Your Travel Agency's Name], where we specialize in making your travel experiences
          unforgettable. With years of expertise in the travel industry, our mission is to provide
          personalized and hassle-free hotel booking services. Our team of professionals is dedicated
          to offering you the best deals and ensuring a smooth booking process from start to finish.
        </p>
      </div>

      <div className="section services">
        <h2>Our Services</h2>
        <p>We offer a range of services designed to make your hotel booking experience as convenient and enjoyable as possible:</p>
        <ul>
          <li>Expert recommendations tailored to your preferences</li>
          <li>Exclusive deals and best price guarantees</li>
          <li>Flexible booking options and easy cancellations</li>
          <li>24/7 customer support for any inquiries or issues</li>
          <li>Customizable travel packages and add-ons</li>
        </ul>
      </div>

      <div className="section support">
        <h2>Customer Support</h2>
        <p>
          Our customer support team is here to assist you with any questions or concerns regarding your
          hotel bookings. We aim to provide prompt and helpful support to ensure your travel plans go
          smoothly.
        </p>
        <p>Contact us at:</p>
        <p>Email: support@yourtravelagency.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>We are available 24/7 to address any issues you may encounter.</p>
      </div>

      <div className="section location">
        <h2>Our Location</h2>
        <p>
          Our office is conveniently located to serve you better. Feel free to visit us or contact us
          for assistance with your bookings.
        </p>
        <p>Address: 456 Main Street, City, Country</p>
        <div className="map">
          {/* Embed a map here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.013815515761!2d-122.41941828468194!3d37.77492977975935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b2348a4a5%3A0x1234567890abcdef!2s456%20Main%20St%2C%20San%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1632774653057!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BookingInfoSection;
