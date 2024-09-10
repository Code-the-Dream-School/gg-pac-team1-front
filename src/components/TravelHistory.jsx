import React, { useState } from 'react';
import '../styles/components/_travelHistory.scss';

const TravelHistory = () => {
  const [hasTravelHistory, setHasTravelHistory] = useState(true);
  const [activeBookings, setActiveBookings] = useState([
    'Hotel in New York - October 2024',
    'Resort in Bali - November 2024',
  ]);

  const travelHistoryMessage = hasTravelHistory
    ? 'Here is your travel history:'
    : 'You don\'t have any travel history with us. Consider booking some accommodations with TravelAmigos!';

  const activeBookingsMessage = activeBookings.length
    ? 'Here are your active bookings:'
    : 'You have no active bookings at the moment.';

  return (
    <div className="travel-history">
      <h2>Reservations</h2>

      {/* Sección de reservas activas */}
      <h3>Active Bookings</h3>
      <p>{activeBookingsMessage}</p>
      {activeBookings.length > 0 && (
        <ul className="active-bookings">
          {activeBookings.map((booking, index) => (
            <li key={index} className="booking-item">
              <span className="description">{booking}</span>
              <div className="button-group">
                <button className="icon-button view">
                  <i className="fas fa-eye"></i>
                </button>
                <button className="icon-button delete">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <hr />

      {/* Sección de historial de viajes */}
      <h3>Travel History</h3>
      <p>{travelHistoryMessage}</p>
      {hasTravelHistory && (
        <ul className="travel-history-list">
          <li className="history-item">
            <span className="description">Trip to Paris - January 2023</span>
            <div className="button-group">
              <button className="icon-button view">
                <i className="fas fa-eye"></i>
              </button>
              <button className="icon-button delete">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </li>
          <li className="history-item">
            <span className="description">Weekend in Rome - June 2023</span>
            <div className="button-group">
              <button className="icon-button view">
                <i className="fas fa-eye"></i>
              </button>
              <button className="icon-button delete">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TravelHistory;
