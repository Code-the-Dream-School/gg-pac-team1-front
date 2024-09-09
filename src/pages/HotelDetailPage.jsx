import { useState, useEffect } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';
import { getHotelById, getRoomsByHotelId } from '../services/bookingServices'; // Asegúrate de tener estas funciones en tu servicio
import Gallery from '../gallery/Gallery'; // Importa el componente Gallery

function HotelDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to handle navigation
  const [hotelData, setHotelData] = useState(null);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    console.log('Fetching hotel data for ID:', id); // Log the ID being fetched
    // Fetch hotel data from API
    getHotelById(id).then((data) => {
      console.log('Hotel data received:', data); // Log the data received
      if (!data) {
        navigate('/404');
        return;
      }
      setHotelData(data);
    }).catch((error) => {
      console.error('Error fetching hotel data:', error);
      navigate('/404');
    });

    // Fetch rooms data from API
    getRoomsByHotelId(id).then((data) => {
      console.log('Rooms data received:', data); // Log the data received
      if (!data || data.length === 0) {
        console.log('No rooms data available');
      } else {
        setRooms(data.rooms); // Asegúrate de acceder al array de habitaciones correctamente
      }
    }).catch((error) => {
      console.error('Error fetching rooms data:', error);
    });
  }, [id, navigate]);

  if (!hotelData) {
    console.log('No hotel data available'); // Log if no hotel data is available
    return null; // Render nothing while redirecting
  }
  
  const hotel = hotelData.hotel; // Access the nested hotel object
  console.log('Hotel object:', hotel);
  console.log('Rooms array:', rooms);

  return (
    <div className="hotel-detail-container">
      {console.log('Rendering hotel data:', hotel)}
      <h1 className="hotel-title">{hotel.name}</h1>
      <p><strong>Address:</strong> {hotel.street}, {hotel.city}, {hotel.state}, {hotel.zipCode}</p>
      <p><strong>Brand:</strong> {hotel.brand}</p>
      <p><strong>Chain:</strong> {hotel.chain}</p>
      <p><strong>Stars:</strong> {hotel.stars}</p>
      
      <h2>Services and Facilities</h2>
      <p><strong>WiFi:</strong> {hotel.wifi ? 'Yes' : 'No'}</p>
      <p><strong>Ocean View:</strong> {hotel.okeanView ? 'Yes' : 'No'}</p>
      <p><strong>Pool:</strong> {hotel.pool ? 'Yes' : 'No'}</p>
      <p><strong>Gym:</strong> {hotel.gym ? 'Yes' : 'No'}</p>
      <p><strong>Spa:</strong> {hotel.spa ? 'Yes' : 'No'}</p>
      <p><strong>Restaurant:</strong> {hotel.restaurant ? 'Yes' : 'No'}</p>
      <p><strong>Parking Availability:</strong> {hotel.parking.aviability ? 'Yes' : 'No'}</p>
      <p><strong>Parking Cost per Day:</strong> ${hotel.parking.cost_per_day}</p>
      
      <h2>Policies and Rating</h2>
      <p><strong>Cancellation Policy:</strong> {hotel.cancelation_policy}</p>
      <p><strong>Rating:</strong> {hotel.rating}</p>
      <p><strong>Languages Spoken:</strong> {hotel.languages_spoken.join(', ')}</p>
      
      <h2>Rooms</h2>
      {rooms && rooms.length > 0 ? (
        rooms.map((room, index) => {
          console.log('Room object:', room);
          const roomCost = room.room_cost_per_night?.$numberDecimal || room.room_cost_per_night || 'N/A';
          return (
            <div key={index} className="room-detail">
              <p><strong>Room Number:</strong> {room.roomNumber}</p>
              <p><strong>Bedrooms:</strong> {room.bedrooms}</p>
              <p><strong>Floor:</strong> {room.floor}</p>
              <p><strong>Currency:</strong> {room.currency}</p>
              <p><strong>Cost per Night:</strong> ${roomCost}</p>
              <p><strong>Room Type:</strong> {room.room_types}</p>
              <p><strong>Bed Type:</strong> {room.bed_type}</p>
              <p><strong>View:</strong> {room.view}</p>
              <h3>Room Images</h3>
              {room.images && room.images.length > 0 ? (
                room.images.map((img, imgIndex) => (
                  <div key={imgIndex}>
                    <img src={img.url} alt={img.description} style={{ width: '200px' }} />
                    <p>{img.description}</p>
                  </div>
                ))
              ) : (
                <p>No images available for this room</p>
              )}
            </div>
          );
        })
      ) : (
        <p>No rooms available</p>
      )}

      <h2>Gallery</h2>
      <Gallery images={hotel.galeryImage || []} /> {/* Pasar las imágenes del hotel al componente Gallery */}
    </div>
  );
}

export default HotelDetailPage;