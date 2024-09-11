import React, { useState, useEffect } from 'react';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentHandler = ({ reservationDetails, userEmail, onPaymentSuccess }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [userId, setUserId] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Obtener el ID del usuario desde localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      setUserId(user.id);
    } else {
      console.error('No user ID found in localStorage');
      setErrorMessage('No user ID found in localStorage');
    }
  }, []);

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
    if (!reservationDetails.price) {
      return 'Final total cost is required.';
    }
    if (!userEmail) {
      return 'User email is required.';
    }
    return null;
  };

  const handlePayment = async () => {
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

    handlePaymentSuccess(paymentMethod);
  };

  const handlePaymentSuccess = async (paymentMethod) => {
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
      price: reservationDetails.price, //ok
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
        const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

        if (confirmError) {
          console.error('Error confirming card payment:', confirmError);
          setErrorMessage('Error al confirmar el pago con tarjeta');
          setSuccessMessage('');
          return;
        }

        onPaymentSuccess();
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

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm 
          description={reservationDetails.description} 
          amount={reservationDetails.price} 
          onPaymentSuccess={handlePayment} 
        />
      </Elements>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default PaymentHandler;