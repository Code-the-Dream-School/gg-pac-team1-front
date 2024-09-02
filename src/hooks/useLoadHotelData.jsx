// useLoadHotelData.js
import { useState } from 'react';
import tripsData from '../tripsData';

const useLoadHotelData = () => {
  const [hotel, setHotel] = useState(null);
  const [error, setError] = useState(null);

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
    } catch (error) {
      setError(error.message);
    }
  };

  return { hotel, error, loadHotelData };
};

export default useLoadHotelData;
