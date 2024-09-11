import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Cargar Stripe con tu clave pública desde las variables de entorno
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// Función para manejar el envío del formulario
export const handlePaymentSubmit = async (data, setError, setSuccess, reset, setCardId, setCardList) => {
  const stripe = await stripePromise;

  try {
    // Crear método de pago con Stripe antes de enviarlo al backend
    const paymentMethodResponse = await stripe.createPaymentMethod({
      type: 'card',
      card: {
        number: data.cardNumber,
        exp_month: data.expiryDate.split('/')[0],
        exp_year: data.expiryDate.split('/')[1],
        cvc: data.cvv,
      },
    });

    if (paymentMethodResponse.error) {
      setError(paymentMethodResponse.error.message);
      return;
    }

    const stripePaymentMethodId = paymentMethodResponse.paymentMethod.id;

    // Enviar el ID del método de pago al backend para crear la tarjeta
    await axios.post('http://localhost:8000/api/v1/credit-cards', { 
      stripePaymentMethodId 
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    setSuccess('Card added successfully');
    reset();
    setCardId(null);

    // Recargar la lista de tarjetas
    const response = await axios.get('http://localhost:8000/api/v1/credit-cards', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    setCardList(response.data.cards || []);

  } catch (err) {
    setError(err.response ? err.response.data.error : 'An error occurred while processing the request');
  }
};

