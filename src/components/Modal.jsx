import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './Modal.css'; // Asegúrate de crear un archivo CSS para los estilos del modal

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

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

  // Crear una constante para el contenido de texto plano
  const reservationSummary = `
    Reservation Summary
    ----------------------------------------------------------------------------
    
    User Details
    ----------------------------------------------------------------------------
    Guest Email: ${userEmail}
    
    Hotel Details
    ----------------------------------------------------------------------------
    Hotel: ${reservationDetails.hotel?.name}
    Cost per Night: $${reservationDetails.hotel?.room_cost_per_night}
    
    Reservation Details
    ----------------------------------------------------------------------------
    Reservation Number: ${reservationDetails.reservationNumber}
    Check-In Date: ${reservationDetails.checkInDate}
    Check-Out Date: ${reservationDetails.checkOutDate}
    Adults: ${reservationDetails.adults}
    Children: ${reservationDetails.children}
    Total Nights: ${reservationDetails.totalNights}
    Total Room Cost: $${reservationDetails.totalRoomCost}
    --------------------------------------
    Final Total Cost: $${reservationDetails.finalTotalCost}
  `;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Reservation Summary</h2>
        
        <div className="modal-section">
          <h3>User Details</h3>
          <p>Email: <strong>{userEmail}</strong></p>
        </div>
        
        <div className="modal-section">
          <h3>Hotel Details</h3>
          <p>Hotel: {reservationDetails.hotel?.name}</p>
          <p>Cost per Night: ${reservationDetails.hotel?.room_cost_per_night}</p>
        </div>
        
        <div className="modal-section">
          <h3>Reservation Details</h3>
          <p>Reservation Number: <strong>{reservationDetails.reservationNumber}</strong></p>
          <p>Check-In Date: <strong>{reservationDetails.checkInDate}</strong></p>
          <p>Check-Out Date: <strong>{reservationDetails.checkOutDate}</strong></p>
          <p>Adults: <strong>{reservationDetails.adults}</strong></p>
          <p>Children: <strong>{reservationDetails.children}</strong></p>
          <p>Total Nights: <strong>{reservationDetails.totalNights}</strong></p>
          <p>Total Room Cost: <strong>${reservationDetails.totalRoomCost}</strong></p>
          <p>Final Total Cost: <strong>${reservationDetails.finalTotalCost}</strong></p>
        </div>
        
        <Elements stripe={stripePromise}>
          <CheckoutForm 
            description={reservationSummary} 
            amount={reservationDetails.finalTotalCost}             
            />
        </Elements>
        
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Modal;