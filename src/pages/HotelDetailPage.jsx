import React from 'react'

const HotelDetailPage = () => {
  return (
    <div className="hotel-detail-container">
      {/* Título del Hotel */}
      <h1 className="hotel-title">Hotel Name</h1>

      {/* Galería de Imágenes */}
      <div className="hotel-gallery">
        <img src="path-to-image1.jpg" alt="Hotel Image 1" className="hotel-gallery-image" />
        <img src="path-to-image2.jpg" alt="Hotel Image 2" className="hotel-gallery-image" />
      </div>

      {/* Información del Hotel */}
      <div className="hotel-info">
        <p className="hotel-address">Hotel Address</p>
        {/* Otros detalles del hotel */}
      </div>

      {/* Servicios del Hotel */}
      <div className="hotel-facilities">
        <h3 className="facilities-title">Facilities</h3>
        <ul className="facilities-list">
          <li className="facility-item">Facility 1</li>
          <li className="facility-item">Facility 2</li>
          {/* Más instalaciones */}
        </ul>
      </div>

      {/* Tipos de Habitación */}
      <div className="room-types">
        <h3 className="room-types-title">Room Types</h3>
        <ul className="room-types-list">
          <li className="room-type-item">Room Type 1</li>
          <li className="room-type-item">Room Type 2</li>
        </ul>
      </div>

      {/* Políticas del Hotel */}
      <div className="hotel-policies">
        <h3 className="policies-title">Policies</h3>
        <ul className="policies-list">
          <li className="policy-item">Policy 1</li>
          <li className="policy-item">Policy 2</li>
        </ul>
      </div>

      {/* Calificación del Hotel */}
      <div className="hotel-rating">
        <h3 className="rating-title">Rating: 4.5/5</h3>
      </div>

      {/* Selección de Niños */}
      <div className="children-selection">
        <label className="children-label">
          <input type="checkbox" className="children-checkbox" />
          ¿Viaja con niños?
        </label>
        <input type="number" className="children-count-input" />
      </div>

      {/* Opciones Extra */}
      <div className="extra-options">
        <h3 className="extras-title">Extras</h3>
        <ul className="extras-list">
          <li className="extra-item">Extra 1</li>
          <li className="extra-item">Extra 2</li>
        </ul>
      </div>

      {/* Botón de Reservación */}
      <div className="reservation-button-container">
        <button className="reservation-button">Make a Reservation</button>
      </div>
    </div>

  )
}

export default HotelDetailPage