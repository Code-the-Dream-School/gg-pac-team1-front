import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/components/_paymentform.scss';

const PaymentForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/payments', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSuccess('Payment successful');
    } catch (err) {
      setError(err.response ? err.response.data.error : 'An error occurred while processing the payment');
    }
  };

  return (
    <div className="payment-form">
      <h3>Make a Payment</h3>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount in USD"
            {...register("amount", { 
              required: 'Amount is required', 
              min: { value: 1, message: 'Amount must be at least $1' }
            })}
          />
          {errors.amount && <span className="error">{errors.amount.message}</span>}
        </div>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentForm;

