
function PriceFilter({ priceMin, priceMax, onFilterChange }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      onFilterChange(name, value);
    };
  
    return (
      <div className="filter-section">
        <label>Price:</label>
        <input 
          type="number" 
          name="priceMin" 
          placeholder="Min" 
          value={priceMin}
          onChange={handleChange}
          className="filter-input price-input"
        />
        <input 
          type="number" 
          name="priceMax" 
          placeholder="Max" 
          value={priceMax}
          onChange={handleChange}
          className="filter-input price-input"
        />
      </div>
    );
  }
  
  export default PriceFilter;
  