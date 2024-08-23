import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => (
  <div className="back-button" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
    <Link to="/">
      <button className="btn btn-primary mt-3" style={{ backgroundColor: '#007bff', border: 'none', padding: '10px 30px', fontSize: '1rem', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>
        Back to Discover
      </button>
    </Link>
  </div>
);

export default BackButton;
