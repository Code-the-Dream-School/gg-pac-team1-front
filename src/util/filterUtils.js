// utils/filterUtils.js

const EARTH_RADIUS_MILES = 3959; // Radius of Earth in miles

// Function to calculate distance between two coordinates
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRadians = angle => angle * (Math.PI / 180);
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS_MILES * c;
};

// Function to filter hotels by proximity
export const filterByProximity = (hotels, userLocation, radius) => {
  return hotels.filter(hotel => {
    const distance = calculateDistance(userLocation.latitude, userLocation.longitude, hotel.latitude, hotel.longitude);
    return distance <= radius;
  });
};

// Function to calculate average price
export const calculateAveragePrice = (hotels) => {
  const total = hotels.reduce((sum, hotel) => sum + hotel.price, 0);
  return (hotels.length > 0) ? (total / hotels.length).toFixed(2) : 0;
};

// Function to filter coastal hotels
export const filterByCoastalLocation = (hotels) => {
  return hotels.filter(hotel => hotel.isCoastal);
};
