import React from 'react';

function RoomTypesList({ roomTypes }) {
  return (
    <>
      <h3 className="room-types-title">Room Types</h3>
      <ul className="hotel-room-types">
        {roomTypes.map((room, index) => (
          <li key={index}>
            {room.type}: ${room.cost_per_night} per night, Bed: {room.bed_type}, View: {room.view}
          </li>
        ))}
      </ul>
    </>
  );
}

export default RoomTypesList;

