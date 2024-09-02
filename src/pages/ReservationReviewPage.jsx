import React, { useState, useEffect } from 'react';
import tripsData from '../tripsData';
import ReservationSummary from './ReservationSummary';

const ReservationReviewPage = () => {
  const [hotelInfo, setHotelInfo] = useState({});
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
        setHotelInfo({
          name: currentHotel.name,
          address: currentHotel.address || 'Address not available',
          category: currentHotel.category || 'Category not available',
          description: currentHotel.description || 'Description not available'
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
      <ReservationSummary
        hotelInfo={hotelInfo}
        totalNights={totalNights}
        roomCostPerNight={roomCostPerNight}
        totalRoomCost={totalRoomCost}
        selectedExtras={selectedExtras}
        totalExtrasCost={totalExtrasCost}
        finalTotalCost={finalTotalCost}
      />
      <p className="reservation-number"><strong>Reservation Number:</strong> {reservationNumber}</p>
      <div className="confirm-button-container">
        <button className="confirm-reservation-btn">Confirm Reservation</button>
      </div>
    </div>
  );
};

export default ReservationReviewPage;
