// useCalculateCosts.js
import { useState } from 'react';

const useCalculateCosts = (hotel, checkInDate, checkOutDate, selectedExtras) => {
  const [totalNights, setTotalNights] = useState(0);
  const [totalRoomCost, setTotalRoomCost] = useState(0);
  const [totalExtrasCost, setTotalExtrasCost] = useState(0);
  const [finalTotalCost, setFinalTotalCost] = useState(0);

  const calculateCosts = () => {
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
      selectedExtras.forEach(extra => {
        extrasCost += extra.price * differenceInDays;
      });
      setTotalExtrasCost(extrasCost);

      setFinalTotalCost(roomCost + extrasCost);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { totalNights, totalRoomCost, totalExtrasCost, finalTotalCost, calculateCosts };
};

export default useCalculateCosts;
