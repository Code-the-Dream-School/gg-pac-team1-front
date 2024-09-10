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

// Function to load hotel data based on hotelId
export const loadHotelData = async (hotel_Id) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/hotels/${hotel_Id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error fetching hotel data.');
    }

    const currentHotel = await response.json();
    if (!currentHotel) {
      throw new Error('Hotel not found');
    }
    return {
      name: currentHotel.name,
      state: currentHotel.state || '',
      city: currentHotel.city || '',
      street: currentHotel.street || '',
      zipCode: currentHotel.zipCode || '',
      brand: currentHotel.brand || '',
      stars: currentHotel.stars || 0,
      latitude: currentHotel.latitude || '',
      longitude: currentHotel.longitude || '',
      chain: currentHotel.chain || '',
      createdBy: currentHotel.createdBy || '',
      wifi: currentHotel.wifi || false,
      okeanView: currentHotel.okeanView || false,
      pool: currentHotel.pool || false,
      gym: currentHotel.gym || false,
      spa: currentHotel.spa || false,
      parking: {
        aviability: currentHotel.parking?.aviability || false,
        cost_per_day: currentHotel.parking?.cost_per_day || 0
      },
      restaurant: currentHotel.restaurant || false,
      image: currentHotel.image || [{ url: '', description: '' }],
      galeryImage: currentHotel.galeryImage || [{ url: '', description: '' }],
      languages_spoken: currentHotel.languages_spoken || [''],
      cancelation_policy: currentHotel.cancelation_policy || '',
      rating: currentHotel.rating || 0,
      rooms: currentHotel.rooms || []
    };
  } catch (error) {
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