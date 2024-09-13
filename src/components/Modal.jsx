import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './Modal.css'; 

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Modal = ({ isOpen, onClose, reservationDetails }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState(''); // Añadimos el estado para el token
  const [isReservationSaved, setIsReservationSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Obtener el correo del usuario desde localStorage
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    } else {
      console.error('No user email found in localStorage');
    }

    // Obtener el userId desde localStorage
    const id = localStorage.getItem('userId');
    if (id) {
      setUserId(id);
    } else {
      console.error('No user ID found in localStorage');
    }

    // Obtener el userName desde localStorage
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    } else {
      console.error('No user name found in localStorage');
    }

    // Obtener el token desde localStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      console.log('Token:', storedToken);
    } else {
      console.error('No token found in localStorage');
      setErrorMessage('No token found in localStorage');
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
    Guest Name: ${userName}
    
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

  const validateReservationDetails = () => {
    if (!reservationDetails.checkInDate || !reservationDetails.checkOutDate) {
      return 'Check-in and check-out dates are required.';
    }
    if (!reservationDetails.adults || reservationDetails.adults < 1) {
      return 'At least one adult is required.';
    }
    if (!reservationDetails.hotelId) {
      return 'Hotel ID is required.';
    }
    if (!reservationDetails.roomId) {
      return 'Room ID is required.';
    }
    if (!reservationDetails.finalTotalCost) {
      return 'Final total cost is required.';
    }
    if (!userEmail) {
      return 'User email is required.';
    }
    return null;
  };

  const handleSaveReservation = async () => {
    const validationError = validateReservationDetails();
    if (validationError) {
      console.error('Validation Error:', validationError);
      setErrorMessage(validationError);
      return;
    }

    // Datos de la reserva
    const bookingData = {
      checkInDate: reservationDetails.checkInDate,
      check_in_time: reservationDetails.check_in_time || "3:00 PM",
      check_out_time: reservationDetails.check_out_time || "11:00 AM",
      checkOutDate: reservationDetails.checkOutDate,
      available: false,
      booked: true,
      guests: {
        adults: reservationDetails.adults,
        children: reservationDetails.children,
        children_ages: reservationDetails.children_ages || [],
      },
      currency: "USD",
      price: reservationDetails.finalTotalCost,
      guest_count: reservationDetails.adults + reservationDetails.children,
      guestEmail: userEmail,
      guestName: reservationDetails.guestName || "Guest",
      roomId: reservationDetails.roomId,
      hotelId: reservationDetails.hotelId,
      createdBy: userId || "system",
    };

    console.log('Datos de la reserva enviados:', JSON.stringify(bookingData, null, 2));

    try {
      const response = await fetch('http://localhost:8000/api/v1/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Aquí enviamos el token en los headers
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const responseData = await response.json(); // Obtenemos la respuesta en JSON del servidor
        console.log('Reserva guardada exitosamente:', responseData); // Imprimir respuesta exitosa
        setIsReservationSaved(true); // Habilitamos el pago
      } else {
        const errorData = await response.json(); // Si la respuesta no es OK, obtenemos el error
        console.error('Error al guardar la reserva:', errorData); // Mostrar error
        setErrorMessage(`Error del servidor: ${errorData.message || 'Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error durante la comunicación con el servidor:', error); // Manejar errores de red
      setErrorMessage('Error al comunicarse con el servidor');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button className="close-button" onClick={onClose}>X</button>
        <h2>Reservation Summary </h2>
        
        <div className="modal-section">
          <h3>User Details</h3>
          <p>Name: <strong>{userName}</strong></p>
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
        
   
        {/* Mostrar mensaje de error si existe */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        
        {/* Formulario de pago */}
        <Elements stripe={stripePromise}>
          <CheckoutForm 
            description={reservationSummary} 
            amount={reservationDetails.finalTotalCost}             
            disabled={!isReservationSaved} // Deshabilitamos el formulario hasta que la reserva esté guardada
          />
        </Elements>
        
        {/* Botón para ejecutar la lógica de guardar y luego pagar */}
        <button className="pay-button" onClick={handleSaveReservation}>
          Guardar y Pagar
        </button>
        
      </div>
    </div>
  );
};

export default Modal;