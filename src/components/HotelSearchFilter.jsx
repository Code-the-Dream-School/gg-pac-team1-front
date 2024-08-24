import RoomFilter from './RoomFilter';
import StarFilter from './StarFilter';
import PriceFilter from './PriceFilter'; 

function HotelSearchFilter({ filters, onFilterChange, onApplyFilters }) {
  return (
    <div className="filters-container">
      <h3>Filter by</h3>

      {/* Price Filter */}
      <PriceFilter 
        priceMin={filters.priceMin}
        priceMax={filters.priceMax}
        onFilterChange={onFilterChange}
      />

      {/* Room Type Filter */}
      <RoomFilter 
        roomType={filters.roomType} 
        onFilterChange={onFilterChange} 
      />

      {/* Star Rating Filter */}
      <StarFilter 
        reviews={filters.reviews} 
        onFilterChange={onFilterChange} 
      />

      {/* Button to Apply Filters */}
      <button onClick={onApplyFilters} className="apply-filters-btn">Apply Filters</button>
    </div>
  );
}

export default HotelSearchFilter;
