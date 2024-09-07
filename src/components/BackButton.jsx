import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => (
  <div className="back-button" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
    <Link to="/">
      <button className="btn btn-primary mt-3" style={buttonStyles}>
        Back to Discover
      </button>
    </Link>
  </div>
);

// Styles for the button
const buttonStyles = {
  backgroundColor: '#007bff', /* Primary color */
  color: '#fff', /* Text color */
  border: 'none', /* Remove border */
  padding: '10px 20px', /* Increased padding for a rectangular shape */
  fontSize: '0.9rem', /* Smaller font size */
  borderRadius: '4px', /* Slightly rounded corners for a rectangle */
  cursor: 'pointer', /* Pointer cursor on hover */
  transition: 'background-color 0.3s ease, transform 0.3s ease', /* Smooth transition */
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', /* Subtle shadow */
  fontWeight: '500', /* Medium text weight */
  textTransform: 'uppercase', /* Uppercase text for emphasis */
};

export default BackButton;
