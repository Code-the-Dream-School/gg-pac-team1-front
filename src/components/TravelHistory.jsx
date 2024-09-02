import React, { useState } from 'react';

const TravelHistory = () => {
  // Estado para simular el historial de viajes
  const [hasTravelHistory, setHasTravelHistory] = useState(false);

  // Mensajes personalizados
  const message = hasTravelHistory
    ? 'Here is your travel history:'
    : 'You don\'t have any travel history with us. Consider booking some accommodations with TravelAmigos!';

  return (
    <div className="travel-history">
      <h3>Travel History</h3>
      <p>{message}</p>
      {hasTravelHistory && (
        <ul>
          {/* Aquí se debería mapear y mostrar el historial de viajes si existe */}
          <li>Trip to Paris - January 2023</li>
          <li>Weekend in Rome - June 2023</li>
        </ul>
      )}
    </div>
  );
};

export default TravelHistory;
