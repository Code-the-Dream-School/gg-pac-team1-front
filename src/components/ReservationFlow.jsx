import React, { useState } from 'react';
import SaveReservation from './SaveReservation'; // Componente para guardar la reserva
import Modal from './Modal'; // Componente para el pago

const ReservationFlow = ({ reservationDetails, userEmail }) => {
  const [reservationSuccess, setReservationSuccess] = useState(false); // Para saber si la reserva fue exitosa
  const [showPaymentModal, setShowPaymentModal] = useState(false); // Controlar si mostramos el modal de pago
  const [reservationData, setReservationData] = useState(null); // Detalles de la reserva tras guardarla

  // Función que se ejecuta cuando la reserva se guarda exitosamente
  const handleReservationSuccess = (data) => {
    setReservationSuccess(true);
    setReservationData(data); // Guardamos los datos de la reserva
    setShowPaymentModal(true); // Mostramos el modal de pago
  };

  // Función que se ejecuta cuando hay un error al guardar la reserva
  const handleReservationError = (error) => {
    console.error('Error al guardar la reserva:', error);
    // Manejar el error aquí (por ejemplo, mostrar un mensaje al usuario)
  };

  return (
    <div>
      {!reservationSuccess && (
        <SaveReservation 
          reservationDetails={reservationDetails} 
          userEmail={userEmail} 
          onSaveSuccess={handleReservationSuccess} 
          onSaveError={handleReservationError} 
        />
      )}

      {/* Mostramos el modal de pago solo si la reserva se guardó exitosamente */}
      {showPaymentModal && reservationData && (
        <Modal 
          isOpen={showPaymentModal} 
          onClose={() => setShowPaymentModal(false)} 
          reservationDetails={reservationData} 
        />
      )}
    </div>
  );
};

export default ReservationFlow;
