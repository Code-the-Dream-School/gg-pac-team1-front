import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import '../styles/components/_creditcardinfo.scss';

const CreditCardInfo = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [cards, setCards] = useState([]);

  const fetchCreditCards = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/credit-cards', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCards(response.data.cards);
    } catch (err) {
      console.error(err);
      setError('Error fetching credit cards. Please try again.');
    }
  };

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
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (stripeError) {
        setError(stripeError.message);
        setIsProcessing(false);
        return;
      }

      const response = await axios.post(
        'http://localhost:8000/api/v1/credit-cards',
        {
          stripePaymentMethodId: paymentMethod.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.status === 201) {
        setSuccessMessage('Card added successfully.');
        setError(null);
        fetchCreditCards();
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

  const handleDelete = async (cardId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/credit-cards/${cardId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 200) {
        setSuccessMessage('Card deleted successfully.');
        fetchCreditCards();
      } else {
        setError('Error deleting card. Please try again.');
      }
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
        {successMessage && (
          <div className={`success-message ${successMessage ? 'show-success-message' : ''}`}>
            {successMessage}
          </div>
        )}
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Add Card'}
        </button>
      </form>

      <h3>Saved Credit Cards</h3>
      {cards.length > 0 ? (
        <ul className="card-list">
          {cards.map((card) => (
            <li key={card._id} className="card-item">
              <div className="card-info">
                <span className="card-number green-text">
                  **** **** **** {card.last4}
                </span>
              </div>
              <div className="card-actions">
                <FaTrash onClick={() => handleDelete(card._id)} className="action-icon delete-icon" title="Delete" />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No credit cards saved.</p>
      )}
    </div>
  );
};

export default CreditCardInfo;


