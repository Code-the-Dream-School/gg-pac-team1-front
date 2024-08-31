import React from 'react'

const HotelDetailPage = () => {
  return (
    <div className="hotel-detail-container">
      {/* Título del Hotel */}
      <h1 className="hotel-title">Hotel Name</h1>

      {/* Imagen Destacada del Hotel */}
      <div className="hotel-detail-img-container">
        <img src="path-to-image.jpg" alt="Hotel Image" />
      </div>

      {/* Información del Hotel */}
      <div className="hotel-info">
        <p className="hotel-address">Hotel Address</p>
        <p className="hotel-price">$200 per night</p>
        <p className="hotel-description">
          This is a description of the hotel. It includes details about the hotel's
          features and amenities.
        </p>
        <p className="hotel-check-in-out">
          Check-in: 3:00 PM | Check-out: 11:00 AM
        </p>
      </div>

      {/* Instalaciones del Hotel */}
      <div className="hotel-facilities">
        <h3 className="facilities-title">Facilities</h3>
        <ul className="facilities-list">
          <li className="facility-item">Free Wi-Fi</li>
          <li className="facility-item">Swimming Pool</li>
          <li className="facility-item">Free Parking</li>
        </ul>
      </div>

      {/* Tipos de Habitación */}
      <div className="hotel-room-types">
        <h3 className="room-types-title">Room Types</h3>
        <ul>
          <li>Single Room</li>
          <li>Double Room</li>
          <li>Suite</li>
        </ul>
      </div>

      {/* Políticas de Mascotas */}
      <div className="hotel-pet-policy">
        <h3>Pet Policy</h3>
        <p>Pets are allowed on request. Charges may apply.</p>
      </div>

      {/* Selección de Niños */}
      <div className="children-selection">
        <p>Children and Extra Beds</p>
        <label>
          <input type="checkbox" className="children-checkbox" />
          Include children
        </label>
        <div className="children-count">
          <label>Number of children:</label>
          <input type="number" min="0" max="5" />
        </div>
      </div>

      {/* Opciones Extra */}
      <div className="extra-options">
        <h3>Extra Options</h3>
        <ul>
          <li>
            <input type="checkbox" />
            Breakfast ($20)
          </li>
          <li>
            <input type="checkbox" />
            Airport Shuttle ($50)
          </li>
        </ul>
      </div>

      {/* Botón de Reservación */}
      <div className="reservation-button-container">
        <button className="btn-primary">Make a Reservation</button>
      </div>
    </div>


  )
}

export default HotelDetailPage