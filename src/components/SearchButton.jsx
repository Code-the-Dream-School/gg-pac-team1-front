import React from 'react';
import { Link } from 'react-router-dom';

const SearchButton = () => (
  <div className="search-button" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    <Link to="/search">
      <button className="btn btn-secondary" style={{ backgroundColor: '#6c757d', border: 'none', padding: '10px 30px', fontSize: '1rem', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>
        Search Destinations
      </button>
    </Link>
  </div>
);

export default SearchButton;
