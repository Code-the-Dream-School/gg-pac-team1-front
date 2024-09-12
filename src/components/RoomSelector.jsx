import React, { useState, useEffect, useMemo } from 'react';

const RoomSelector = ({ rooms, onRoomSelect }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  // useEffect se encarga de seleccionar automáticamente la primera habitación disponible
  useEffect(() => {
    if (rooms && rooms.length > 0 && !selectedRoom) {
      // Seleccionar siempre la primera habitación si no hay una seleccionada previamente
      setSelectedRoom(rooms[0]);
      onRoomSelect(rooms[0]);
    }
  }, [rooms, selectedRoom, onRoomSelect]);

  // handleRoomSelect se encarga de manejar la selección de habitaciones
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    onRoomSelect(room);
  };

  // Memorizar la lista de habitaciones para evitar cálculos innecesarios
  const roomList = useMemo(() => (
    rooms.map((room) => (
      <li 
        key={room._id}  // Usar _id como clave única para cada habitación
        className={`list-item ${selectedRoom && selectedRoom._id === room._id ? 'selected' : ''}`}
        onClick={() => handleRoomSelect(room)} // Llamar al manejador de eventos con la habitación seleccionada
      >
        <p><strong>Room Number:</strong> {room.roomNumber}</p>
      </li>
    ))
  ), [rooms, selectedRoom]);

  // Campos a mostrar en los detalles de la habitación
  const fieldsToShow = [
    'bedrooms',
    'floor',
    'currency',
    'room_cost_per_night',
    'room_types',
    'bed_type',
    'view',
    //'hotelId', // Mostrar el ID del hotel para referencia usar en la ultima parte importante
    //'roomNumber',
    //'_id'  // Identificador único de la habitación importante leonard recuerda
  ];

  return (
    <div className="room-selector-container">
      <div className="room-list">
        {rooms && rooms.length > 0 ? (
          <ul className="list">
            {roomList}
          </ul>
        ) : (
          <p>No rooms available</p>
        )}
      </div>

      {/* Mostrar los detalles de la habitación seleccionada */}
      <div className="room-details light-gray-background">
        {selectedRoom ? (
          <div className="room-detail">
            {Object.entries(selectedRoom).map(([key, value]) => (
              fieldsToShow.includes(key) && (
                <p key={key}>
                  <strong>{key.replace(/_/g, ' ')}:</strong> 
                  {typeof value === 'object' && value !== null && '$numberDecimal' in value ? value.$numberDecimal : value}
                </p>
              )
            ))}
          </div>
        ) : (
          <p>Please select a room to see the details</p>
        )}
      </div>

      {/* Mostrar la imagen de la habitación */}
      <div className="room-image">
        {selectedRoom && selectedRoom.images && selectedRoom.images.length > 0 ? (
          <img src={selectedRoom.images[0].url} alt={selectedRoom.images[0].description} style={{ width: '100%' }} />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </div>
  );
};

export default RoomSelector;