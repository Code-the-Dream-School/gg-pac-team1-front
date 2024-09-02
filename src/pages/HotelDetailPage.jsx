import { useState } from 'react';
import { useParams } from 'react-router-dom';
import tripsData from '../tripsData';
import Gallery from '../gallery/Gallery';
import HotelInfo from '../components/HotelInfo';
import HoteFacilities from '../components/HotelFacilities';
import RoomTypesList from '../components/RoomTypesList';
import HotelPolicies from '../components/HotelPolicies';
import PetPolicy from '../components/PetPolicy';
import HotelRating from '../components/HotelRating';
import ChildrenSelector from '../components/ChildrenSelector';
import HotelExtraOptions from '../components/HotelExtraOptions';
import ReservationButton from '../components/ReservationButton';


function HotelDetailPage() {
  const { id } = useParams();
  const hotel = tripsData.flatMap(trip => trip.hotels).find(h => h.id === parseInt(id));

  const [hasChildren, setHasChildren] = useState(false); 
  const [children, setChildren] = useState(0); 

  // children selector
  const handleHasChildrenChange = (e) => {
    setHasChildren(e.target.value === 'yes');
    if (e.target.value !== 'yes') {
      setChildren(0); // children selector
    }
  };

  // children selector
  const handleChildrenChange = (e) => {
    setChildren(e.target.value);
  };

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
        <HoteFacilities hotel={hotel} />
      </div>

      {/* Room Types */}
      <div className="hotel-room-types">
        <RoomTypesList roomTypes={hotel.room_types}/>
      </div>

      {/* Hotel Policy */}
      <div className="hotel-policies">
        <HotelPolicies hotel={hotel}/>
      </div>

      {/* Pet Policy */}
      <div className="hotel-pet-policy">
        <PetPolicy hotel={hotel}/>
      </div>

      {/* Hotel Rating */}     
      <div className="hotel-rating">
        <HotelRating rating={hotel.rating} />
      </div>

      {/* Children Selection */}
      <ChildrenSelector
       hasChildren={hasChildren}
       children={children}
       handleHasChildrenChange={handleHasChildrenChange}
       handleChildrenChange={handleChildrenChange}
      />

      {/* Extra Options */}
      <HotelExtraOptions extras={hotel.extras}/>

      {/* Reservation Button */}
      <div className="reservation-button-container">
        <ReservationButton />
      </div>
    </div>
  )
}

export default HotelDetailPage;
