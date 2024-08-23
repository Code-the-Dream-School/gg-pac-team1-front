import { useState, useEffect } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import ResultList from '../components/HotelSearchResultList';
import Pagination from '../components/Pagination';
import HotelSearchFilter from '../components/HotelSearchFilter'; 
import tripsData from '../tripsData';

function HotelSearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [sortedResults, setSortedResults] = useState([]);
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    reviews: 0,
    roomType: '',
  });
  const [sortOption, setSortOption] = useState('price-asc');
  const [hasSearched, setHasSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 2;
  const searchData = location.state || {};

  useEffect(() => {
    if (location.state) {
      const filteredTrips = tripsData.filter(trip => {
        const matchesDestination = trip.destination.toLowerCase().includes(searchData.destination.toLowerCase());
        const matchesDates = trip.check_in_date <= searchData.checkInDate && trip.check_out_date >= searchData.checkOutDate;
        const matchesGuests = trip.guests.adults >= searchData.adults && trip.guests.children >= searchData.children;
        
        return matchesDestination && matchesDates && matchesGuests;
      });

      const hotels = filteredTrips.flatMap(trip => trip.hotels);
      setResults(hotels);
      setSortedResults(hotels);
      setHasSearched(true);
    }
  }, [location.state]);

  const handleSearch = (newSearchData) => {
    navigate('/search', { state: newSearchData });
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);
    let sorted = [...results];

    if (sortValue === 'price-asc') {
      sorted = sorted.sort((a, b) => a.room_cost_per_night - b.room_cost_per_night);
    } else if (sortValue === 'price-desc') {
      sorted = sorted.sort((a, b) => b.room_cost_per_night - a.room_cost_per_night);
    } else if (sortValue === 'reviews-desc') {
      sorted = sorted.sort((a, b) => b.reviews - a.reviews);
    }

    setSortedResults(sorted);
  };

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
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

    setSortedResults(filtered);
    setCurrentPage(1);
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = sortedResults.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="hotel-search-page-container">
      <div className="navlink-container">
        <NavLink to="/" className="navlink-home">Home</NavLink>
      </div>

      <div className="hotel-search-layout">
        <HotelSearchFilter 
          filters={filters} 
          onFilterChange={handleFilterChange} 
          onApplyFilters={applyFilters} 
        />

        <div className="results-container">
          <div className="sort-options-container">
            <label htmlFor="sort-select">Sort by</label>
            <select id="sort-select" value={sortOption} onChange={handleSortChange} className="sort-select">
              <option value="price-asc">Price (low to high)</option>
              <option value="price-desc">Price (high to low)</option>
              <option value="reviews-desc">Reviews (best to worst)</option>
            </select>
          </div>

          <ResultList results={currentResults} hasSearched={hasSearched} />

          <Pagination
            resultsPerPage={resultsPerPage}
            totalResults={sortedResults.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default HotelSearchPage;
