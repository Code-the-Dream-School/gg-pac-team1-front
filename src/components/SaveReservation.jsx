import React, { useState, useEffect } from 'react';

const SaveReservation = ({ reservationDetails, userEmail, onSaveSuccess, onSaveError }) => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Obtener el ID del usuario desde localStorage
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        if (parsedUser && parsedUser.id) {
          setUserId(parsedUser.id);
        } else {
          console.error('User ID not found in parsed user object');
          onSaveError('User ID not found in parsed user object');
        }
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
        onSaveError('Error parsing user from localStorage');
      }
    } else {
      console.error('No user found in localStorage');
      onSaveError('No user found in localStorage');
    }
  }, [onSaveError]);

  const validateReservationDetails = () => {
    if (!reservationDetails.checkInDate || !reservationDetails.checkOutDate) {
      return 'Check-in and check-out dates are required.';
    }
    if (!reservationDetails.adults || reservationDetails.adults < 1) {
      return 'At least one adult is required.';
    }
    if (!reservationDetails.hotelId) {
      return 'Hotel ID is required.';
    }
    if (!reservationDetails.roomId) {
      return 'Room ID is required.';
    }
    if (!reservationDetails.price) {
      return 'Final total cost is required.';
    }
    if (!userEmail) {
      return 'User email is required.';
    }
    return null;
  };

  const handleSaveReservation = async () => {
    const validationError = validateReservationDetails();
    if (validationError) {
      onSaveError(validationError);
      return;
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQ3NTE5YjgzNGRkODM1NTY0MzE0NjkiLCJuYW1lIjoibGVvbmFyZCBkYXZpZCBjYWNlcmVzIiwiaWF0IjoxNzI2MTMyMjYzLCJleHAiOjE3Mjc4NjAyNjN9.BU4woc_kKIhVzc6MLfbqOHjSDN82Npk4xe3Vs7miITo"; // El token que mencionaste

    // Datos de la reserva
    const bookingData = {
      checkInDate: reservationDetails.checkInDate,
      check_in_time: reservationDetails.check_in_time || "3:00 PM",
      check_out_time: reservationDetails.check_out_time || "11:00 AM",
      checkOutDate: reservationDetails.checkOutDate,
      available: false,
      booked: true,
      guests: {
        adults: reservationDetails.adults,
        children: reservationDetails.children,
        children_ages: reservationDetails.children_ages || [],
      },
      currency: "USD",
      price: reservationDetails.price,
      guest_count: reservationDetails.adults + reservationDetails.children,
      guestEmail: userEmail,
      guestName: reservationDetails.guestName || "Guest",
      roomId: reservationDetails.roomId,
      hotelId: reservationDetails.hotelId,
      createdBy: userId || "system",
    };

    console.log('Datos de la reserva enviados:', JSON.stringify(bookingData, null, 2));

    try {
      const response = await fetch('http://localhost:8000/api/v1/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Aquí enviamos el token en los headers
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const responseData = await response.json(); // Obtenemos la respuesta en JSON del servidor
        console.log('Reserva guardada exitosamente:', responseData); // Imprimir respuesta exitosa
        onSaveSuccess('Reserva guardada en la base de datos'); // Llamada para éxito
      } else {
        const errorData = await response.json(); // Si la respuesta no es OK, obtenemos el error
        console.error('Error al guardar la reserva:', errorData); // Mostrar error
        onSaveError(`Error del servidor: ${errorData.message || 'Error desconocido'}`); // Mostrar error al usuario
      }
    } catch (error) {
      console.error('Error durante la comunicación con el servidor:', error); // Manejar errores de red
      onSaveError('Error al comunicarse con el servidor');
    }
  };

  return (
    <div>
      <button onClick={handleSaveReservation}>Save Reservation</button>
    </div>
  );
};

export default SaveReservation;
