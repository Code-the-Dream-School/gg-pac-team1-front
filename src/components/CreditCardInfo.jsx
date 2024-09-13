import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Asegúrate de instalar react-icons
import '../styles/components/_creditcardinfo.scss';

const CreditCardInfo = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [cards, setCards] = useState([]); // Estado para almacenar las tarjetas
  const [editCard, setEditCard] = useState(null); // Estado para la tarjeta en edición

  // Función para obtener las tarjetas guardadas
  const fetchCreditCards = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/credit-cards', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Ajusta según el sistema de autenticación
        },
      });
      setCards(response.data.cards); // Actualiza el estado con las tarjetas recibidas
    } catch (err) {
      console.error(err);
      setError('Error fetching credit cards. Please try again.');
    }
  };

  // Llama a fetchCreditCards cuando el componente se monte para listar las tarjetas
  useEffect(() => {
    fetchCreditCards();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet.");
      return;
    }

    setIsProcessing(true);
    setError(null);
    setSuccessMessage('');

    try {
      // Crear el método de pago en Stripe
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (stripeError) {
        setError(stripeError.message);
        setIsProcessing(false);
        return;
      }

      // Enviar el PaymentMethod ID al backend
      const response = await axios.post(
        'http://localhost:8000/api/v1/credit-cards',
        {
          stripePaymentMethodId: paymentMethod.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Ajusta según el sistema de autenticación
          },
        }
      );

      if (response.status === 201) {
        setSuccessMessage('Card added successfully.');
        setError(null);
        fetchCreditCards(); // Vuelve a cargar las tarjetas después de agregar una nueva
      } else {
        setError('Error saving card. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Error saving card. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleUpdate = async (cardId) => {
    try {
      // Obtener la información de la tarjeta para actualizar
      const response = await axios.get(`http://localhost:8000/api/v1/credit-cards/${cardId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setEditCard(response.data.card); // Configura la tarjeta para edición
    } catch (err) {
      console.error(err);
      setError('Error fetching card details. Please try again.');
    }
  };

  const handleDelete = async (cardId) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/credit-cards/${cardId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSuccessMessage('Card deleted successfully.');
      fetchCreditCards(); // Vuelve a cargar las tarjetas después de eliminar una
    } catch (err) {
      console.error(err);
      setError('Error deleting card. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="credit-card-form">
        <div className="form-field">
          <label htmlFor="card-element">Credit Card</label>
          <CardElement id="card-element" />
        </div>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Add Card'}
        </button>
      </form>

      <h3>Saved Credit Cards</h3>
      {cards.length > 0 ? (
        <ul className="card-list">
          {cards.map((card) => (
            <li key={card.id} className="card-item">
              <div className="card-info">
                <span className="card-number">
                  **** **** **** {card.last4} {/* Mostrar solo los últimos 4 dígitos */}
                </span>
                <span className="card-expiry">
                  Exp: {card.exp_month}/{card.exp_year} {/* Mostrar la fecha de expiración */}
                </span>
              </div>
              <div className="card-actions">
                <FaEdit onClick={() => handleUpdate(card.id)} className="action-icon" title="Update" />
                <FaTrash onClick={() => handleDelete(card.id)} className="action-icon" title="Delete" />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No credit cards saved.</p>
      )}

      {editCard && (
        <div className="edit-card-form">
          <h4>Update Card</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="card-element-edit">Credit Card</label>
              <CardElement id="card-element-edit" />
            </div>
            <button type="submit" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : 'Update Card'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreditCardInfo;

