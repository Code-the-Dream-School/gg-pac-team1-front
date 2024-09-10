import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadHotelData } from '../services/bookingServices'; // Import async function

const ReservationReviewPage = () => {
  // Obtener los parámetros de la URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlParams = {};
  queryParams.forEach((value, key) => {
    urlParams[key] = value;
  });

  const hotelId = queryParams.get("hotelId");

  const [hotel, setHotel] = useState(null);
  const [error, setError] = useState(null);

  // Log para verificar que hotelId se obtiene correctamente
  console.log("hotelId:", hotelId);

  // useEffect para cargar los datos del hotel
  useEffect(() => {
    const fetchHotelData = async () => {
      if (hotelId) {
        try {
          console.log("Fetching data for hotelId:", hotelId);
          const loadedHotel = await loadHotelData(hotelId);  // Await async function
          console.log("loadedHotel:", loadedHotel); // Log para verificar los datos cargados
          setHotel(loadedHotel);
        } catch (err) {
          console.error("Error loading hotel data:", err); // Log para errores
          setError(err.message);
        }
      } else {
        console.error("Hotel ID not found in URL parameters");
        setError("Hotel ID not found in URL parameters");
      }
    };

    fetchHotelData();  // Execute the async function to load the hotel data
  }, [hotelId]);

  return (
    <div className="reservation-review-page">
      <h1 className="title">Review Your Reservation</h1>
      <div className="url-params-data">
        <h2>URL Parameters</h2>
        {Object.keys(urlParams).length > 0 ? (
          <ul>
            {Object.entries(urlParams).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No URL parameters found</p>
        )}
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {hotel ? (
        <div className="hotel-info2">
          <p className="hotel-name">Name: {hotel.name || "Hotel Name"}</p>
          <p className="hotel-address">Address: {hotel.street || "Street not available"}, {hotel.city || "City not available"}, {hotel.state || "State not available"}, {hotel.zipCode || "Zip Code not available"}</p>
        </div>
      ) : (
        <p>Loading hotel information...</p>
      )}
    </div>
  );
};

export default ReservationReviewPage;