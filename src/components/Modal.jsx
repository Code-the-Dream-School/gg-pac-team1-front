import React, { useEffect, useState } from 'react';
import './Modal.css'; // Asegúrate de crear un archivo CSS para los estilos del modal

const Modal = ({ isOpen, onClose, reservationDetails }) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Obtener el correo del usuario desde localStorage
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    } else {
      console.error('No user email found in localStorage');
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Reservation Summary</h2>
        
        <div className="modal-section">
          <h3>User Details</h3>
          <p>Guest Email: <strong>{userEmail}</strong></p>
        </div>
        
        <div className="modal-section">
          <h3>Hotel Details</h3>
          <p>Hotel: <strong>{reservationDetails.hotel?.name}</strong></p>
          <p>Cost per Night: <strong>${reservationDetails.hotel?.room_cost_per_night}</strong></p>
        </div>
        
        <div className="modal-section">
          <h3>Reservation Details</h3>
          <p>Reservation Number: <strong>{reservationDetails.reservationNumber}</strong></p>
          <p>Check-In Date: <strong>{reservationDetails.checkInDate}</strong></p>
          <p>Check-Out Date: <strong>{reservationDetails.checkOutDate}</strong></p>
          <p>Adults: <strong>{reservationDetails.adults}</strong></p>
          <p>Children: <strong>{reservationDetails.children}</strong></p>
          <p>Total Nights: <strong>{reservationDetails.totalNights}</strong></p>
          <p>Final Total Cost: <strong>${reservationDetails.finalTotalCost}</strong></p>
        </div>
        
        <button className="pay-button">Pay</button>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Modal;