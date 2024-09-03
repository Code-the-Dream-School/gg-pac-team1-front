import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/components/_addresses.scss'; // Asegúrate de tener el archivo SCSS

const Addresses = () => {
  // Estado para manejar la lista de direcciones
  const [addresses, setAddresses] = React.useState([
    '123 Main St, City, Country',
    '456 Another St, City, Country',
  ]);

  // Usar react-hook-form para manejar el formulario
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // Manejador de envío del formulario
  const onSubmit = (data) => {
    const { street, city, state, postalCode } = data;
    
    // Crear la nueva dirección formateada
    const formattedAddress = `${street}, ${city}, ${state}, ${postalCode}`;

    // Actualizar el estado con la nueva dirección
    setAddresses((prev) => [...prev, formattedAddress]);
  };

  return (
    <div className="addresses-container">
      <h3>Your Addresses</h3>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)} className="addresses-form">
        <div className="form-group">
          <label htmlFor="street">Street Address</label>
          <input
            type="text"
            id="street"
            {...register('street', { required: 'Street Address is required' })}
          />
          {errors.street && <p className="error">{errors.street.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            {...register('city', { required: 'City is required' })}
          />
          {errors.city && <p className="error">{errors.city.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            {...register('state', { required: 'State is required' })}
          />
          {errors.state && <p className="error">{errors.state.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            {...register('postalCode', { required: 'Postal Code is required' })}
          />
          {errors.postalCode && <p className="error">{errors.postalCode.message}</p>}
        </div>
        <button type="submit" className="btn-submit">Add New Address</button>
      </form>
    </div>
  );
};

export default Addresses;


