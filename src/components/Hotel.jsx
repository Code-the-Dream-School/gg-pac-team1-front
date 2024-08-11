import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import '../styles/components/_hotel.scss'; // Importa el archivo SASS

const Hotel = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState('');
  const [hotels, setHotels] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    // Simular una lista de hoteles para mostrar como resultado de búsqueda
    const results = [
      {
        id: 1,
        name: 'Hotel Maravilla',
        description: 'Un hotel de lujo con vista al mar.',
        location: 'Playa del Carmen, México',
        price: '$200 por noche',
        image: 'url_imagen_1.jpg'
      },
      {
        id: 2,
        name: 'Hotel Paraíso',
        description: 'Un hotel con todo incluido en la montaña.',
        location: 'San José, Costa Rica',
        price: '$150 por noche',
        image: 'url_imagen_2.jpg'
      },
      // Agrega más hoteles si es necesario
    ];

    setHotels(results);
    setMessage('');
  };

  return (
    <div className="hotel-form-container">
      <form onSubmit={handleSearch} className="hotel-form">
        <div className="input-group">
          <FaMapMarkerAlt className="input-icon" />
          <input
            type="text"
            placeholder="Destino"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <FaCalendarAlt className="input-icon" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="number"
            placeholder="Personas"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="search-button">Buscar</button>
      </form>
      
      {message && <p className="development-message">{message}</p>}
      
      <div className="hotel-results">
        {hotels.map(hotel => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
              <p>{hotel.location}</p>
              <p className='hotel-price'>{hotel.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
