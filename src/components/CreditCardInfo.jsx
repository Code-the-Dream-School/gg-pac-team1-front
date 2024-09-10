import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../styles/components/_creditcardinfo.scss';

const getAuthToken = () => {
  return localStorage.getItem('token'); // Ajustar según tu implementación de autenticación
};

const CreditCardInfo = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const [cardList, setCardList] = useState([]); // Inicializa como un array vacío
  const [cardId, setCardId] = useState(null);
  const [showCvv, setShowCvv] = useState(false);

  const token = getAuthToken(); // Obtener token para autenticación

  // Función para obtener tarjetas de crédito del backend
  const fetchCreditCards = async () => {
    try {
      const response = await axios.get('/api/credit-cards', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Asegúrate de que `response.data.cards` es un array antes de usarlo
      setCardList(Array.isArray(response.data.cards) ? response.data.cards : []);
    } catch (error) {
      console.error('Error fetching credit cards:', error.response?.data?.error || error.message);
      setCardList([]); // Asegúrate de que siempre sea un array en caso de error
    }
  };

  useEffect(() => {
    fetchCreditCards();
  }, []);

  // Función para guardar o actualizar una tarjeta
  const onSubmit = async (data) => {
    const cardData = {
      stripePaymentMethodId: data.cardNumber.replace(/-/g, ''), // Simulación del ID de método de pago
    };

    try {
      if (cardId) {
        // Si estamos editando una tarjeta, se puede agregar lógica para actualizarla
      } else {
        const response = await axios.post('/api/credit-cards', cardData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCardList([...cardList, response.data.card]); // Actualiza la lista de tarjetas
      }
      clearForm();
    } catch (error) {
      console.error('Error saving credit card:', error.response?.data?.error || error.message);
    }
  };

  // Función para eliminar una tarjeta
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/credit-cards/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCardList(cardList.filter(card => card._id !== id)); // Filtrar las tarjetas eliminadas
    } catch (error) {
      console.error('Error deleting credit card:', error.response?.data?.error || error.message);
    }
  };

  const handleEdit = (card) => {
    setCardId(card._id);
    reset({
      cardHolderName: card.name,
      cardNumber: card.stripePaymentMethodId.replace(/(\d{4})(?=\d)/g, '$1-'),
    });
  };

  const clearForm = () => {
    setCardId(null);
    reset();
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remover caracteres no numéricos
    if (value.length > 16) value = value.slice(0, 16);
    value = value.replace(/(\d{4})(?=\d)/g, '$1-'); // Insertar guiones cada 4 dígitos
    setValue('cardNumber', value);
  };

  return (
    <div className="credit-card-info">
      <h3>Credit Card Information</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="cardHolderName">Card Holder Name</label>
          <input
            type="text"
            id="cardHolderName"
            {...register("cardHolderName", { 
              required: true, 
              minLength: 2 
            })}
          />
          {errors.cardHolderName && <span className="error">Name must be at least 2 characters</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="0000-0000-0000-0000"
            {...register("cardNumber", { 
              required: true, 
              pattern: /^\d{4}-\d{4}-\d{4}-\d{4}$/
            })}
            onChange={handleCardNumberChange}
          />
          {errors.cardNumber && <span className="error">Invalid card number</span>}
        </div>
        <div className="form-buttons">
          <button type="submit" className="btn-credit">
            {cardId ? "Update" : "Save"}
          </button>
          {cardId && (
            <button type="button" onClick={clearForm} className="btn-credit">
              Clear
            </button>
          )}
        </div>
      </form>
      <div className="card-list">
        <h4>Saved Cards</h4>
        <ul>
          {/* Asegúrate de que `cardList` es un array antes de mapear */}
          {cardList.length > 0 ? (
            cardList.map(card => (
              <li key={card._id}>
                <span>**** **** **** {card.stripePaymentMethodId.slice(-4)}</span>
                <button 
                  type="button" 
                  onClick={() => handleEdit(card)} 
                  className="icon-button"
                >
                  <FaEdit />
                </button>
                <button 
                  type="button" 
                  onClick={() => handleDelete(card._id)} 
                  className="icon-button"
                >
                  <FaTrash />
                </button>
              </li>
            ))
          ) : (
            <li>No saved cards found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CreditCardInfo;









