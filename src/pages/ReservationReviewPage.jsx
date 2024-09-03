import React, { useState, useEffect, useMemo } from "react";
import tripsData from "../tripsData";
import HotelInfo from "../components/HotelInfo";
import ReservationSummary from "../components/ReservationSummary";
import ReservationNumber from "../components/ReservationNumber";
import DateInput from "../components/DateInput"; // Importar el componente DateInput
import useReservation from "../hooks/useReservation";
import { FaUser, FaChild } from "react-icons/fa";

// Componente para mostrar mensajes de error
const ErrorMessage = ({ error }) => <p style={{ color: "red" }}>{error}</p>;

const ReservationReviewPage = () => {
  const [hotel, setHotel] = useState(null);
  const [roomCostPerNight, setRoomCostPerNight] = useState(0);
  const [totalNights, setTotalNights] = useState(0);
  const [totalRoomCost, setTotalRoomCost] = useState(0);
  const [totalExtrasCost, setTotalExtrasCost] = useState(0);
  const [finalTotalCost, setFinalTotalCost] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [allExtras, setAllExtras] = useState([]); // Estado para todos los extras disponibles
  const [checkInDate, setCheckInDate] = useState(
    localStorage.getItem("checkInDate") || ""
  );
  const [checkOutDate, setCheckOutDate] = useState(
    localStorage.getItem("checkOutDate") || ""
  );
  const [adults, setAdults] = useState(
    parseInt(localStorage.getItem("adults")) || 2
  ); // Estado para el número de adultos
  const [children, setChildren] = useState(
    parseInt(localStorage.getItem("children")) || 0
  ); // Estado para el número de niños
  const [checkInError, setCheckInError] = useState(null); // Estado para manejar errores de check-in
  const [checkOutError, setCheckOutError] = useState(null); // Estado para manejar errores de check-out
  const [error, setError] = useState(null); // Estado para manejar errores generales

  const reservationNumber = useReservation(15 * 1000); // 15 segundos para pruebas

  // Función para cargar los datos del hotel
  const loadHotelData = (hotelId) => {
    try {
      const currentHotel = tripsData
        .flatMap((trip) => trip.hotels)
        .find((h) => h.id === parseInt(hotelId));
      if (!currentHotel) {
        throw new Error("Hotel not found");
      }
      setHotel({
        name: currentHotel.name,
        address: currentHotel.address || "Address not available",
        category: currentHotel.category || "Category not available",
        description: currentHotel.description || "Description not available",
        room_cost_per_night: currentHotel.room_cost_per_night,
        check_in_time: currentHotel.check_in_time,
        check_out_time: currentHotel.check_out_time,
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
        throw new Error("Invalid check-in or check-out date");
      }
      const date1 = new Date(checkInDate);
      const date2 = new Date(checkOutDate);
      if (date1 >= date2) {
        setCheckOutError("Check-out date must be later than check-in date");
        return;
      }
      setCheckOutError(null); // Limpiar el error si las fechas son válidas

      const differenceInTime = date2.getTime() - date1.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setTotalNights(differenceInDays);

      const roomCost = differenceInDays * (hotel.room_cost_per_night || 0);
      setTotalRoomCost(roomCost);

      let extrasCost = 0;
      extras.forEach((extra) => {
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
    const hotelId = localStorage.getItem("hotelId");
    const storedExtras = JSON.parse(
      localStorage.getItem("selectedExtras") || "[]"
    );

    if (hotelId) {
      loadHotelData(hotelId);
    } else {
      setError("Hotel ID not found in localStorage");
    }
  }, []);

  useEffect(() => {
    if (hotel) {
      calculateCosts(checkInDate, checkOutDate, hotel, selectedExtras);
    }
  }, [hotel, checkInDate, checkOutDate, selectedExtras]); // Este `useEffect` depende de `hotel`, `checkInDate`, `checkOutDate` y `selectedExtras`

  // Función para activar/desactivar extras
  const toggleExtra = (extra) => {
    const updatedExtras = selectedExtras.includes(extra)
      ? selectedExtras.filter((e) => e !== extra)
      : [...selectedExtras, extra];
    setSelectedExtras(updatedExtras);
  };

  // Función para manejar el cambio de fecha de check-in
  const handleCheckInChange = (e) => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);
    localStorage.setItem("checkInDate", newCheckInDate);
  };

  // Función para manejar el cambio de fecha de check-out
  const handleCheckOutChange = (e) => {
    const newCheckOutDate = e.target.value;
    setCheckOutDate(newCheckOutDate);
    localStorage.setItem("checkOutDate", newCheckOutDate);
  };

  // Función para manejar el cambio del número de adultos
  const handleAdultsChange = (e) => {
    const newAdults = parseInt(e.target.value);
    setAdults(newAdults);
    localStorage.setItem("adults", newAdults);
  };

  // Función para manejar el cambio del número de niños
  const handleChildrenChange = (e) => {
    const newChildren = parseInt(e.target.value);
    setChildren(newChildren);
    localStorage.setItem("children", newChildren);
  };

  // Memorizar el resumen de costos
  const memoizedCostSummary = useMemo(
    () => (
      <ReservationSummary
        totalNights={totalNights}
        roomCostPerNight={roomCostPerNight}
        totalRoomCost={totalRoomCost}
        selectedExtras={selectedExtras}
        totalExtrasCost={totalExtrasCost}
        finalTotalCost={finalTotalCost}
        adults={adults}
        children={children}
      />
    ),
    [
      totalNights,
      roomCostPerNight,
      totalRoomCost,
      selectedExtras,
      totalExtrasCost,
      finalTotalCost,
      adults,
      children,
    ]
  );

  return (
    <div className="reservation-review-page">
      <h1 className="tittle">Review Your Reservation</h1>
      {error && <ErrorMessage error={error} />}
      {hotel ? (
        <>
          <div className="hotel-info2">
            <p className="hotel-name">Name: {hotel.name || "Hotel Name"}</p>
            <p className="hotel-address">
              Address: {hotel.address || "Address not available"}
            </p>
            <p className="hotel-price">
              Price per night: ${hotel.room_cost_per_night}
            </p>
            <p className="hotel-description">
              Description: {hotel.description}
            </p>
          </div>
          <div className="reservation-details">
            <div className="block">
              <div className="date-container">
                <div className="date-input">
                  <label>Check-In Date</label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={handleCheckInChange}
                  />
                  {checkInError && <ErrorMessage error={checkInError} />}
                </div>

                <div className="date-input">
                  <label>Check-Out Date</label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={handleCheckOutChange}
                  />
                  {checkOutError && <ErrorMessage error={checkOutError} />}
                </div>
              </div>
            </div>

            <div className="block">
              <div className="input-group vertical">
                <label htmlFor="adults">
                  <FaUser /> {/* Icono de adulto a la izquierda */}
                  <input
                    id="adults"
                    type="number"
                    value={adults}
                    onChange={handleAdultsChange}
                    min="1"
                  />
                </label>
              </div>

              <div className="input-group vertical">
                <label htmlFor="children">
                  <FaChild /> {/* Icono de niño a la izquierda */}
                  <input
                    id="children"
                    type="number"
                    value={children}
                    onChange={handleChildrenChange}
                    min="0"
                  />
                </label>
              </div>
            </div>

            <div className="block">
              <h6>Extras</h6>
              <div className="block">
                <p>Selected Extras:</p>
                <ul className="selected-extras">
                  {selectedExtras.map((extra) => (
                    <li key={extra.id} onClick={() => toggleExtra(extra)}>
                      {extra.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="block">
                <h3>Deactivated Extras:</h3>
                <ul className="deactivated-extras">
                  {allExtras
                    .filter((extra) => !selectedExtras.includes(extra))
                    .map((extra) => (
                      <li
                        key={extra.id}
                        onClick={() => toggleExtra(extra)}
                        style={{ textDecoration: "line-through" }}
                      >
                        {extra.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
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
