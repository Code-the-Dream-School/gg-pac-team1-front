import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HotelSearchResultCard from './HotelSearchResultCard';
import PropTypes from 'prop-types';

function ResultList({ results, hasSearched }) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const handleHotelClick = (hotelId) => {
    navigate(`/hotel/${hotelId}?${queryParams.toString()}`);
  };

  if (!hasSearched) {
    return <p>Please perform a search to see the results.</p>;
  }

  if (results.length === 0) {
    return <p>No hotels were found for the search criteria.</p>;
  }

  return (
    <div className="result-list-container">
      {results.map(hotel => {
        console.log(hotel);
        const roomCost = hotel.rooms && hotel.rooms.length > 0 && hotel.rooms[0].room_cost_per_night 
          ? parseFloat(hotel.rooms[0].room_cost_per_night.$numberDecimal) : 185; // Default value if there is no data
          
        return (
          <div key={hotel._id} onClick={() => handleHotelClick(hotel._id)}>
            <HotelSearchResultCard 
              hotel={hotel} 
              imageUrl={hotel.image && hotel.image.length > 0 ? hotel.image[0].url : 'default-image-url'} 
              roomCostPerNight={roomCost} 
            />
          </div>
        );
      })}
    </div>
  );
}

ResultList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      room_cost_per_night: PropTypes.number,
      image: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string
        })
      ),
    })
  ).isRequired,
  hasSearched: PropTypes.bool.isRequired,
};

export default ResultList;