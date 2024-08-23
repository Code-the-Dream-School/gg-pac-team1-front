import React from 'react';
import { useLocation } from 'react-router-dom';


function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const city = params.get('city');

  return (
    <>
      <section id="search">
        <div className="container">
          <h2>Results for {city} (250) sort</h2>
          <p>Read what other travelers have to say about their experiences in {city}.</p>
          {/* You can render more dynamic content here based on the city */}
          <Search initialDestination={city} />
        </div>
      </section>
    </>
  );
}

export default Search;
