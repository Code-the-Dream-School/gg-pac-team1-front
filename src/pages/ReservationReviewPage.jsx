import React, { useEffect, useState } from 'react';

const ReservationReviewPage = () => {
  const [reservationData, setReservationData] = useState(null);

  useEffect(() => {
    // Recuperar los datos de 'localStorage'
    const storedData = localStorage.getItem('reservationData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log('Reservation Data:', parsedData); // Imprimir en consola los datos recibidos
      setReservationData(parsedData);
    } else {
      console.log('No reservation data found'); // Imprimir en consola si no se encuentran datos
    }
  }, []);

  if (!reservationData) {
    return <div>No reservation data found. Please start your reservation process.</div>;
  }

  return (
    <div>
      <h1>Reservation Review</h1>
      {/* Aquí se mostrará la información de la reserva */}
    </div>
  );
}

export default ReservationReviewPage;
