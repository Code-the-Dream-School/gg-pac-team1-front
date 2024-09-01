function HotelFacilities({ hotel }) {
    return (
      <div className="hotel-facilities">
        <p>Pool: {hotel.pool ? 'Yes' : 'No'} | Restaurant: {hotel.restaurant ? 'Yes' : 'No'}</p>
        <p>Wi-Fi: {hotel.wifi.available ? `Yes (${hotel.wifi.quality})` : 'No'}</p>
        <p>
          Parking: {hotel.parking.available ? `Yes ($${hotel.parking.cost_per_day}/day)` : 'No'}
        </p>
        <p>Breakfast included: {hotel.breakfast_included ? 'Yes' : 'No'}</p>
        <p>
          Distance to beach: {hotel.distance_to_beach} | Distance to airport: {hotel.distance_to_airport}
        </p>
        <p className="hotel-pet-policy">
          Pets: {hotel.pet_friendly.allowed ? `Yes (Limit: ${hotel.pet_friendly.weight_limit_lbs} lbs, Additional fee: $${hotel.pet_friendly.additional_fee})` : 'No'}
        </p>
      </div>
    );
  }
  
  export default HotelFacilities;
  