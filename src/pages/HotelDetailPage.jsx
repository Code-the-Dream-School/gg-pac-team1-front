import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getHotelById, getRoomsByHotelId } from "../services/bookingServices";
import Gallery from "../gallery/Gallery";
import HotelInfo from "../components/HotelInfo";
import PoliciesAndRating from "../components/PoliciesAndRating";
import RoomTypesList from "../components/RoomTypesList";
import ChildrenSelector from '../components/ChildrenSelector'; 

function HotelDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to handle navigation
  const [hotelData, setHotelData] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [hasChildren, setHasChildren] = useState(false);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    console.log("Fetching hotel data for ID:", id); // Log the ID being fetched
    // Fetch hotel data from API
    getHotelById(id)
      .then((data) => {
        console.log("Hotel data received:", data); // Log the data received
        if (!data) {
          navigate("/404");
          return;
        }
        setHotelData(data);
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
        navigate("/404");
      });

    // Fetch rooms data from API
    getRoomsByHotelId(id)
      .then((data) => {
        console.log("Rooms data received:", data); // Log the data received
        if (!data || data.length === 0) {
          console.log("No rooms data available");
        } else {
          setRooms(data.rooms); // Asegúrate de acceder al array de habitaciones correctamente
        }
      })
      .catch((error) => {
        console.error("Error fetching rooms data:", error);
      });
  }, [id, navigate]);

  if (!hotelData) {
    console.log("No hotel data available"); // Log if no hotel data is available
    return null; // Render nothing while redirecting
  }

  const hotel = hotelData.hotel; // Access the nested hotel object
  
  const handleHasChildrenChange = (event) => {
    setHasChildren(event.target.value === 'yes');
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  return (
    <div className="hotel-detail-container">
      <h2 className="hotel-name">{hotel.name || 'Hotel Name'}</h2>
      <Gallery images={hotel.galeryImage || []} />
      <HotelInfo hotel={hotel} />
      <PoliciesAndRating hotel={hotel} />
      <RoomTypesList rooms={rooms} />
      <ChildrenSelector
        hasChildren={hasChildren}
        children={children}
        handleHasChildrenChange={handleHasChildrenChange}
        handleChildrenChange={handleChildrenChange}
      />
    </div>
  );
}

export default HotelDetailPage;
