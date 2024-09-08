// ============================
// Search Page
// ============================

// Function to search hotels by city and state
export async function searchHotels(city, state) {
  const token = localStorage.getItem('token');
  try {
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

    // Ensure city and state are defined
    const destination = `${city || ''}, ${state || ''}`.toLowerCase();

    const filteredHotels = hotels.filter(hotel => {
      // Ensure hotel.destination is defined and not null
      if (!hotel.destination) return false;
      
      // Split destination into city and state
      const [hotelCity = '', hotelState = ''] = hotel.destination.split(', ').map(part => part.toLowerCase());

      // Return true if either city or state matches the destination
      return hotelCity.includes(destination) || hotelState.includes(destination);
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
    let matches = true;

    if (filters.priceMin && hotel.price < filters.priceMin) {
      matches = false;
    }

    if (filters.priceMax && hotel.price > filters.priceMax) {
      matches = false;
    }

    if (filters.reviews && hotel.reviews < filters.reviews) {
      matches = false;
    }

    if (filters.roomType && hotel.roomType !== filters.roomType) {
      matches = false;
    }

    return matches;
  });
};

// Function to sort hotels based on sort option
export const sortHotels = async (hotels, sortOption) => {
  switch (sortOption) {
    case 'price-asc':
      return hotels.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return hotels.sort((a, b) => b.price - a.price);
    case 'reviews-desc':
      return hotels.sort((a, b) => b.reviews - a.reviews);
    case 'reviews-asc':
      return hotels.sort((a, b) => a.reviews - b.reviews);
    default:
      return hotels;
  }
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
// Booking Page
// ============================

// Function to load hotel data based on hotelId
export const loadHotelData = async (hotelId) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/hotels/${hotelId}`, {
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
      address: currentHotel.address || 'Address not available',
      category: currentHotel.category || 'Category not available',
      description: currentHotel.description || 'Description not available',
      room_cost_per_night: currentHotel.room_cost_per_night,
      check_in_time: currentHotel.check_in_time,
      check_out_time: currentHotel.check_out_time,
      extras: currentHotel.extras || []
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to calculate costs based on the reservation
export const calculateCosts = (checkInDate, checkOutDate, hotel, extras) => {
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
  let extrasCost = 0;
  extras.forEach(extra => {
    extrasCost += extra.price * differenceInDays;
  });

  return {
    totalNights: differenceInDays,
    totalRoomCost: roomCost,
    totalExtrasCost: extrasCost,
    finalTotalCost: roomCost + extrasCost
  };
};
