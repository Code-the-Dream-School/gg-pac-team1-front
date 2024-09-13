import { useNavigate, useLocation } from 'react-router-dom';

const ReservationButton = ({ hotelId, hasChildren, children, selectedRoom }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  queryParams.set('hotelId', hotelId);
  queryParams.set('hasChildren', hasChildren);
  queryParams.set('children', children);

  if (selectedRoom && selectedRoom._id) {
    queryParams.set('roomId', selectedRoom._id);
  }

  const handleReservationClick = () => {
    navigate(`/reservation-review?${queryParams.toString()}`); 
  };

  return (
    <button onClick={handleReservationClick} className="btn-primary">
      Make a Reservation
    </button>
  );
};

export default ReservationButton;