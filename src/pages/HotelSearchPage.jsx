import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ResultList from '../components/HotelSearchResultList';
import Pagination from '../components/Pagination';
import HotelSearchFilter from '../components/HotelSearchFilter';
import tripsData from '../tripsData';

function HotelSearchPage() {
  const { city, state } = useParams();  // Get URL parameters
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    reviews: 0,
    roomType: '',
  });
  const [sortOption, setSortOption] = useState('price-asc'); // State for sorting option
  const resultsPerPage = 2; // Number of results per page

  useEffect(() => {
    if (city && state) {
      const destination = `${city}, ${state}`.toLowerCase();
      
      // Filter hotels that match the destination
      const filteredTrips = tripsData.filter(trip => 
        trip.destination.toLowerCase().includes(destination)
      );

      const hotels = filteredTrips.flatMap(trip => trip.hotels);
      setResults(hotels);
    }
  }, [city, state]);

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    let filtered = [...results];

    const priceMin = filters.priceMin ? parseInt(filters.priceMin) : 0;
    const priceMax = filters.priceMax ? parseInt(filters.priceMax) : Infinity;

    if (priceMin) {
      filtered = filtered.filter(hotel => hotel.room_cost_per_night >= priceMin);
    }

    if (priceMax !== Infinity) {
      filtered = filtered.filter(hotel => hotel.room_cost_per_night <= priceMax);
    }

    if (filters.reviews > 0) {
      filtered = filtered.filter(hotel => hotel.reviews >= filters.reviews);
    }

    if (filters.roomType) {
      filtered = filtered.filter(hotel => hotel.room_type === filters.roomType);
    }

    setResults(filtered);
    setCurrentPage(1); // Reset to the first page after applying filters
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);

    let sortedResults = [...results];

    if (sortValue === 'price-asc') {
      sortedResults.sort((a, b) => a.room_cost_per_night - b.room_cost_per_night);
    } else if (sortValue === 'price-desc') {
      sortedResults.sort((a, b) => b.room_cost_per_night - a.room_cost_per_night);
    } else if (sortValue === 'reviews-desc') {
      sortedResults.sort((a, b) => b.reviews - a.reviews);
    }

    setResults(sortedResults);
    setCurrentPage(1); // Reset to the first page after sorting
  };

  // Get the index of the last and first hotel on the current page
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  
  // Get the hotels for the current page
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="hotel-search-page-container">
      <div className="sidebar">
        <HotelSearchFilter 
          filters={filters} 
          onFilterChange={handleFilterChange} 
          onApplyFilters={applyFilters} 
        />
      </div>

      <div className="main-content">
        <div className="sort-options-container">
          <label htmlFor="sort-select">Sort by:</label>
          <select id="sort-select" value={sortOption} onChange={handleSortChange} className="sort-select">
            <option value="price-asc">Price (low to high)</option>
            <option value="price-desc">Price (high to low)</option>
            <option value="reviews-desc">Reviews (best to worst)</option>
          </select>
        </div>

        <div className="results-container">
          <ResultList results={currentResults} hasSearched={true} />
          
          <Pagination
            resultsPerPage={resultsPerPage}
            totalResults={results.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default HotelSearchPage;
