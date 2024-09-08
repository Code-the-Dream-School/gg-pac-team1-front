import HotelSearchResultCard from './HotelSearchResultCard';
import PropTypes from 'prop-types';

function ResultList({ results, hasSearched }) {
  if (!hasSearched) {
    return <p>Please perform a search to see the results.</p>;
  }

  if (results.length === 0) {
    return <p>No hotels were found for the search criteria.</p>;
  }

  return (
    <div className="result-list-container">
      {results.map(hotel => (
        <HotelSearchResultCard 
          key={hotel._id} 
          hotel={hotel} 
          imageUrl={hotel.image && hotel.image.length > 0 ? hotel.image[0].url : 'default-image-url'} 
          roomCostPerNight={hotel.room_cost_per_night || 0} //while raul fix this problem en mongo
        />
      ))}
    </div>
  );
}

ResultList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      room_cost_per_night: PropTypes.number.isRequired,
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
