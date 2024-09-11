import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ amount, description }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para manejar el estado de carga

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe.js has not loaded yet.');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      setLoading(true); // Iniciar el estado de carga
      console.log('Creating payment method...');

      // Crear método de pago
      const { paymentMethod, error: paymentMethodError } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (paymentMethodError) {
        console.error('Error creating payment method:', paymentMethodError.message);
        setError(paymentMethodError.message);
        setLoading(false); // Detener el estado de carga
        return;
      }

      console.log('Payment method created:', paymentMethod.id);

      // Datos del pago
      const paymentData = {
        amount: amount, // Monto en centavos
        currency: 'usd',
        description: description, // Descripción formateada
        paymentMethodId: paymentMethod.id,
      };

      // Obtener el token de autenticación (por ejemplo, desde localStorage)
      const token = localStorage.getItem('token');
      console.log('Authentication token:', token); // Log para verificar el token
      if (!token) {
        console.error('No authentication token found.');
        setError('Authentication token is missing.');
        setLoading(false); // Detener el estado de carga
        return;
      }

      // Obtener el email del usuario (por ejemplo, desde localStorage)
      const userEmail = localStorage.getItem('userEmail');
      console.log('User email:', userEmail); // Log para verificar el email

      // Enviar solicitud al backend
      console.log('Sending payment data to backend...');
      const response = await fetch('http://localhost:8000/api/v1/payments/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Incluir el encabezado de autorización
        },
        body: JSON.stringify(paymentData),
      });

      console.log('Backend response received.');

      if (!response.ok) {
        console.error('Network response was not ok:', response.statusText);
        throw new Error('Network response was not ok');
      }

      const { paymentIntent } = await response.json();
      console.log('Payment intent received:', paymentIntent);

      if (paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded.');
        setSuccess(true);
      } else {
        console.error('Payment processing failed:', paymentIntent.status);
        setError('Payment processing failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error.message);
      setError('Failed to process payment. Please try again.');
    } finally {
      setLoading(false); // Detener el estado de carga
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Enviando...' : 'Pay'}
      </button>
      {error && <div>{error}</div>}
      {success && <div>Payment Successful!</div>}
    </form>
  );
};

export default CheckoutForm;