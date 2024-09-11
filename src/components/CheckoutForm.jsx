import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ amount, description }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // State to handle loading status

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe.js has not loaded yet.');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      setLoading(true); // Start loading state

      // Create payment method
      const { paymentMethod, error: paymentMethodError } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (paymentMethodError) {
        setError(paymentMethodError.message);
        setLoading(false); // Stop loading state
        return;
      }

      // Payment data
      const paymentData = {
        amount: amount, // Amount in cents
        currency: 'usd',
        description: description, // Formatted description
        paymentMethodId: paymentMethod.id,
      };

      // Get authentication token (e.g., from localStorage)
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Authentication token is missing.');
        setLoading(false); // Stop loading state
        return;
      }

      // Send request to backend
      const response = await fetch('http://localhost:8000/api/v1/payments/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include authorization header
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { paymentIntent } = await response.json();

      if (paymentIntent.status === 'succeeded') {
        setSuccess(true);
      } else {
        setError('Payment processing failed');
      }
    } catch (error) {
      setError('Failed to process payment. Please try again.');
    } finally {
      setLoading(false); // Stop loading state
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