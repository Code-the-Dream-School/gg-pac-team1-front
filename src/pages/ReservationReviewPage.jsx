import React, { useEffect, useState } from 'react';

const ReservationReviewPage = () => {
  const [reservationData, setReservationData] = useState([]);

  useEffect(() => {
    // Recuperar todos los datos de 'localStorage'
    const allStorageData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      let value = localStorage.getItem(key);

      try {
        // Intentar parsear el valor como JSON
        value = JSON.parse(value);
      } catch (error) {
        // Si falla, dejar el valor como está (una cadena)
      }

      allStorageData.push({ key, value });
    }

    if (allStorageData.length > 0) {
      setReservationData(allStorageData);
      console.log('All Reservation Data:', allStorageData);  // Imprimir todos los datos recibidos
    } else {
      console.log('No data found in localStorage');  // Imprimir en consola si no se encuentran datos
    }
  }, []);

  if (reservationData.length === 0) {
    return <div>No data found in localStorage. Please start your reservation process.</div>;
  }

  return (
    <div>
      <h1>Reservation Review</h1>
      {reservationData.map((item, index) => (
        <div key={index}>
          <p><strong>{item.key}:</strong> {typeof item.value === 'object' ? JSON.stringify(item.value) : item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default ReservationReviewPage;
