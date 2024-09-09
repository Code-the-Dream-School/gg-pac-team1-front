import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResultList from "../components/ResultList";
import Pagination from "../components/Pagination";
import HotelSearchFilter from "../components/HotelSearchFilter";
import { searchHotels, sortHotels, filterHotelsByRating } from "../services/bookingServices";

function HotelSearchPage() {
  const { city, state } = useParams();
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    priceMin: "",
    priceMax: "",
    reviews: 0, // Default value is 0 for reviews
    roomType: "",
  });
  const [sortOption, setSortOption] = useState("price-asc");
  const resultsPerPage = 2;

  // Fetch hotels when city and state are available
  useEffect(() => {
    if (city && state) {
      searchHotels(city, state).then((hotels) => {
        setResults(hotels);
        setFilteredResults(hotels); // Initialize filtered results with all hotels
      })
      .catch((error) => {
        console.error('Error fetching hotels:', error);
       });
    }
  }, [city, state]);

  // Handle filter changes
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: name === 'reviews' ? Number(value) : value,
    }));
    // Apply filters after updating
    applyFilters({
      ...filters,
      [name]: name === 'reviews' ? Number(value) : value,
    });
  };

  // Apply filters
  const applyFilters = (updatedFilters) => {
    const { reviews } = updatedFilters;
    const filteredHotels = filterHotelsByRating(results, reviews);
    setFilteredResults(filteredHotels);
    setCurrentPage(1);
  };

  // Handle sorting
  const handleSortChange = async (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);
    const sortedHotels = await sortHotels(filteredResults, sortValue);
    setFilteredResults(sortedHotels);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = filteredResults.slice(indexOfFirstResult, indexOfLastResult);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="hotel-search-page-container">
      <div className="sidebar">
        <HotelSearchFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onApplyFilters={() => applyFilters(filters)}
        />
      </div>

      <div className="main-content">
        <div className="sort-options-container">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortOption}
            onChange={handleSortChange}
            className="sort-select"
          >
            <option value="price-asc">Price (low to high)</option>
            <option value="price-desc">Price (high to low)</option>
            <option value="reviews-desc">Reviews (best to worst)</option>
            <option value="reviews-asc">Reviews (worst to best)</option>
          </select>
        </div>

        <div className="results-container">
          <ResultList results={currentResults} hasSearched={true} />
          <Pagination
            resultsPerPage={resultsPerPage}
            totalResults={filteredResults.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default HotelSearchPage;
