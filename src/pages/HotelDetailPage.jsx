import { useState, useEffect } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate(); // Hook to handle navigation
  const hotel = tripsData.flatMap(trip => trip.hotels).find(h => h.id === parseInt(id));

  const [hasChildren, setHasChildren] = useState(false); 
  const [children, setChildren] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');  
  const [checkOutDate, setCheckOutDate] = useState('');  

  useEffect(() => {
    // Redirect to 404 if hotel is not found
    if (!hotel) {
      navigate('/404');
      return;
    }

    // Save hotel id to localStorage if it has changed
    const savedHotelId = localStorage.getItem('hotelId');
    if (savedHotelId !== String(hotel.id)) {
      localStorage.setItem('hotelId', hotel.id);
    }

    // Retrieve other saved data from localStorage
    const savedHasChildren = localStorage.getItem('hasChildren');
    const savedChildren = localStorage.getItem('children');
    const savedCheckInDate = localStorage.getItem('checkInDate');
    const savedCheckOutDate = localStorage.getItem('checkOutDate');

    if (savedHasChildren) setHasChildren(JSON.parse(savedHasChildren));
    if (savedChildren) setChildren(Number(savedChildren));
    if (savedCheckInDate) setCheckInDate(savedCheckInDate);
    if (savedCheckOutDate) setCheckOutDate(savedCheckOutDate);
  }, [hotel, navigate]);

  // Function to handle changes in children selection
  const handleHasChildrenChange = (e) => {
    const value = e.target.value === 'yes';
    setHasChildren(value);
    localStorage.setItem('hasChildren', JSON.stringify(value));  

    if (!value) {
      setChildren(0);
      localStorage.setItem('children', '0');  
    }
  };

  // Function to handle number of children
  const handleChildrenChange = (e) => {
    const value = e.target.value;
    setChildren(value);
    localStorage.setItem('children', value);  
  };

  if (!hotel) {
    return null; // Render nothing while redirecting
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

      {/* Check-in and Check-out Dates */}
      <div className="date-selection">
        <p><strong>Check-in Date:</strong> {checkInDate}</p>
        <p><strong>Check-out Date:</strong> {checkOutDate}</p>
      </div>

      {/* Extra Options */}
      <HotelExtraOptions extras={hotel.extras}/>

      {/* Reservation Button */}
      <div className="reservation-button-container">
        <ReservationButton />
      </div>
    </div>
  );
}

export default HotelDetailPage;
