import React, { useState, useEffect } from 'react';
import tripsData from '../tripsData';
import HotelInfo from '../components/HotelInfo';
import ReservationSummary from '../components/ReservationSummary';

const ReservationReviewPage = () => {
  const [hotel, setHotel] = useState(null);
  const [roomCostPerNight, setRoomCostPerNight] = useState(0);
  const [totalNights, setTotalNights] = useState(0);
  const [reservationNumber, setReservationNumber] = useState('N/A');
  const [totalRoomCost, setTotalRoomCost] = useState(0);
  const [totalExtrasCost, setTotalExtrasCost] = useState(0);
  const [finalTotalCost, setFinalTotalCost] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState([]);

  useEffect(() => {
    const storedReservationNumber = localStorage.getItem('reservationNumber');
    const hotelId = localStorage.getItem('hotelId');
    const checkInDate = localStorage.getItem('checkInDate');
    const checkOutDate = localStorage.getItem('checkOutDate');
    const storedExtras = JSON.parse(localStorage.getItem('selectedExtras') || '[]');

    if (storedReservationNumber) {
      setReservationNumber(storedReservationNumber);
    }

    let currentHotel = null;

    if (hotelId) {
      currentHotel = tripsData.flatMap(trip => trip.hotels).find(h => h.id === parseInt(hotelId));
      if (currentHotel) {
        setHotel({
          name: currentHotel.name,
          address: currentHotel.address || 'Address not available',
          category: currentHotel.category || 'Category not available',
          description: currentHotel.description || 'Description not available',
          room_cost_per_night: currentHotel.room_cost_per_night,
          check_in_time: currentHotel.check_in_time,
          check_out_time: currentHotel.check_out_time
        });
        setRoomCostPerNight(currentHotel.room_cost_per_night || 0);
      }
    }

    if (checkInDate && checkOutDate && currentHotel) {
      const date1 = new Date(checkInDate);
      const date2 = new Date(checkOutDate);
      const differenceInTime = date2.getTime() - date1.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setTotalNights(differenceInDays);

      const roomCost = differenceInDays * (currentHotel.room_cost_per_night || 0);
      setTotalRoomCost(roomCost);

      let extrasCost = 0;
      storedExtras.forEach(extra => {
        extrasCost += extra.price * differenceInDays;
      });
      setTotalExtrasCost(extrasCost);

      setFinalTotalCost(roomCost + extrasCost);

      setSelectedExtras(storedExtras);
    }
  }, []);

  return (
    <div className="reservation-review-page">
      <h1>Review Your Reservation</h1>
      {hotel ? (
        <>
          <HotelInfo hotel={hotel} />
          <ReservationSummary
            totalNights={totalNights}
            roomCostPerNight={roomCostPerNight}
            totalRoomCost={totalRoomCost}
            selectedExtras={selectedExtras}
            totalExtrasCost={totalExtrasCost}
            finalTotalCost={finalTotalCost}
          />
        </>
      ) : (
        <p>Loading reservation summary...</p>
      )}
      <p className="reservation-number"><strong>Reservation Number:</strong> {reservationNumber}</p>
      <div className="confirm-button-container">
        <button className="confirm-reservation-btn">Confirm Reservation</button>
      </div>
    </div>
  );
};

export default ReservationReviewPage;
