import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { loadHotelData, calculateCosts, getRoomsByHotelId } from '../services/bookingServices'; // Import async functions
import ReservationSummary from '../components/ReservationSummary';
import ReservationNumber from '../components/ReservationNumber';
import useReservation from '../hooks/useReservation';
import { FaUser, FaChild } from 'react-icons/fa';

// Component to display error messages
const ErrorMessage = ({ error }) => <p style={{ color: "red" }}>{error}</p>;

const ReservationReviewPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hotelId = queryParams.get("hotelId");
  const initialCheckInDate = queryParams.get("checkInDate") || "";
  const initialCheckOutDate = queryParams.get("checkOutDate") || "";
  const initialAdults = parseInt(queryParams.get("adults") || "2");
  const initialChildren = parseInt(queryParams.get("children") || "0");

  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [checkInDate, setCheckInDate] = useState(initialCheckInDate);
  const [checkOutDate, setCheckOutDate] = useState(initialCheckOutDate);
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);
  const [roomCostPerNight, setRoomCostPerNight] = useState(0);
  const [totalNights, setTotalNights] = useState(0);
  const [totalRoomCost, setTotalRoomCost] = useState(0);
  const [finalTotalCost, setFinalTotalCost] = useState(0);
  const [checkInError, setCheckInError] = useState(null);
  const [checkOutError, setCheckOutError] = useState(null);
  const [error, setError] = useState(null);

  const reservationNumber = useReservation(15 * 1000); // 15 seconds for testing

  // Load hotel data from API or handle error
  useEffect(() => {
    const fetchHotelData = async () => {
      if (hotelId) {
        try {
          const loadedHotel = await loadHotelData(hotelId);  // Await async function
          setHotel(loadedHotel);
          setRoomCostPerNight(loadedHotel.room_cost_per_night);
        } catch (err) {
          setError(err.message);
        }
      } else {
        setError("Hotel ID not found in URL parameters");
      }
    };

    fetchHotelData();  // Execute the async function to load the hotel data
  }, [hotelId]);

  // Load rooms data from API or handle error
  useEffect(() => {
    const fetchRoomsData = async () => {
      if (hotelId) {
        try {
          const loadedRooms = await getRoomsByHotelId(hotelId);  // Await async function
          setRooms(loadedRooms.rooms);
          if (loadedRooms.rooms.length > 0) {
            const firstRoom = loadedRooms.rooms[0];
            const costPerNight = firstRoom.room_cost_per_night?.$numberDecimal || firstRoom.room_cost_per_night;
            setRoomCostPerNight(Number(costPerNight));
          }
        } catch (err) {
          setError(err.message);
        }
      }
    };

    fetchRoomsData();  // Execute the async function to load the rooms data
  }, [hotelId]);

  // Calculate costs when dates or hotel change
  useEffect(() => {
    if (hotel) {
      try {
        const { totalNights, totalRoomCost, finalTotalCost } = calculateCosts(
          checkInDate,
          checkOutDate,
          hotel
        );
        setTotalNights(totalNights);
        setTotalRoomCost(totalRoomCost);
        setFinalTotalCost(finalTotalCost);
      } catch (err) {
        setError(err.message);
      }
    }
  }, [hotel, checkInDate, checkOutDate]);

  // Handle check-in date change
  const handleCheckInChange = (e) => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);
  };

  // Handle check-out date change
  const handleCheckOutChange = (e) => {
    const newCheckOutDate = e.target.value;
    setCheckOutDate(newCheckOutDate);
  };

  // Handle adults change
  const handleAdultsChange = (e) => {
    const newAdults = parseInt(e.target.value);
    setAdults(newAdults);
  };

  // Handle children change
  const handleChildrenChange = (e) => {
    const newChildren = parseInt(e.target.value);
    setChildren(newChildren);
  };

  // Memorize the cost summary to avoid recalculation on every render
  const memoizedCostSummary = useMemo(
    () => (
      <ReservationSummary
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        totalNights={totalNights}
        roomCostPerNight={roomCostPerNight}
        totalRoomCost={totalRoomCost}
        finalTotalCost={finalTotalCost}
        adults={adults}
        children={children}
      />
    ),
    [
      checkInDate,
      checkOutDate,
      totalNights,
      roomCostPerNight,
      totalRoomCost,
      finalTotalCost,
      adults,
      children,
    ]
  );

  return (
    <div className="reservation-review-page" style={styles.page}>
      <h1 className="title" style={styles.title}>Review Your Reservation</h1>
      {error && <ErrorMessage error={error} />}
      {hotel ? (
        <>
          <div className="hotel-info2" style={styles.section}>
            <h2 style={styles.sectionTitle}>Hotel Information</h2>
            <p><strong>Name:</strong> {hotel.name || "Hotel Name"}</p>
            <p><strong>Address:</strong> {hotel.address || "Address not available"}</p>
            <p><strong>Price per night:</strong> ${hotel.room_cost_per_night}</p>
            <p><strong>Description:</strong> {hotel.description}</p>
          </div>
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
          <div className="reservation-details" style={styles.section}>
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
                  <FaUser /> {/* Adult icon */}
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
                  <FaChild /> {/* Child icon */}
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
          </div>

          {memoizedCostSummary}
        </>
      ) : (
        <p>Loading reservation summary...</p>
      )}
      <ReservationNumber reservationNumber={reservationNumber} />
      <div className="confirm-button-container" style={styles.confirmButtonContainer}>
        <button className="confirm-reservation-btn" style={styles.confirmButton}>Confirm Reservation</button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    padding: '10px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    margin: '10px 0',
    fontSize: '16px',
  },
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
  confirmButtonContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  confirmButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ReservationReviewPage;