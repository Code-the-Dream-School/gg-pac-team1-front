import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResultList from "../components/HotelSearchResultList";
import Pagination from "../components/Pagination";
import HotelSearchFilter from "../components/HotelSearchFilter";
import {
  searchHotels,
  filterHotels,
  sortHotels,
} from "../services/bookingServices";

function HotelSearchPage() {
  const { city, state } = useParams(); // Get URL parameters
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]); // Filtered results state
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    priceMin: "",
    priceMax: "",
    reviews: 0,
    roomType: "",
  });
  const [sortOption, setSortOption] = useState("price-asc"); // State for sorting option
  const resultsPerPage = 2; // Number of results per page

  // Effect to search hotels by city and state
  useEffect(() => {
    if (city && state) {
      // Call the searchHotels function to fetch hotels
      searchHotels(city, state).then((hotels) => {
        setResults(hotels);
        setFilteredResults(hotels); // Initialize filtered results with all hotels
      });
    }
  }, [city, state]);

  // Handle filter changes
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Apply filters using filterHotels from bookingServices.js
  const applyFilters = () => {
    filterHotels(results, filters).then((filteredHotels) => {
      setFilteredResults(filteredHotels);
      setCurrentPage(1); // Reset to the first page after applying filters
    });
  };

  // Handle sorting using sortHotels from bookingServices.js
  const handleSortChange = async (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);

    // Sort the filtered results and update the state
    const sortedHotels = await sortHotels(filteredResults, sortValue);
    setFilteredResults(sortedHotels); // Ensure state is updated with sorted results
    setCurrentPage(1); // Reset to the first page after sorting
  };

  // Get the index of the last and first hotel on the current page
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;

  // Get the hotels for the current page
  const currentResults = filteredResults.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

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
            {/* Add more options here */}
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
