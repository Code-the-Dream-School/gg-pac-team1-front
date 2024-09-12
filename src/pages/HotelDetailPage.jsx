import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getHotelById, getRoomsByHotelId } from "../services/bookingServices";
import Gallery from "../gallery/Gallery";
import HotelInfo from "../components/HotelInfo";
import PoliciesAndRating from "../components/PoliciesAndRating";
import RoomTypesList from "../components/RoomTypesList";
import ChildrenSelector from "../components/ChildrenSelector";
import ReservationButton from "../components/ReservationButton"; // Import the ReservationButton component
import RoomSelector from "../components/RoomSelector"; // Import the RoomSelector component

function HotelDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to handle navigation
  const location = useLocation(); // Hook to access the location object
  const [hotelData, setHotelData] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [hasChildren, setHasChildren] = useState(false);
  const [children, setChildren] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(null); // State for selected room

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
        setIsLoading(false);
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
          setRooms(data.rooms);
        }
      })
      .catch((error) => {
        console.error("Error fetching rooms data:", error);
      });

    // Capture query parameters
    const queryParams = new URLSearchParams(location.search);
    const hasChildrenQuery = queryParams.get("hasChildren") === "true";
    const childrenQuery = queryParams.get("children") || 0;

    setHasChildren(hasChildrenQuery);
    setChildren(Number(childrenQuery));
  }, [id, navigate, location.search]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!hotelData) {
    console.log("No hotel data available"); // Log if no hotel data is available
    return null; // Render nothing while redirecting
  }

  const hotel = hotelData.hotel; // Access the nested hotel object

  const handleHasChildrenChange = (event) => {
    const value = event.target.value === "yes";
    setHasChildren(value);

    if (!value) {
      setChildren(0); // Reset the number of children if "no" is selected
    }
  };

  const handleChildrenChange = (event) => {
    const value = event.target.value;
    setChildren(value);
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room); // Update the selected room state
  };

  return (
    <div className="hotel-detail-container ">
      <h2 className="hotel-title">
        {hotel.name || "Hotel Name"}
      </h2>
      <Gallery images={hotel.galeryImage || []} />
      <h3 className="details-title">Information general</h3>
      <div className="hotel-info">
        <HotelInfo hotel={hotel} className="details-title" />
      </div>
      <div className="hotel-info">
        <PoliciesAndRating className="details-title" hotel={hotel} />
      </div>
      <h3 className="details-title">Rooms</h3>
      <RoomSelector rooms={rooms} onRoomSelect={handleRoomSelect} />{" "}
      {/* Use RoomSelector */}
      <ChildrenSelector
        className="details-title"
        hasChildren={hasChildren}
        children={children}
        handleHasChildrenChange={handleHasChildrenChange}
        handleChildrenChange={handleChildrenChange}
      />
      <div style={{ textAlign: "center" }}>
        <ReservationButton
          hotelId={id}
          hasChildren={hasChildren}
          children={children}
          selectedRoom={selectedRoom} // Pass selectedRoom as a prop
        />
      </div>
    </div>
  );
}

export default HotelDetailPage;