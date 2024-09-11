import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentTest = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  // Ejemplo de array de items
  const items = [
    { id: 1, name: 'Item 1', amount: 3250 },
    { id: 2, name: 'Item 2', amount: 100 },
    { id: 3, name: 'Item 1', amount: 150 },
    { id: 4, name: 'Item 2', amount: 100 },
  ];

  // Función para generar el total de amount
  const generateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.amount, 0);
  };

  // Generar el total de amount
  const totalAmount = generateTotalAmount(items);

  // Información de la reserva
  const reservationInfo = {
    hotelName: 'Crystal Sands Hotel',
    address: 'Address not available',
    pricePerNight: 105,
    currency: 'USD',
    checkInDate: '2024-09-11',
    checkOutDate: '2024-09-27',
    totalNights: 16,
    roomCost: 1680,
    adults: 2,
    children: 2,
    totalCost: 1680,
    reservationNumber: 'PCS1WU2I2O',
    rooms: [
      {
        roomNumber: 19,
        bedrooms: 1,
        floor: 25,
        roomType: 'Standard',
        bedType: 'Full',
        view: 'city',
        costPerNight: 105,
      },
    ],
  };

  // Función para formatear la información de la reserva en texto plano
  const formatReservationInfo = (reservationInfo) => {
    return `
Hotel Name: ${reservationInfo.hotelName}
Address: ${reservationInfo.address}
Price Per Night: ${reservationInfo.pricePerNight} ${reservationInfo.currency} x ${reservationInfo.totalNights} nights = ${reservationInfo.roomCost} ${reservationInfo.currency}
..................................................................................................................
Check-In Date: ${reservationInfo.checkInDate}
Check-Out Date: ${reservationInfo.checkOutDate}
Total Nights: ${reservationInfo.totalNights}
Room Cost: ${reservationInfo.roomCost} ${reservationInfo.currency}
Adults: ${reservationInfo.adults}
Children: ${reservationInfo.children}
Total Cost: ${reservationInfo.totalCost} ${reservationInfo.currency}
Reservation Number: ${reservationInfo.reservationNumber}
Rooms:
${reservationInfo.rooms.map(room => `
  Room Number: ${room.roomNumber}
  Bedrooms: ${room.bedrooms}
  Floor: ${room.floor}
  Room Type: ${room.roomType}
  Bed Type: ${room.bedType}
  View: ${room.view}
  Cost Per Night: ${room.costPerNight} ${reservationInfo.currency}
..................................................................................................................
`).join('\n')}
    `;
  };

  // Formatear la información de la reserva
  const formattedDescription = formatReservationInfo(reservationInfo);

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <Elements stripe={stripePromise}>
          <CheckoutForm amount={totalAmount} description={formattedDescription} />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentTest;