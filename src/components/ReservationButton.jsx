import { useNavigate, useLocation } from 'react-router-dom';

const ReservationButton = ({ hotelId, hasChildren, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Añadir los parámetros adicionales
  queryParams.set('hotelId', hotelId);
  queryParams.set('hasChildren', hasChildren);
  queryParams.set('children', children);

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