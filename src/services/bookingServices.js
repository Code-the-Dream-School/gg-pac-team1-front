// ============================
// Search Page
// ============================

// Function to search hotels by city and state
export async function searchHotels(city, state) {
  const token = localStorage.getItem('token');
  try {
    // Fetch the data from the backend
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/hotels`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const hotels = data.hotels || []; // Ensure hotels is an array

    if (!Array.isArray(hotels)) {
      throw new Error('Expected hotels to be an array');
    }

    // Normalize search criteria to lowercase
    const cityLower = city ? city.toLowerCase() : '';
    const stateLower = state ? state.toLowerCase() : '';

    // Filter hotels based on city and state
    const filteredHotels = hotels.filter(hotel => {
      // Ensure hotel.city and hotel.state are defined and not null
      const hotelCity = hotel.city ? hotel.city.toLowerCase() : '';
      const hotelState = hotel.state ? hotel.state.toLowerCase() : '';

      // Check if the city and state match the search criteria
      const cityMatches = cityLower ? hotelCity.includes(cityLower) : true;
      const stateMatches = stateLower ? hotelState.includes(stateLower) : true;

      return cityMatches && stateMatches;
    });

    return filteredHotels;
  } catch (error) {
    console.error('Error fetching hotels:', error.message);
    return []; // Return an empty array in case of error
  }
}

// Function to search hotels by city or state
export async function searchHotelsByCityOrState(city, state) {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('User not authenticated. You must log in.');
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/hotels`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error in server response.');
    }

    const data = await response.json();
    return data.hotels; // Assume hotel data is in the 'hotels' field
  } catch (error) {
    console.error('Error searching for hotels:', error);
    throw error; // Throw the error to be handled by the component
  }
}

// Function to filter hotels based on filters
export const filterHotels = (hotels, filters) => {
  return hotels.filter(hotel => {
    const meetsPriceMin = filters.priceMin ? hotel.price >= filters.priceMin : true;
    const meetsPriceMax = filters.priceMax ? hotel.price <= filters.priceMax : true;
    const meetsReviews = filters.reviews ? hotel.reviews >= filters.reviews : true;
    const meetsRoomType = filters.roomType ? hotel.roomType === filters.roomType : true;

    return meetsPriceMin && meetsPriceMax && meetsReviews && meetsRoomType;
  });
};

export const filterHotelsByRating = (hotels, rating) => {
  return hotels.filter(hotel => hotel.rating >= rating);
};

// Function to sort hotels based on sort option
export const sortHotels = (hotels, sortOption) => {
  let sortedHotels = [...hotels];
  switch (sortOption) {
    case 'price-asc':
      sortedHotels.sort((a, b) => a.rooms[0].room_cost_per_night.$numberDecimal - b.rooms[0].room_cost_per_night.$numberDecimal);
      break;
    case 'price-desc':
      sortedHotels.sort((a, b) => b.rooms[0].room_cost_per_night.$numberDecimal - a.rooms[0].room_cost_per_night.$numberDecimal);
      break;
    case 'reviews-desc':
      sortedHotels.sort((a, b) => b.rating - a.rating);
      break;
    case 'reviews-asc':
      sortedHotels.sort((a, b) => a.rating - b.rating);
      break;
    case 'name-asc':
      sortedHotels.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sortedHotels.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }
  return sortedHotels;
};

// ============================
// Detail Page
// ============================

// Function to get hotel details by ID
export async function getHotelById(id) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/hotels/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error fetching hotel details.');
    }

    const hotel = await response.json();
    return hotel;
  } catch (error) {
    console.error('Error fetching hotel details:', error.message);
    return null; // Return null in case of error
  }
}

export async function getRoomsByHotelId(hotel_Id) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/rooms/${hotel_Id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error fetching rooms details.');
    }

    const rooms = await response.json();
    return rooms;
  } catch (error) {
    console.error('Error fetching rooms details:', error.message);
    return null; // Return null in case of error
  }
}

// ============================
// Validations and Utilities
// ============================

// Function to validate the check-in date
export const validateCheckInDate = (date) => {
  const today = new Date().toISOString().split('T')[0];
  return date >= today ? '' : 'Date must be today or a future date.';
};

// Function to validate the check-out date
export const validateCheckOutDate = (checkInDate, checkOutDate) => {
  return checkOutDate > checkInDate ? '' : 'Check-out date must be after the check-in date.';
};

// ============================
// LocalStorage Functions
// ============================

// Functions to handle localStorage
export const setItemInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getItemFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

// ============================
// Specific LocalStorage Functions
// ============================

export const saveHotelIdToLocalStorage = (hotel_Id) => {
  setItemInLocalStorage('hotel_Id', hotel_Id);
};

export const loadHotelDataFromLocalStorage = (setHasChildren, setChildren) => {
  const hasChildren = getItemFromLocalStorage('hasChildren') === 'true';
  const children = parseInt(getItemFromLocalStorage('children'), 10) || 0;

  setHasChildren(hasChildren);
  setChildren(children);
};

export const saveHasChildrenToLocalStorage = (hasChildren) => {
  setItemInLocalStorage('hasChildren', hasChildren);
};

export const saveChildrenToLocalStorage = (children) => {
  setItemInLocalStorage('children', children);
};

// ============================
// Booking Page
// ============================

export const loadHotelData = async (hotel_Id) => {
  const token = localStorage.getItem('token');
  console.log("Token:", token); // Log para verificar el token
  console.log("Fetching data for hotelId:", hotel_Id); // Log para verificar el hotelId

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/hotels/${hotel_Id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("API Response Status:", response.status); // Log para verificar el estado de la respuesta

    if (!response.ok) {
      throw new Error('Error fetching hotel data.');
    }

    const currentHotel = await response.json();
    console.log("API Response Data:", currentHotel); // Log para verificar los datos de la respuesta

    if (!currentHotel.hotel) {
      throw new Error('Hotel not found');
    }

    const hotelData = currentHotel.hotel; // Acceder a la propiedad hotel

    return {
      name: hotelData.name || "Hotel Name",
      state: hotelData.state || "State not available",
      city: hotelData.city || "City not available",
      street: hotelData.street || "Street not available",
      zipCode: hotelData.zipCode || "Zip Code not available",
      brand: hotelData.brand || '',
      stars: hotelData.stars || 0,
      latitude: hotelData.latitude || '',
      longitude: hotelData.longitude || '',
      chain: hotelData.chain || '',
      createdBy: hotelData.createdBy || '',
      wifi: hotelData.wifi || false,
      okeanView: hotelData.okeanView || false,
      pool: hotelData.pool || false,
      gym: hotelData.gym || false,
      spa: hotelData.spa || false,
      parking: {
        aviability: hotelData.parking?.aviability || false,
        cost_per_day: hotelData.parking?.cost_per_day || 0
      },
      restaurant: hotelData.restaurant || false,
      image: hotelData.image || [{ url: '', description: '' }],
      galeryImage: hotelData.galeryImage || [{ url: '', description: '' }],
      languages_spoken: hotelData.languages_spoken || [''],
      cancelation_policy: hotelData.cancelation_policy || '',
      rating: hotelData.rating || 0,
      rooms: hotelData.rooms || [] // Incluir las habitaciones
    };
  } catch (error) {
    console.error("Error in loadHotelData:", error.message); // Log para errores
    throw new Error(error.message);
  }
};




// Function to calculate costs based on the reservation
export const calculateCosts = (checkInDate, checkOutDate, hotel) => {
  if (!checkInDate || !checkOutDate) {
    throw new Error('Invalid dates');
  }
  const date1 = new Date(checkInDate);
  const date2 = new Date(checkOutDate);
  if (date1 >= date2) {
    throw new Error('Check-out date must be after the check-in date');
  }

  const differenceInTime = date2.getTime() - date1.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  const roomCost = differenceInDays * (hotel.room_cost_per_night || 0);

  return {
    totalNights: differenceInDays,
    totalRoomCost: roomCost,
    finalTotalCost: roomCost
  };
};