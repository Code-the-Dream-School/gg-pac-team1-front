import React, { useState, useEffect, useMemo } from 'react';
import HotelInfo from '../components/HotelInfo';
import ReservationSummary from '../components/ReservationSummary';
import ReservationNumber from '../components/ReservationNumber';
import DateInput from '../components/DateInput';
import AdultsInput from '../components/AdultsInput';
import ChildrenInput from '../components/ChildrenInput';
import ErrorMessage from '../components/ErrorMessage';
import useReservation from '../hooks/useReservation';
import useLoadHotelData from '../hooks/useLoadHotelData';
import useCalculateCosts from '../hooks/useCalculateCosts';

const ReservationReviewPage = () => {
  const [checkInDate, setCheckInDate] = useState(localStorage.getItem('checkInDate') || '');
  const [checkOutDate, setCheckOutDate] = useState(localStorage.getItem('checkOutDate') || '');
  const [adults, setAdults] = useState(parseInt(localStorage.getItem('adults')) || 2);
  const [children, setChildren] = useState(parseInt(localStorage.getItem('children')) || 0);
  const [selectedExtras, setSelectedExtras] = useState(JSON.parse(localStorage.getItem('selectedExtras')) || []);
  const [allExtras, setAllExtras] = useState([]); // Estado para todos los extras disponibles
  const [checkInError, setCheckInError] = useState(null);
  const [checkOutError, setCheckOutError] = useState(null);

  const { hotel, error, loadHotelData } = useLoadHotelData();
  const { totalNights, totalRoomCost, totalExtrasCost, finalTotalCost, calculateCosts } = useCalculateCosts(hotel, checkInDate, checkOutDate, selectedExtras);

  const reservationNumber = useReservation(15 * 1000); // 15 segundos para pruebas

  useEffect(() => {
    const hotelId = localStorage.getItem('hotelId');

    if (hotelId) {
      loadHotelData(hotelId);
    } else {
      setCheckInError('Hotel ID not found in localStorage');
    }
  }, []);

  useEffect(() => {
    if (hotel) {
      setAllExtras(hotel.extras || []); // Asignar los extras disponibles al estado allExtras
      calculateCosts();
    }
  }, [hotel, checkInDate, checkOutDate, selectedExtras]);

  const handleCheckInChange = (e) => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);
    localStorage.setItem('checkInDate', newCheckInDate);
  };

  const handleCheckOutChange = (e) => {
    const newCheckOutDate = e.target.value;
    setCheckOutDate(newCheckOutDate);
    localStorage.setItem('checkOutDate', newCheckOutDate);
  };

  const handleAdultsChange = (e) => {
    const newAdults = parseInt(e.target.value);
    setAdults(newAdults);
    localStorage.setItem('adults', newAdults);
  };

  const handleChildrenChange = (e) => {
    const newChildren = parseInt(e.target.value);
    setChildren(newChildren);
    localStorage.setItem('children', newChildren);
  };

  const toggleExtra = (extra) => {
    const updatedExtras = selectedExtras.includes(extra)
      ? selectedExtras.filter(e => e !== extra)
      : [...selectedExtras, extra];
    setSelectedExtras(updatedExtras);
    localStorage.setItem('selectedExtras', JSON.stringify(updatedExtras));
  };

  const memoizedCostSummary = useMemo(() => (
    <ReservationSummary
      totalNights={totalNights}
      roomCostPerNight={hotel?.room_cost_per_night || 0}
      totalRoomCost={totalRoomCost}
      selectedExtras={selectedExtras}
      totalExtrasCost={totalExtrasCost}
      finalTotalCost={finalTotalCost}
      adults={adults}
      children={children}
    />
  ), [totalNights, hotel?.room_cost_per_night, totalRoomCost, selectedExtras, totalExtrasCost, finalTotalCost, adults, children]);

  return (
    <div className="reservation-review-page">
      <h1>Review Your Reservation</h1>
      {error && <ErrorMessage error={error} />}
      {hotel ? (
        <>
          <HotelInfo hotel={hotel} />
          <div>
            <DateInput 
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              handleCheckInChange={handleCheckInChange}
              handleCheckOutChange={handleCheckOutChange}
              showCheckOut={true}
            />
            {checkInError && <ErrorMessage error={checkInError} />}
            {checkOutError && <ErrorMessage error={checkOutError} />}
            <AdultsInput 
              adults={adults}
              handleAdultsChange={handleAdultsChange}
            />
            <ChildrenInput 
              children={children}
              handleChildrenChange={handleChildrenChange}
            />
            <h3>Selected Extras:</h3>
            <ul>
              {selectedExtras.map(extra => (
                <li key={extra.id} onClick={() => toggleExtra(extra)}>
                  {extra.name}
                </li>
              ))}
            </ul>
            <h3>Deactivated Extras:</h3>
            <ul>
              {allExtras.filter(extra => !selectedExtras.includes(extra)).map(extra => (
                <li key={extra.id} onClick={() => toggleExtra(extra)} style={{ textDecoration: 'line-through' }}>
                  {extra.name}
                </li>
              ))}
            </ul>
          </div>
          {memoizedCostSummary}
        </>
      ) : (
        <p>Loading reservation summary...</p>
      )}
      <ReservationNumber reservationNumber={reservationNumber} />
      <div className="confirm-button-container">
        <button className="confirm-reservation-btn">Confirm Reservation</button>
      </div>
    </div>
  );
};

export default ReservationReviewPage;
