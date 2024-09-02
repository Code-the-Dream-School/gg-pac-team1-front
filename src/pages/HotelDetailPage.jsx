import { useState } from 'react';
import { useParams } from 'react-router-dom';
import tripsData from '../tripsData';
import Gallery from '../gallery/Gallery';
import HotelInfo from '../components/HotelInfo';


function HotelDetailPage() {
  const { id } = useParams();
  const hotel = tripsData.flatMap(trip => trip.hotels).find(h => h.id === parseInt(id));

  // const [hasChildren, setHasChildren] = useState(false);
  // const [childrenCount, setChildrenCount] = useState(0);

  if (!hotel) {
    return <div>Hotel not found</div>;
  }
  return (
    <div className="hotel-detail-container">
      {/* Hotel Title */}
      <h1 className="hotel-title">{hotel.name}</h1>

      {/* Hotel Featured Image */}
      <div className="gallery-container">
        <Gallery />
      </div>

      {/* Hotel Information */}
      <div className="hotel-info">
        <HotelInfo hotel={hotel}/>
      </div>

      {/* Hotel Facilities */}
      <div className="hotel-facilities">
        <h3 className="facilities-title">Facilities</h3>
        <ul className="facilities-list">
          <li className="facility-item">Free Wi-Fi</li>
          <li className="facility-item">Swimming Pool</li>
          <li className="facility-item">Free Parking</li>
        </ul>
      </div>

      {/* Room Types */}
      <div className="hotel-room-types">
        <h3 className="room-types-title">Room Types</h3>
        <ul>
          <li>Single Room</li>
          <li>Double Room</li>
          <li>Suite</li>
        </ul>
      </div>

      {/* Pet Policy */}
      <div className="hotel-pet-policy">
        <h3>Pet Policy</h3>
        <p>Pets are allowed on request. Charges may apply.</p>
      </div>

      {/* Children Selection */}
      <div className="children-selection">
        <p>Children and Extra Beds</p>
        <label>
          <input type="checkbox" className="children-checkbox" />
          Include children
        </label>
        <div className="children-count">
          <label>Number of children:</label>
          <input type="number" min="0" max="5" />
        </div>
      </div>

      {/* Extra Options */}
      <div className="extra-options">
        <h3>Extra Options</h3>
        <ul>
          <li>
            <input type="checkbox" />
            Breakfast ($20)
          </li>
          <li>
            <input type="checkbox" />
            Airport Shuttle ($50)
          </li>
        </ul>
      </div>

      {/* Reservation Button */}
      <div className="reservation-button-container">
        <button className="btn-primary">Make a Reservation</button>
      </div>
    </div>
  )
}

export default HotelDetailPage;
