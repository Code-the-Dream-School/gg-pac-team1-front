import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Modal.css'; // Asegúrate de crear un archivo CSS para los estilos del modal

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Modal = ({ isOpen, onClose, reservationDetails }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();

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
  }, []);

  if (!isOpen) return null;

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
        children_ages: reservationDetails.children_ages || [], // Faltante
      },
      currency: "USD", //ok
      price: reservationDetails.finalTotalCost, //ok
      guest_count: reservationDetails.adults + reservationDetails.children, //ok
      guestEmail: userEmail, //ok
      guestName: reservationDetails.guestName || "Guest", // Valor por defecto ok
      roomId: reservationDetails.roomId, // Incluyendo roomId
      hotelId: reservationDetails.hotelId, // Incluyendo hotelId
      createdBy: userId || "system", // Valor por defecto ok
    };

    try {
      const response = await fetch('http://localhost:8000/api/v1/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        console.log('Booking saved successfully');
        setSuccessMessage('Guardado en la base de datos');
        setErrorMessage('');

        // Obtener el clientSecret del backend
        const { clientSecret } = await response.json();

        // Proceder con el pago
        handlePayment(clientSecret);
      } else {
        const errorData = await response.json();
        console.error('Failed to save booking:', errorData);
        setErrorMessage('No se ha podido guardar en la base de datos');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setErrorMessage('Error al comunicarse con el servidor');
      setSuccessMessage('');
    }
  };

  const handlePayment = async (clientSecret) => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Error creating payment method:', error);
      setErrorMessage('Error al crear el método de pago');
      return;
    }

    const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
      console.error('Error confirming card payment:', confirmError);
      setErrorMessage('Error al confirmar el pago con tarjeta');
      setSuccessMessage('');
      return;
    }

    // Enviar el correo electrónico aquí
    sendEmail();

    setSuccessMessage('Pago realizado con éxito');
    setErrorMessage('');
    onClose(); // Cerrar el modal después del pago exitoso
  };

  const sendEmail = async () => {
    // Implementa la lógica para enviar el correo electrónico aquí
    console.log('Enviando correo electrónico...');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Reservation Summary</h2>
        
        <div className="modal-section">
          <h3>User Details</h3>
          <p>Name: <strong>{userName}</strong></p>
          <p>Email: <strong>{userEmail}</strong></p>
          <p>User ID: <strong>{userId}</strong></p>
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
        
        <div className="modal-section" style={{ fontSize: '0.5rem' }}>
          <h3 style={{ fontSize: '8px', margin: '1px 0' }}>IDs</h3>
          <p style={{ margin: '1px 0', fontSize: '8px' }}>Hotel ID: <strong>{reservationDetails.hotelId}</strong></p>
          <p style={{ margin: '1px 0', fontSize: '8px' }}>Room ID: <strong>{reservationDetails.roomId}</strong></p>
          <p style={{ margin: '1px 0', fontSize: '8px' }}>User ID: <strong>{userId}</strong></p>
        </div>  
        
        <Elements stripe={stripePromise}>
          <form onSubmit={(e) => { e.preventDefault(); handleSaveReservation(); }}>
            <CardElement />
            <button type="submit" disabled={!stripe}>Pay</button>
          </form>
        </Elements>
        
        <button className="close-button" onClick={onClose}>X</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
    </div>
  );
};

export default Modal;