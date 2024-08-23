
function RoomFilter({ roomType, onFilterChange }) {
    const handleChange = (e) => {
      onFilterChange('roomType', e.target.value);
    };
  
    return (
      <div className="filter-section">
        <label>Room Type:</label>
        <select 
          name="roomType" 
          value={roomType} 
          onChange={handleChange}
          className="filter-select"
        >
          <option value="">All</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
      </div>
    );
  }
  
  export default RoomFilter;
  