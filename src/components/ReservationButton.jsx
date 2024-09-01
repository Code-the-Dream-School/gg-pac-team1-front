import { useNavigate } from 'react-router-dom';

const ReservationButton = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/reservation-review'); 
  };

  return (
    <button onClick={handleReservationClick} className="btn-primary">
      Make a Reservation
    </button>
  );
};

export default ReservationButton;
