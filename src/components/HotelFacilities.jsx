function HotelFacilities({ hotel }) {
    return (
      <>
        <h3 className="facilities-title">Facilities</h3>
        <ul className="facilities-list">
          <li className="facility-item">Free Wi-Fi</li>
          <li className="facility-item">Swimming Pool</li>
          <li className="facility-item">Free Parking</li>
          <li className="facility-item">Pool: {hotel.pool ? 'Yes' : 'No'}</li>
          <li className="facility-item">Restaurant: {hotel.restaurant ? 'Yes' : 'No'}</li>
          <li className="facility-item">Wi-Fi: {hotel.wifi.available ? `Yes (${hotel.wifi.quality})` : 'No'}</li>
          <li className="facility-item">
            Parking: {hotel.parking.available ? `Yes ($${hotel.parking.cost_per_day}/day)` : 'No'}
          </li>
          <li className="facility-item">Breakfast included: {hotel.breakfast_included ? 'Yes' : 'No'}</li>
          <li className="facility-item">
            Distance to beach: {hotel.distance_to_beach} | Distance to airport: {hotel.distance_to_airport}
          </li>
          <li className="facility-item hotel-pet-policy">
            Pets: {hotel.pet_friendly.allowed ? `Yes (Limit: ${hotel.pet_friendly.weight_limit_lbs} lbs, Additional fee: $${hotel.pet_friendly.additional_fee})` : 'No'}
          </li>
        </ul>
      </>
    );
  }
  
  export default HotelFacilities;
  