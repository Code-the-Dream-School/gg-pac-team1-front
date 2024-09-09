import { useState, useEffect } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';
import { getHotelById, getRoomsByHotelId } from '../services/bookingServices'; // Asegúrate de tener estas funciones en tu servicio
import Gallery from '../gallery/Gallery'; // Importa el componente Gallery
import HotelInfo from '../components/HotelInfo'; // Importa el componente HotelInfo
import PoliciesAndRating from '../components/PoliciesAndRating'; // Importa el nuevo componente
import RoomTypesList from '../components/RoomTypesList'; // Importa el componente RoomTypesList

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
      
      <HotelInfo hotel={hotel} />

      <PoliciesAndRating hotel={hotel} />

      <RoomTypesList rooms={rooms} />
           
      <h2>Gallery</h2>
      <Gallery images={hotel.galeryImage || []} /> {/* Pasar las imágenes del hotel al componente Gallery */}
    </div>
  );
}

export default HotelDetailPage;