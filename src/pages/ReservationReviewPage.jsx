import React, { useState, useEffect, useMemo } from 'react';
import tripsData from '../tripsData';
import HotelInfo from '../components/HotelInfo';
import ReservationSummary from '../components/ReservationSummary';
import ReservationNumber from '../components/ReservationNumber';
import useReservation from '../hooks/useReservation';

// Componente para mostrar mensajes de error
const ErrorMessage = ({ error }) => (
  <p style={{ color: 'red' }}>Error: {error}</p>
);

// Componente para mostrar el resumen de costos
const CostSummary = ({ totalNights, roomCostPerNight, totalRoomCost, selectedExtras, totalExtrasCost, finalTotalCost }) => (
  <ReservationSummary
    totalNights={totalNights}
    roomCostPerNight={roomCostPerNight}
    totalRoomCost={totalRoomCost}
    selectedExtras={selectedExtras}
    totalExtrasCost={totalExtrasCost}
    finalTotalCost={finalTotalCost}
  />
);

const ReservationReviewPage = () => {
  const [hotel, setHotel] = useState(null);
  const [roomCostPerNight, setRoomCostPerNight] = useState(0);
  const [totalNights, setTotalNights] = useState(0);
  const [totalRoomCost, setTotalRoomCost] = useState(0);
  const [totalExtrasCost, setTotalExtrasCost] = useState(0);
  const [finalTotalCost, setFinalTotalCost] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [allExtras, setAllExtras] = useState([]); // Estado para todos los extras disponibles
  const [error, setError] = useState(null); // Estado para manejar errores

  const reservationNumber = useReservation(15 * 1000); // 15 segundos para pruebas

  // Función para cargar los datos del hotel
  const loadHotelData = (hotelId) => {
    try {
      const currentHotel = tripsData.flatMap(trip => trip.hotels).find(h => h.id === parseInt(hotelId));
      if (!currentHotel) {
        throw new Error('Hotel not found');
      }
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
      setAllExtras(currentHotel.extras || []); // Cargar todos los extras disponibles
    } catch (error) {
      setError(error.message);
    }
  };

  // Función para calcular los costos totales
  const calculateCosts = (checkInDate, checkOutDate, hotel, extras) => {
    try {
      if (!checkInDate || !checkOutDate) {
        throw new Error('Invalid check-in or check-out date');
      }
      const date1 = new Date(checkInDate);
      const date2 = new Date(checkOutDate);
      if (date1 >= date2) {
        throw new Error('Check-out date must be later than check-in date');
      }
      const differenceInTime = date2.getTime() - date1.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setTotalNights(differenceInDays);

      const roomCost = differenceInDays * (hotel.room_cost_per_night || 0);
      setTotalRoomCost(roomCost);

      let extrasCost = 0;
      extras.forEach(extra => {
        extrasCost += extra.price * differenceInDays;
      });
      setTotalExtrasCost(extrasCost);

      setFinalTotalCost(roomCost + extrasCost); // Asegurarse de sumar los costos de los extras al costo total
      setSelectedExtras(extras);
    } catch (error) {
      setError(error.message);
    }
  };

  // Manejo de la lógica de carga
  useEffect(() => {
    const hotelId = localStorage.getItem('hotelId');
    const checkInDate = localStorage.getItem('checkInDate');
    const checkOutDate = localStorage.getItem('checkOutDate');
    const storedExtras = JSON.parse(localStorage.getItem('selectedExtras') || '[]');

    if (hotelId) {
      loadHotelData(hotelId);
    } else {
      setError('Hotel ID not found in localStorage');
    }
  }, []); 

  useEffect(() => {
    if (hotel) {
      const checkInDate = localStorage.getItem('checkInDate');
      const checkOutDate = localStorage.getItem('checkOutDate');
      const storedExtras = JSON.parse(localStorage.getItem('selectedExtras') || '[]');
      
      calculateCosts(checkInDate, checkOutDate, hotel, storedExtras);
    }
  }, [hotel]); // Este `useEffect` depende de `hotel`
  
  // Función para activar/desactivar extras
  const toggleExtra = (extra) => {
    const updatedExtras = selectedExtras.includes(extra)
      ? selectedExtras.filter(e => e !== extra)
      : [...selectedExtras, extra];
    setSelectedExtras(updatedExtras);
    const checkInDate = localStorage.getItem('checkInDate');
    const checkOutDate = localStorage.getItem('checkOutDate');
    calculateCosts(checkInDate, checkOutDate, hotel, updatedExtras);
  };

  // Memorizar el resumen de costos
  const memoizedCostSummary = useMemo(() => (
    <CostSummary
      totalNights={totalNights}
      roomCostPerNight={roomCostPerNight}
      totalRoomCost={totalRoomCost}
      selectedExtras={selectedExtras}
      totalExtrasCost={totalExtrasCost}
      finalTotalCost={finalTotalCost}
    />
  ), [totalNights, roomCostPerNight, totalRoomCost, selectedExtras, totalExtrasCost, finalTotalCost]);

  return (
    <div className="reservation-review-page">
      <h1>Review Your Reservation</h1>
      {error ? (
        <ErrorMessage error={error} />
      ) : hotel ? (
        <>
          <HotelInfo hotel={hotel} />
          <div>
            <h2>Check-in: {localStorage.getItem('checkInDate')}</h2>
            <h2>Check-out: {localStorage.getItem('checkOutDate')}</h2>
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
