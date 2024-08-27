import React, { useState } from 'react';

const CreditCardInfo = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSave = () => {
    // Logic to save credit card information
    console.log('Credit card info saved:', { cardNumber, expiryDate, cvv });
  };

  return (
    <div className="credit-card-info">
      <h3>Credit Card Information</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleSave} className='btn-credit'>Save</button>
      </form>
    </div>
  );
};

export default CreditCardInfo;
