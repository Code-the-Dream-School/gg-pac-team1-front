import { useState, useEffect, useCallback } from 'react';
import { loadHotelData, getRoomsByHotelId } from '../services/bookingServices';

const useLoadHotelData = (hotelId) => {
  const [hotel, setHotel] = useState(null);
  const [error, setError] = useState(null);

  const handleError = useCallback((message) => {
    setError(message);
  }, []);

  useEffect(() => {
    if (!hotelId) {
      handleError("Hotel ID not found in URL parameters");
      return;
    }

    const fetchHotelAndRoomsData = async () => {
      try {
        const [loadedHotel, loadedRooms] = await Promise.all([
          loadHotelData(hotelId),
          getRoomsByHotelId(hotelId)
        ]);

        if (!loadedRooms.rooms.length) {
          handleError("No rooms available for this hotel");
          return;
        }

        const firstRoom = loadedRooms.rooms[0];
        const costPerNight = firstRoom.room_cost_per_night?.$numberDecimal || firstRoom.room_cost_per_night;

        setHotel({
          ...loadedHotel,
          rooms: loadedRooms.rooms,
          room_cost_per_night: Number(costPerNight),
        });
      } catch (err) {
        handleError(err.message);
      }
    };

    fetchHotelAndRoomsData();
  }, [hotelId, handleError]);

  return { hotel, error };
};

export default useLoadHotelData;