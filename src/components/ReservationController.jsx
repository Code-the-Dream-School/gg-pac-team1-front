import React, { useState } from 'react';
import Modal from './Modal'; // Componente del modal que guarda la reserva

const ReservationController = ({ reservationDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla si el modal está abierto
  const [isPaymentReady, setIsPaymentReady] = useState(false); // Para controlar cuándo hacer el pago
  const [reservationData, setReservationData] = useState(null); // Datos de la reserva guardada

  // Función para manejar la lógica cuando la reserva se guarda con éxito
  const handleReservationSuccess = (savedReservation) => {
    console.log('Reserva guardada exitosamente:', savedReservation);
    setReservationData(savedReservation); // Guardamos los detalles de la reserva
    setIsPaymentReady(true); // Habilitamos el pago
    setIsModalOpen(false); // Cerramos el modal
  };

  // Función para manejar errores en el guardado de la reserva
  const handleReservationError = (error) => {
    console.error('Error al guardar la reserva:', error);
  };

  // Función que se ejecuta cuando el modal intenta guardar la reserva
  const saveReservation = async (reservationData) => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        const savedReservation = await response.json();
        handleReservationSuccess(savedReservation);
      } else {
        const errorData = await response.json();
        handleReservationError(errorData);
      }
    } catch (error) {
      handleReservationError(error);
    }
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button onClick={() => setIsModalOpen(true)}>
        Abrir Modal para Guardar y Pagar
      </button>

      {/* Mostramos el modal */}
      {isModalOpen && (
        <Modal 
          isOpen={isModalOpen} 
          reservationDetails={reservationDetails} 
          onSaveReservation={saveReservation} // Pasamos la función para guardar
          onClose={() => setIsModalOpen(false)} 
        />
      )}

      {/* Mostramos el formulario de pago de Stripe solo si la reserva fue guardada exitosamente */}
      {isPaymentReady && reservationData && (
        <div>
          <h2>Proceder al pago</h2>
          {/* Aquí podrías llamar al componente de Stripe para ejecutar el pago */}
        </div>
      )}
    </div>
  );
};

export default ReservationController;