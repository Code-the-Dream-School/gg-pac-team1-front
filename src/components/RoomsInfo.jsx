import React from 'react';

const RoomsInfo = ({ rooms, className }) => (
  <div className={`rooms-info ${className}`}>
    <h3>Rooms</h3>
    {rooms && rooms.length > 0 ? (
      <>
        {rooms.map((room, index) => (
          <div key={index}>
            <p><strong>Room Number:</strong> {room.roomNumber}</p>
            <p><strong>Bedrooms:</strong> {room.bedrooms}</p>
            <p><strong>Floor:</strong> {room.floor}</p>
            <p><strong>Room Type:</strong> {room.room_types}</p>
            <p><strong>Bed Type:</strong> {room.bed_type}</p>
            <p><strong>View:</strong> {room.view}</p>
            <p><strong>Cost per Night:</strong> {room.room_cost_per_night?.$numberDecimal || room.room_cost_per_night}</p>
            <p><strong>Currency:</strong> {room.currency}</p>
          </div>
        ))}
      </>
    ) : (
      <p>No rooms available</p>
    )}
  </div>
);

export default RoomsInfo;