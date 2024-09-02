import React, { useState, useEffect } from 'react';
import tripsData from '../tripsData';

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
    <>
      <div className="reservation-review-page">
        <h1>Review Your Reservation</h1>

        <div className="reservation-summary">
          <h2 className="hotel-name">{hotelInfo.name || 'Hotel Name'}</h2>
          <div className="hotel-info">
            <p><strong>Address:</strong> {hotelInfo.address || 'Address not available'}</p>
            <p><strong>Category:</strong> {hotelInfo.category || 'Category not available'}</p>
            <p><strong>Description:</strong> {hotelInfo.description || 'Description not available'}</p>
          </div>

          <p className="stay-dates"><strong>Check-in:</strong> {localStorage.getItem('checkInDate')} - <strong>Check-out:</strong> {localStorage.getItem('checkOutDate')}</p>
          <p className="total-nights"><strong>Total Nights:</strong> <span>{totalNights}</span></p>
          
          <p className="cost-details">Room Cost: <span>{totalNights} nights * ${roomCostPerNight} per night = ${totalRoomCost}</span></p>

          <div className="extras-section">
          <h5><strong>Total extras:</strong></h5>
            <ul className="extras-list">
              {selectedExtras.map((extra, index) => (
                <li key={index}>
                  {extra.name}: <span>{totalNights} nights * ${extra.price} per day = ${extra.price * totalNights}</span>
                </li>
              ))}
            </ul>
            <p className="cost-details">Total Extras Cost: <span>${totalExtrasCost}</span></p>
          </div>

          <p className="summary-line">Total Cost: <span>${finalTotalCost}</span></p>
        </div>

        <p className="reservation-number"><strong>Reservation Number:</strong> {reservationNumber}</p>

        <div className="confirm-button-container">
          <button className="confirm-reservation-btn">Confirm Reservation</button>
        </div>
      </div>
    </>
  );
};

export default ReservationReviewPage;
