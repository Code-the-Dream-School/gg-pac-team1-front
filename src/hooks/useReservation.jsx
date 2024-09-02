import { useState, useEffect } from 'react';

const useReservation = (expirationTime = 24 * 60 * 60 * 1000) => {
  // State to store the current reservation number
  const [reservationNumber, setReservationNumber] = useState('N/A');

  // Function to generate a new reservation number
  const generateReservationNumber = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let reservationNumber = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      reservationNumber += characters[randomIndex];
    }
    return reservationNumber;
  };

  // Function to handle the logic for generating and storing the reservation number
  const handleReservationNumber = () => {
    const storedReservationDate = localStorage.getItem('reservationDate');
    const now = new Date();

    if (storedReservationDate) {
      // If a stored reservation date exists, calculate the time difference
      const timeDifference = now.getTime() - new Date(storedReservationDate).getTime();

      // If the time difference exceeds the expiration time, generate a new reservation number
      if (timeDifference > expirationTime) {
        const newReservationNumber = generateReservationNumber();
        setReservationNumber(newReservationNumber);
        localStorage.setItem('reservationNumber', newReservationNumber);
        localStorage.setItem('reservationDate', now.toISOString());
      } else {
        // If not expired, use the stored reservation number
        const storedReservationNumber = localStorage.getItem('reservationNumber');
        setReservationNumber(storedReservationNumber || 'N/A');
      }
    } else {
      // If no reservation date is stored, generate a new reservation number
      const newReservationNumber = generateReservationNumber();
      setReservationNumber(newReservationNumber);
      localStorage.setItem('reservationNumber', newReservationNumber);
      localStorage.setItem('reservationDate', now.toISOString());
    }
  };

  // useEffect is used to handle the logic when the component mounts
  useEffect(() => {
    handleReservationNumber();
  }, []);

  // Return the current reservation number
  return reservationNumber;
};

export default useReservation;
