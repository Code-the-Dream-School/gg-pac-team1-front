import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importar iconos
import '../styles/components/_creditcardinfo.scss';

const CreditCardInfo = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const [cardList, setCardList] = useState([]);
  const [cardId, setCardId] = useState(null); // Guardar el ID de la tarjeta si ya está registrada
  const [showCvv, setShowCvv] = useState(false);

  const onSubmit = (data) => {
    const cardData = { 
      id: cardId || Date.now(), // Usar un timestamp para simular un ID único
      name: data.cardHolderName,
      number: data.cardNumber.replace(/-/g, ''), // Remover los guiones del número
      expiryDate: data.expiryDate, 
      cvv: data.cvv 
    };

    if (cardId) {
      // Si existe, actualizar la tarjeta
      const updatedList = cardList.map(card => 
        card.id === cardId ? cardData : card
      );
      setCardList(updatedList);
    } else {
      // Si no existe, agregar una nueva tarjeta
      setCardList([...cardList, cardData]);
    }
    clearForm();
  };

  const handleDelete = (id) => {
    const updatedList = cardList.filter(card => card.id !== id);
    setCardList(updatedList);
  };

  const handleEdit = (card) => {
    setCardId(card.id);
    reset({
      cardHolderName: card.name,
      cardNumber: card.number.replace(/(\d{4})(?=\d)/g, '$1-'),
      expiryDate: card.expiryDate,
      cvv: card.cvv
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

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remover caracteres no numéricos
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) value = `${value.slice(0, 2)}/${value.slice(2)}`;
    setValue('expiryDate', value);
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
            onChange={handleCardNumberChange} // Formatear número de tarjeta en cada cambio
          />
          {errors.cardNumber && <span className="error">Invalid card number</span>}
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            placeholder="MM/YY"
            {...register("expiryDate", { 
              required: true, 
              pattern: /^(0[1-9]|1[0-2])\/\d{2}$/
            })}
            onChange={handleExpiryDateChange} // Formatear fecha en cada cambio
          />
          {errors.expiryDate && <span className="error">Invalid expiry date</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <div className="cvv-input-container">
            <input
              type={showCvv ? "text" : "password"}
              id="cvv"
              {...register("cvv", { 
                required: true, 
                pattern: /^\d{3}$/
              })}
            />
            <button 
              type="button" 
              onClick={() => setShowCvv(!showCvv)} 
              className="show-cvv-btn"
            >
              {showCvv ? "Hide" : "Show"}
            </button>
          </div>
          {errors.cvv && <span className="error">Invalid CVV</span>}
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
          {cardList.map(card => (
            <li key={card.id}>
              <span>{card.name}</span>
              <span>**** **** **** {card.number.slice(-4)}</span>
              <button 
                type="button" 
                onClick={() => handleEdit(card)} 
                className="icon-button"
              >
                <FaEdit />
              </button>
              <button 
                type="button" 
                onClick={() => handleDelete(card.id)} 
                className="icon-button"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreditCardInfo;




