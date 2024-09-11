import React from 'react';

function RoomTypesList({ rooms }) {
  if (!rooms || rooms.length === 0) {
    return <p>No rooms available</p>;
  }

  return (
    <>
      <h2>Rooms</h2>
      {rooms.map((room, index) => {
        console.log('Room object:', room);
        const roomCost = room.room_cost_per_night?.$numberDecimal || room.room_cost_per_night || 'N/A';
        return (
          <div key={index} className="room-detail">
            <p><strong>Room Number:</strong> {room.roomNumber}</p>
            <p><strong>Bedrooms:</strong> {room.bedrooms}</p>
            <p><strong>Floor:</strong> {room.floor}</p>
            <p><strong>Currency:</strong> {room.currency}</p>
            <p><strong>Cost per Night:</strong> ${roomCost}</p>
            <p><strong>Room Type:</strong> {room.room_types}</p>
            <p><strong>Bed Type:</strong> {room.bed_type}</p>
            <p><strong>View:</strong> {room.view}</p>
            <h3>Room Images</h3>
            {room.images && room.images.length > 0 ? (
              room.images.map((img, imgIndex) => (
                <div key={imgIndex}>
                  <img src={img.url} alt={img.description} style={{ width: '200px' }} />
                  <p>{img.description}</p>
                </div>
              ))
            ) : (
              <p>No images available for this room</p>
            )}
          </div>
        );
      })}
    </>
  );
}

export default RoomTypesList;