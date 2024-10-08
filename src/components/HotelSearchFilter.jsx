import RoomFilter from './RoomFilter';
import StarFilter from './StarFilter';
import PriceFilter from './PriceFilter'; 
import PropTypes from 'prop-types';

function HotelSearchFilter({ filters, onFilterChange}) {
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

    </div>
  );
}

HotelSearchFilter.propTypes = {
  filters: PropTypes.shape({
    priceMin: PropTypes.string,
    priceMax: PropTypes.string,
    reviews: PropTypes.number,
    roomType: PropTypes.string,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onApplyFilters: PropTypes.func.isRequired,
};

export default HotelSearchFilter;
