import React from 'react';

const RoomsInfo = ({ rooms }) => (
  <div className="rooms-info" style={styles.section}>
    <h2 style={styles.sectionTitle}>Rooms</h2>
    {rooms && rooms.length > 0 ? (
      <ul style={styles.list}>
        {rooms.map((room, index) => (
          <li key={index} style={styles.listItem}>
            <p><strong>Room Number:</strong> {room.roomNumber}</p>
            <p><strong>Bedrooms:</strong> {room.bedrooms}</p>
            <p><strong>Floor:</strong> {room.floor}</p>
            <p><strong>Room Type:</strong> {room.room_types}</p>
            <p><strong>Bed Type:</strong> {room.bed_type}</p>
            <p><strong>View:</strong> {room.view}</p>
            <p><strong>Cost per Night:</strong> {room.room_cost_per_night?.$numberDecimal || room.room_cost_per_night}</p>
            <p><strong>Currency:</strong> {room.currency}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No rooms available</p>
    )}
  </div>
);

const styles = {
  section: {
    marginBottom: '10px',
  },
  sectionTitle: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
    marginBottom: '5px',
    color: '#555',
    fontSize: '16px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    padding: '5px 0',
    borderBottom: '1px solid #ddd',
    fontSize: '14px',
  },
};

export default RoomsInfo;