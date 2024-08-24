import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmingPool, faUtensils, faWifi, faDumbbell, faSpa, faParking, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function HotelSearchResultCard({ hotel }) {
  // Funtion color review
  const getReviewColor = (reviews) => {
    if (reviews > 4) {
      return 'review-success'; // Green
    } else if (reviews >= 2.5) {
      return 'review-warning'; // Yellow
    } else {
      return 'review-danger'; // Red
    }
  };

  const amenities = [
    { condition: hotel.pool, icon: faSwimmingPool, title: "Piscina" },
    { condition: hotel.restaurant, icon: faUtensils, title: "Restaurante" },
    { condition: hotel.wifi?.available, icon: faWifi, title: "Wi-Fi" },
    { condition: hotel.gym, icon: faDumbbell, title: "Gimnasio" },
    { condition: hotel.spa, icon: faSpa, title: "Spa" },
    { condition: hotel.parking?.available, icon: faParking, title: "Estacionamiento" },
  ];

  return (
    <div className="hotel-search-result-card">
      {/* Image on the left */}
      <div className="img-container">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="card-img"
        />
      </div>

      {/* Content on the right */}
      <div className="card-body">
        {/* Título y Dirección */}
        <div>
          <h5 className="card-title">{hotel.name}</h5>
          <p className="card-text">{hotel.address}</p>
          
          {/* Single line convenience icons */}
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

        {/* Reviews on the left and Cost on the right */}
        <div className="footer">
          <span className={`reviews ${getReviewColor(hotel.rating)}`}>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            {hotel.rating}
          </span>
          <p className="price">
            ${hotel.room_cost_per_night} <span className="perNight">per night</span>
          </p>
        </div>

        {/* Enlace para ver detalles */}
        <Link to={`/hotel/${hotel.id}`} className="details-link">See details</Link>
      </div>
    </div>
  );
}

export default HotelSearchResultCard;
