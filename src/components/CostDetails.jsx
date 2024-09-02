import React from 'react';

const CostDetails = ({ totalNights, roomCostPerNight, totalRoomCost, selectedExtras, totalExtrasCost }) => (
  <div className="cost-details">
    <p>Room Cost: <span>{totalNights} nights * ${roomCostPerNight} per night = ${totalRoomCost}</span></p>
    <div className="extras-section">
      <h3>Selected Extras</h3>
      <ul className="extras-list">
        {selectedExtras.map((extra, index) => (
          <li key={index}>
            {extra.name}: <span>{totalNights} nights * ${extra.price} per day = ${extra.price * totalNights}</span>
          </li>
        ))}
      </ul>
      <p>Total Extras Cost: <span>${totalExtrasCost}</span></p>
    </div>
  </div>
);

export default CostDetails;
