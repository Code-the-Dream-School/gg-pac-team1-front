
function RoomTypesList({ roomTypes }) {
  return (
    <ul className="hotel-room-types">
      {roomTypes.map((room, index) => (
        <li key={index}>
          {room.type}: ${room.cost_per_night} per night, Bed: {room.bed_type}, View: {room.view}
        </li>
      ))}
    </ul>
  );
}

export default RoomTypesList;
