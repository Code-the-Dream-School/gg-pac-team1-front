import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmingPool, faUtensils, faWifi, faDumbbell, faSpa, faParking, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function HotelSearchResultCard({ hotel, imageUrl, roomCostPerNight }) {
  const getReviewColor = (reviews) => {
    if (reviews > 4) {
      return 'review-success';
    } else if (reviews >= 2.5) {
      return 'review-warning';
    } else {
      return 'review-danger';
    }
  };

  const amenities = [
    { condition: hotel.pool, icon: faSwimmingPool, title: "Piscina" },
    { condition: hotel.restaurant, icon: faUtensils, title: "Restaurante" },
    { condition: hotel.wifi, icon: faWifi, title: "Wi-Fi" },
    { condition: hotel.gym, icon: faDumbbell, title: "Gimnasio" },
    { condition: hotel.spa, icon: faSpa, title: "Spa" },
    { condition: hotel.parking?.availability, icon: faParking, title: "Estacionamiento" },
  ];

  return (
    <div className="hotel-search-result-card">
      <div className="img-container">
        <img 
          src={imageUrl}
          alt={hotel.name}
          className="card-img"
        />
      </div>

      <div className="card-body">
        <div>
          <h5 className="card-title">{hotel.name}</h5>
          <p className="card-text">{`${hotel.street}, ${hotel.city}, ${hotel.state} ${hotel.zipCode}`}</p>
          
          <div className="amenities">
            {amenities.map((amenity, index) =>
              amenity.condition ? (
                <FontAwesomeIcon
                  key={index}
                  icon={amenity.icon}
                  title={amenity.title}
                  className="icon"
                />
              ) : null
            )}
          </div>
        </div>

        <div className="footer">
          <span className={`reviews ${getReviewColor(hotel.rating)}`}>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            {hotel.rating}
          </span>
          <p className="price">
            ${roomCostPerNight} <span className="perNight">per night</span>
          </p>
        </div>

        <Link to={`/hotel/${hotel._id}`} className="details-link">See details</Link>
      </div>
    </div>
  );
}

HotelSearchResultCard.propTypes = {
  hotel: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string,
    image: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        description: PropTypes.string,
        _id: PropTypes.string,
      })
    ),
    pool: PropTypes.bool,
    restaurant: PropTypes.bool,
    wifi: PropTypes.bool,
    gym: PropTypes.bool,
    spa: PropTypes.bool,
    parking: PropTypes.shape({
      availability: PropTypes.bool,
      cost_per_day: PropTypes.number,
    }),
    rating: PropTypes.number.isRequired,
  }).isRequired,
  imageUrl: PropTypes.string.isRequired,
  roomCostPerNight: PropTypes.number.isRequired,
};

export default HotelSearchResultCard;