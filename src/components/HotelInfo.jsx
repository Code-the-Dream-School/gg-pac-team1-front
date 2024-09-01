
function HotelInfo({ hotel }) {
  return (
    <>
      <p className="hotel-address">{hotel.address}</p>
      <p className="hotel-price">Price per night:${hotel.room_cost_per_night}</p>
      <p className="hotel-description">{hotel.description}</p>
      <p className="hotel-check-in-out">
        Check-in: {hotel.check_in_time} | Check-out: {hotel.check_out_time}
      </p>
    </>
  );
}

export default HotelInfo;